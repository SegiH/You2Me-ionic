// TO DO
// change web icon
// change android/ios icon
// Make title bar uniform across all tabs
// downloading does not work on mobile

// TO DO LATER
// do not start dl progress for now
// audio fingerprinting does not work
// copy latest version of server side script
//  implementation 'com.capacitorjs.file:5.36.0'

import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { DownloadService } from '../core/download.service';
import { interval } from "rxjs";
import { AlertController, IonicSafeString } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
     selector: 'app-y2m',
     templateUrl: 'y2m.page.html',
     styleUrls: ['y2m.page.scss'],
})
export class Y2MPage implements OnInit  {
     urlParams: {};
  
     constructor(public alertController: AlertController,public dataService: DataService, private downloads: DownloadService,private menu: MenuController,private nativeHTTP: HTTP,private file: File) {} 

     ngOnInit() {
          // Save current debugging value
          //const currDebugging = this.dataService.debugging;

          // Enable debugging if Debugging was provided as URL parameter. Otherwise default to currDebugging
          //this.dataService.debugging = (this.getURLParam("Debugging") != this.dataService.debugging && this.getURLParam("Debugging") ? this.getURLParam("Debugging") : currDebugging);
      
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

          this.dataService.platform.ready().then(() => {
               this.nativeHTTP.downloadFile("https://you2me-backend.hovav.org/Unknown.mp3",{},{},"Unknown.mp3").then(response => {
               }).catch(err => {
                    this.dataService.showSnackBarMessage(` The error ${err} occurred while downloading the file`);
               })
          });
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
          this.dataService.fetchFile(currLink)
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

          if (!this.dataService.platform.is('android') && !this.dataService.platform.is('ios')) {
               // Subscribe to DL service and wait for the done response 
               this.downloads.download(currLink['DownloadLink'], fileNameWithoutPath).subscribe((response) => {
                    //console.log("Response: " + response.state);               
                    if (response.state === "DONE") {
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
          } else {
               const filePath = (this.dataService.platform.is('ios') ? this.file.documentsDirectory : this.file.dataDirectory ) + fileNameWithoutPath;
               
               /*this.dataService.platform.ready().then(() => {
                    this.nativeHTTP.downloadFile(currLink['DownloadLink'],{},{},fileNameWithoutPath).then(response => {
                    }).catch(err => {
                         this.dataService.showSnackBarMessage(` The error ${err} occurred while downloading the file`);
                    })
               });*/
          }
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