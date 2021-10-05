// TO DO
// Need to scroll vertically on both tabs on both platforms
// change web icon
// change android/ios icon

// downloading does not work on mobile
// do not start dl progress for now
// audio fingerprinting does not work

import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { DownloadService } from '../core/download.service';
import { interval } from "rxjs";
import { AlertController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
     selector: 'app-y2m',
     templateUrl: 'y2m.page.html',
     styleUrls: ['y2m.page.scss'],
})
export class Y2MPage implements OnInit  {
     allowMoveToServer = true;
     apiLoaded = false;
     confirmDialogVisible = false;
     isMobilePlatform = false;
     platform: Platform;
     supportedURLsDataSource: string[];
     supportedURLsVisible = false;
     urlParams: {};
  
     constructor(public alertController: AlertController,public dataService: DataService, private downloads: DownloadService, platform: Platform,private menu: MenuController) {
          this.platform = platform;

          if (this.platform.is('hybrid'))
               this.isMobilePlatform=true;
     }

     ngOnInit() {
          // Save current debugging value
          const currDebugging = this.dataService.debugging;

          // Enable debugging if Debugging was provided as URL parameter. Otherwise default to currDebugging
          this.dataService.debugging = (this.getURLParam("Debugging") != this.dataService.debugging && this.getURLParam("Debugging") ? this.getURLParam("Debugging") : currDebugging);
      
          document.title = `You2Me ${(this.dataService.debugging ? ` (Debugging)` : ``)}`

          // Make sure that there aren't any invalid URL parameter
          const queryString = "&" + window.location.search.slice(1); // first URL parameter always begins with a ?. This replaces it with & so we can call split() on it using & as the delimiter
          const split_params = queryString.split("&");

          for (let i = 0; i < split_params.length; i++) {
               if (split_params[i] !== '') {
                    const param = split_params[i].split("=")[0]; // URL is in the form Name=Value; Get Name part of the parameter

                    if (!this.dataService.getURLParameters().includes(param))
                         this.dataService.showSnackBarMessage('The URL parameter ' + param + ' is not a valid URL parameter');
               }
          }

          const URL=this.getURLParam('URL');
          const name=this.getURLParam('Name');
          const format=this.getURLParam('Format');
      
          if (URL !== null && name != null && format != null) {
               this.dataService.addLink(URL, format);

               if (name != null)
                    this.dataService.links[0]['Fields']['Name'].Value=name;
          }

          // Load Youtube player API code
          if (!this.apiLoaded) {
               // This code loads the IFrame Player API code asynchronously, according to the instructions at https://developers.google.com/youtube/iframe_api_reference#Getting_Started
               const tag = document.createElement('script');
               tag.src = 'https://www.youtube.com/iframe_api';
               document.body.appendChild(tag);
               this.apiLoaded = true;               
          }
     }

     addLinkClick() {
          this.dataService.addLink(null,"320k"); // Add row to the table with the default format set to the highest quality mp3
     }

     async confirmDialog(currLink: object, message: string) {
          const alert = await this.alertController.create({
               //cssClass: 'my-custom-class',
               header: 'Alert',
               //subHeader: 'Subtitle',
               message: message,
               buttons: ['OK','Cancel']
          });
    
          await alert.present();
    
          const { role } = await alert.onDidDismiss();

          if (role != "cancel" ) // OK
               this.dataService.deleteLink(currLink['UUID']);
     }

     deleteLinkButtonClick(currLink: object) {
          this.confirmDialog(currLink, "Are you sure you want to delete this link ?");
     }        

     downloadFile(currLink: object) {
          // Subscribe to service that gets download progress
          if (!this.dataService.debugging)
               this.startDownloadProgressMonitor(currLink);

          // Call data service to download the file
          this.dataService.fetchFile(currLink, this.allowMoveToServer, this.dataService.debugging)
               .subscribe((response) => {
                    // Stop the REST service that gets the download status
                    if (!this.dataService.debugging)
                         currLink['DownloadProgressSubscription'].unsubscribe();
              
                    // Trap server side errors
                    if (response[0].includes('Error:')) {
                         //this.handleError(currLink, response, response);
                         //console.log(response[1]);
                         return;
                    }

                    // First index will be filename
                    currLink['Filename'] = response[0];

                    if (this.dataService.isAudioFormat(currLink['Format'])) {
                    // Second index will be Artist if matched through Python script that does audio fingerprinting
                         if (typeof response[1] !== 'undefined' && response[1] !== "" &&  currLink['Fields']['Artist'].Value == "")
                              currLink['Fields']['Artist'].Value = response[1];                         

                         // Third index will be Title if matched through Python script that does audio fingerprinting
                         if (typeof response[2] !== 'undefined' && response[2] !== "" &&  currLink['Fields']['Name'].Value == "")
                              currLink['Fields']['Name'].Value = response[2];                         

                         //if (typeof response[3] !== 'undefined' && response[3] !== "")
                         //     currLink['ThumbnailImage'] = response[3];

                    if (currLink['Fields']['Artist'].Value == '') {
                         this.dataService.showSnackBarMessage("Please enter the artist name");
                         currLink['CurrentStep'] = 2;
                         currLink['IsSubmitted'] = false;
                         return;
                    }
               } //else if (typeof response[1] !== 'undefined' && response[1] !== "")
                   // currLink['ThumbnailImage'] = response[1];

               if (currLink['Fields']['Name'].Value == '') {
                    this.dataService.showSnackBarMessage("Please enter the name");
                    currLink['CurrentStep'] = 2;
                    currLink['IsSubmitted'] = false;
                    return;
               }

               currLink['CurrentStep']++;

               // Stop the download progress subscription
               this.dataService.deleteDownloadProgress(currLink['UUID']).subscribe((response) => {
          },
          error => {
               console.log("An error occurred terminating the download progress subscription");
          });

          if (this.dataService.isMP3Format(currLink['Format'])) {
               currLink['StatusMessage'] = 'File was downloaded';
               this.writeID3Tags(currLink);
          } else {
               // The response returns the URL for the downloaded file
               currLink['DownloadLink'] = decodeURIComponent(response[0].replace(/\+/g, ' '));

               currLink['StatusMessage'] = 'File is ready';               

               if (this.allowMoveToServer) {
                    this.moveFileToServer(currLink);
               } else
                    this.finished(currLink);
               }
          },
          error => {
               // Stop the REST service that gets the download status
               this.handleError(currLink, Response, error);
          });
     }

     downloadButtonClicked(currLink: object) {
          const fileNameWithoutPath = currLink['DownloadLink'].substr(currLink['DownloadLink'].lastIndexOf("/") + 1);

          currLink['DownloadButtonClicked'] = true;

          // Subscribe to DL service and wait for the done response 
          this.downloads.download(currLink['DownloadLink'], fileNameWithoutPath).subscribe((response) => {
               //console.log("Response: " + response.state);               
               if (response.state === "DONE") {
                    this.dataService.showSnackBarMessage(currLink['DownloadLink']);
                    this.dataService.deleteLink(currLink['URL']); // Delete link from list

                    // Send request to delete the file
                    this.dataService.deleteDownloadFile(currLink['Filename']).subscribe((response) => { },
                    error => {
                         console.log("An error " + error + " occurred deleting the file from the server 1");
                    });
               }
          },
          error => {
              this.dataService.deleteLink(currLink['URL']);

               console.log("An error " + error + " occurred deleting the file from the server 2");
          });
     }

     finished(currLink: object, isError = false) {
          while (currLink["CurrentStep"] < currLink["StepperStepNames"].length - 1)               
               currLink["CurrentStep"]++;          

          currLink['IsFinished'] = true;

          // Stop the REST service that gets the download status
          if (!this.dataService.debugging)
               currLink['DownloadProgressSubscription'].unsubscribe();
     }

     getThumbnail(currLink: object) {
          setTimeout(() => {
          if (currLink != null && currLink["URL"] !== null && currLink["URL"] !== "" && currLink["URL"].toString().includes("youtube.com") && currLink["ThumbnailPreviewStarted"] != true && currLink["ThumbnailLoaded"] != true) {
               currLink["ThumbnailPreviewStarted"]=true;

               const URL=currLink["URL"];

               if (URL.includes("https://www.youtube.com/watch?v=")) {
                    const videoID=URL.replace("https://www.youtube.com/watch?v=","");

                    // Call data service to download the file
                    this.dataService.getThumbnail(videoID)
                    .subscribe((response) => {
                         currLink["ThumbnailLoaded"]=true;
                         currLink["ThumbnailURL"]=response[0];
                    },
                    error => {
                         currLink["ThumbnailPreviewStarted"]=false;
                         currLink["ThumbnailLoaded"]=false;
                         this.handleError(currLink, Response, error);
                    });
               } else
                    return null;
          } else 
               return null;
          });
     }

     getURLParam(name: string) : any {
          // The first time this method gets called, this.urlParams will be undefined
          if (typeof this.urlParams === 'undefined')
               this.parseURLParameters();

          // If urlParams is still undefined, there are no url params
          if (typeof this.urlParams === 'undefined')
               return (name === "Debugging" ? false : null);

          // Make URL params upper case when checking so they aren't case sensitive
          name = name.toUpperCase();

          switch (name) {
               case 'URL':
                    return (typeof this.urlParams[name] !== 'undefined' && this.urlParams[name] !== '' ? decodeURI(this.urlParams[name]) : null);
               case 'ARTIST':
                    return (typeof this.urlParams[name] !== 'undefined' && decodeURI(this.urlParams[name]) || null);
               case 'ALBUM':
                   return (typeof this.urlParams[name] !== 'undefined' && decodeURI(this.urlParams[name]) || null);
               case 'FORMAT':
                   return (typeof this.urlParams[name] !== 'undefined' && decodeURI(this.urlParams[name]) || null);
               case 'GENRE':
                   return (typeof this.urlParams[name] !== 'undefined' && decodeURI(this.urlParams[name]) || null);
               case 'NAME':
                    if (typeof this.urlParams[name] === 'undefined')
                         return null;

                    let title = this.urlParams[name];

                    title = title.replace('Title=', '');
                    title = title.replace(' (HQ)', '');
                    title = title.replace(' (Acoustic / Audio) - YouTube', '');
                    title = title.replace(' - YouTube', '');

                    return decodeURI(title);
               case 'TRACKNUM':
                    return (typeof this.urlParams[name] !== 'undefined' && decodeURI(this.urlParams[name]) || null);
               //case 'MOVETOSERVER':
               //     return (typeof this.urlParams[name] !== 'undefined' ? this.urlParams[name] : null);
               case 'YEAR':
                    return (typeof this.urlParams[name] !== 'undefined' ? decodeURI(this.urlParams[name]) : null);
               case 'DEBUGGING':
                    return (typeof this.urlParams[name] !== 'undefined' && this.urlParams[name] === 'true' ? true : false);
               default:
                    return null;
          }
     }

     goButtonClick(currLink: object) {
          // Validate fields
          const name = currLink['Fields']['Name'].Value;
          const artist = currLink['Fields']['Artist'].Value;
          const album = currLink['Fields']['Album'].Value;

          if (currLink['CurrentStep'] == 0) {
               currLink['URL']=currLink['URL'].trim();

               if (currLink['URL'] === "") {
                    this.dataService.showSnackBarMessage("Please enter the URL");
                    return;
               }

               if (!currLink['URL'].startsWith("http://") && !currLink['URL'].startsWith("https://")) {
                    this.dataService.showSnackBarMessage("The URL must begin with http or https");
                    return;
               }

               if (this.dataService.URLExists(currLink['URL'])) {
                    this.dataService.showSnackBarMessage("You cannot add the same URL more than once");
                    return;
               }

               if (currLink['Format'] == "") {
                    this.dataService.showSnackBarMessage("Please select the format");
                    return;
               }

               if (this.dataService.isAudioFormat(currLink['Format']) && !this.dataService.isMP3Format(currLink['Format']) && artist === "") {
                    this.dataService.showSnackBarMessage("Please enter the artist");
                    return;
               }

               if (this.dataService.isAudioFormat(currLink['Format']) && !this.dataService.isMP3Format(currLink['Format']) && name === "") {
                    this.dataService.showSnackBarMessage("Please enter the name");
                    return;
               }

               if (this.dataService.isAudioFormat(currLink['Format']) && !this.dataService.isMP3Format(currLink['Format']) && album === "") {
                    currLink['Fields']['Album'].Value = 'Unknown';
               } else if (!this.dataService.isAudioFormat(currLink['Format']) && currLink['Fields']['Name'].Value  === "") {
                    this.dataService.showSnackBarMessage("Please enter the name");
                    return;
               }

               currLink['IsSubmitted'] = true;

               currLink['StatusMessage'] = "Starting download";

               this.downloadFile(currLink);
          } else if (currLink['CurrentStep'] == 2) { // After writing ID3 tags, if the artist and name are still blank, prompt user to fill them in
               if (artist === "") {
                    this.dataService.showSnackBarMessage("Please enter the artist");
                    return;
               }

               if (name === "") {
                    this.dataService.showSnackBarMessage("Please enter the name");
                    return;
               }

               currLink['IsSubmitted'] = true;

               currLink['StatusMessage'] = "Writing the ID3 tags";

               this.writeID3Tags(currLink)
          }
     }

     handleError(currLink: object, response, error) {
          // write error status
          if (currLink != null) {
               if (!this.dataService.debugging)
                    currLink['DownloadProgressSubscription'].unsubscribe();

               currLink['StatusMessage'] = `A fatal error occurred`;

               currLink['IsError']=true;

               console.log(`An error occurred at step ${currLink['CurrentStep']} with the response ${response[0]} and error ${error[0]}`);
          } else {
               console.log(`An error occurred at step (no currLink) with the error ${error[0]}`);
          }

          this.finished(currLink, true);
     }

     keyPressNumbers(event: any) { // Limits input field to numbers only
          var charCode = (event.which) ? event.which : event.keyCode;
       
          if  (charCode < 48 || charCode > 57) { // Only Numbers 0-9
               event.preventDefault();
               return false;
          } else {
               return true;
          }
     }

     moveFileToServer(currLink: object) {
          if (!this.allowMoveToServer)
               return;

          currLink['MoveToServerButtonClicked'] = true;

          this.dataService.moveFile(currLink).subscribe((response) => {
               // Trap server side errors
               if (response[0].includes('Error:')) {
                    this.handleError(currLink, response, response);
                    return;
               }

               currLink['StatusMessage'] = 'File has been moved';

               // Delete the link after the timeout period
               setTimeout(() => {
                    this.dataService.deleteLink(currLink['URL']);
               }, 5000);

               this.finished(currLink);
          },
          error => {
               this.handleError(null, Response, error);
          });
     }

     openMenu() {
          this.menu.enable(true, 'first');
          this.menu.open('first');
     }

     parseURLParameters() {
          const query = window.location.search.substr(1);

          if (query === '')
               return;

          const res = query.split('&');

          // Create object which contains split key value pairs so "URL=https://www.youtube.com/watch?v=Wch3gJG2GJ4" turns into ['URL','https://www.youtube.com/watch?v=Wch3gJG2GJ4']
          const map1 = res.map(x => x.split('='));

          this.urlParams = {};

          // Add key/pair to object so it can be accessed by doing params[keyname] to get the value
          //map1.map(x => params[x[0]] = x[1] + (x[2] !== null ? '=' + x[2] : ''));

          map1.map(x =>
               this.urlParams[decodeURI(x[0]).toUpperCase()] = decodeURI(x[1]) + (
                    typeof x[2] !== 'undefined' ? '=' + decodeURI(x[2]) : '')
               );
     }

     startDownloadProgressMonitor(currLink: object) {
          if (this.dataService.debugging)
               return;

          this.dataService.setDownloadSubscription(currLink
          ,interval(50)
          .subscribe(() => {
               this.dataService.getDownloadProgress(currLink)
                    .subscribe((downloadProgress: Number) => {
                         currLink['DownloadProgress']=downloadProgress;

                         if (downloadProgress == 100)
                              currLink['DownloadProgressSubscription'].unsubscribe();
                    },
                    error => {
                    }
               );
          }));
     }

     // Used to prevent the entire DOM tree from being re-rendered every time that there is a change
     trackByFn(index, item) {
          return index; // or item.id
     }

     writeID3Tags(currLink: object) {
          // Call data service to write ID3 tags
          this.dataService.writeID3Tags(currLink)
          .subscribe((response) => {
               // Trap server side errors
               if (response[2].includes('Error:')) {
                    this.dataService.showSnackBarMessage(response[2]);
                    //this.handleError(currLink, response, response);
                    return;
               }

               currLink['StatusMessage'] = 'ID3 tags have been written.';

               // The response returns the URL for the downloaded file
               currLink['DownloadLink'] = decodeURIComponent(response[0].replace(/\+/g, ' '));

               currLink["Filename"]=response[1];
              
               currLink['StatusMessage'] = 'File is ready.';

               currLink['CurrentStep']++;

               this.finished(currLink);

               return;
          },
          error => {
               this.handleError(currLink, Response, error);
          });
     }
}

  // Probably won't be implemented
  /*applySupportedURLsFilter(filterValue: string) {
    //this.supportedURLsDataSource.filter = filterValue.trim().toLowerCase();
  }*/

// Probably won't be implemented
/*createSupportedURLsFilter() {
    const filterFunction = function (data: string, filter: string): boolean {
         const customSearch = () => {
              if (data.toLowerCase().includes(filter.toLowerCase())) // case insensitive
                   return true;
         }

         return customSearch();
    }

    return filterFunction;
}*/

// May not be implemented
/*
getColumnSize() {  // If there is more than 1 link or there is 1 link and it is MP3 format, return 2 to span grid 2 columns wide. Otherwise span 1 column wide
    const columnLength=(this.dataService.getLinks().length > 1 ? 2 :  // When there is more than 1 link always show all columns               
         this.dataService.getLinks().length == 1 && this.dataService. isMP3Format(this.dataService.links[0].Format) ? 2 :  1 // If there is 1 link and it is mp3 format, show all columns
               
    );

    return columnLength;
}

getTotalColumnSize() {
    const allColumns=15;
    const audioColumns=10;
    const videoColumns=8;
    const noLinksColumns=7;

    // When there is more than 1 link always show all columns
    const columnLength=(this.dataService.getLinks().length == 0  ? noLinksColumns :  this.dataService.getLinks().length > 1 ? allColumns :                 
         this.dataService.getLinks().length == 1 && this.dataService. isMP3Format(this.dataService.links[0].Format) ? allColumns : // If there is 1 link and it is mp3 format, show all columns
               this.dataService. isAudioFormat(this.dataService.links[0].Format) ? audioColumns : videoColumns // If there is 1 link and it is audio (but not mp3) 
    );

    return columnLength;
}*/

// Probably won't be implemented
/*showSupportedSitesToggle() {
     if (this.supportedURLsVisible && typeof this.supportedURLsDataSource === 'undefined') {
         this.dataService.getSupportedURLs().subscribe((response) => {
              if (typeof response == 'undefined')
                   return;

              this.supportedURLsDataSource = response;
         },
         error => {
              this.handleError(null, Response, error);
         });
    }
}*/