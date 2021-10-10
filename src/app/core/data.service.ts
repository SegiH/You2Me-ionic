import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs/';
import { catchError} from 'rxjs/operators';
import { UUID } from 'angular2-uuid';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

let stepperIndex = 0;

@Injectable()
export class DataService {
     apiLoaded = false;
     backendURL: string=null;
     links: any = [];
     private API_TOKEN="";
     readonly API_URL='https://www.googleapis.com/youtube/v3/search';
     debugging = false;
     readonly fields: any  = {
          'Artist': {
               'Required':true,
               'Value': "",
               'Disabled': false
          },
          'Album': {
               'Required':false,
               'Value': "",
               'Disabled': false
          },
          'Name': {
               'Required':true,
               'Value': "",
               'Disabled': false
          },
          'TrackNum': {
               'Required':false,
               'Value': "",
               'Disabled': false
          },
          'Genre': {
               'Required':false,
               'Value': "",
               'Disabled': false
          },
          'Year': {
               'Required':false,
               'Value': "",
               'Disabled': false
          }
     };
     readonly fieldKeys = Object.freeze(Object.keys(this.fields));

     formats: Object = {};
     formatKeys = [];
     isMobilePlatform = false;
     platform: Platform;
     readonly stepperStepNames = ['Started download', 'Finished download', 'Writing ID3 Tags','Your file is ready'];     
     readonly URLParameters = ['URL','Artist','Album','Format','Genre','Name','TrackNum','MoveToServer','Year','Debugging'];
     YTSearchOverlayRef;
     
     constructor(public toastController: ToastController, private http: HttpClient, platform: Platform ,private storage: Storage) {
          this.platform = platform;

          // Load Youtube player API code
          if (!this.apiLoaded) {
               // This code loads the IFrame Player API code asynchronously, according to the instructions at https://developers.google.com/youtube/iframe_api_reference#Getting_Started
               const tag = document.createElement('script');
               tag.src = 'https://www.youtube.com/iframe_api';
               document.body.appendChild(tag);
               this.apiLoaded = true;               
          }

          if (this.platform.is('hybrid'))
               this.isMobilePlatform=true;

          this.getBackendURL();

          this.getDebugging();

          this.getMobileMode();
     }
     
     addLink(newURL: string = null,newFormat: string="320k") {
          this.links.push({
               URL: newURL,
               DownloadLink: '',
               DownloadProgressSubscription: null,
               DownloadStatusMessage: '',
               DownloadStatusVisible: true,
               CurrentStep: 0,
               Fields: JSON.parse(JSON.stringify(this.fields)),
               FieldKeys: this.fieldKeys,
               Filename: "",
               Format: newFormat,       
               IsAdding: true,                    
               IsFinished: false,
               IsSubmitted: false,
               SaveValues: false,
               StatusMessage: "",
               StepperIndex: stepperIndex,
               StepperStepNames: this.stepperStepNames,
               ExpansionPanelOpen: false,
               //ThumbnailSmallDimension: 50,
               //ThumbnailLargeDimension: 150,
               UUID:UUID.UUID(), // Unique UUID is generated so it can be used to track D/L progress with a unique identifier for each link
          });

          /* this.getThumbnail(newURL,stepperIndex).subscribe((response) => {               
               if (response != null && response[0] != false) {
                    this.links[parseInt(response[1])]["ThumbnailProcessingComplete"]=true;
     
                    if (response[0] != "false")
                         this.links[parseInt(response[1])]["Thumbnail"]=response[0];                    
                    }
          },
          error => {
          });*/
          stepperIndex++;
     }

     anySubmittedLinks() {
          let retVal = false;

          Object.keys(this.links).forEach(key => {
               if (this.links[key]['IsSubmitted'] === true)
                   retVal=true;
          });
          
          return retVal;
     }

     deleteDownloadFile(fileName: string) {
          let params = new HttpParams();
          params = params.append('Filename',fileName);
                       
          return this.processStep("/DeleteDownloadFile",params);
     }

     deleteDownloadProgress(UUID: string) {
          let params = new HttpParams();
          params = params.append('UUID',UUID);
                       
          return this.processStep("/DeleteDownloadProgress",params);
     }

     deleteLink(UUID: string) {
          Object.keys(this.links).forEach(key => {
               if (this.links[key]['UUID'] === UUID) {
                   this.links.splice(key, 1)
                   return;
               }
          });
     }

     fetchFile(currLink: object) {
          const fileName: string = (this.isAudioFormat("") && !isNaN(parseInt(this.fields.TrackNum.Value)) ? this.fields.TrackNum.Value + " " : "" ) + (this.fields.Name.Value != "" ? this.fields.Name.Value : "Unknown");

          // extra URL parameters in a Youtube link causes issues for youtube-dl
          if (currLink['URL'].includes('youtube.com')) {
               const arr = currLink['URL'].split('&');

               currLink['URL']= arr[0];
          }

          let params = new HttpParams();
          params = params.append('URL',currLink['URL']);
          params = params.append('Filename',this.rfc3986EncodeURIComponent(fileName));
          params = params.append('Debugging',this.debugging);
          params = params.append('CurrUUID',currLink['UUID']);

          if (this.isAudioFormat(currLink['Format'])) {
               params = params.append('IsAudioFormat',true);
               params = params.append('AudioFormat',currLink['Format']);

               if (this.isMP3Format(currLink['Format']))
                    params = params.append('Bitrate',currLink['Format']);
          } else {
               params = params.append('IsVideoFormat',true);
               params = params.append('VideoFormat',currLink['Format']);
          }
          
          return this.processStep("/DownloadFile",params);
     }

     fieldIsEditable(formatName: string, fieldName: string) {
          // Specified values are the fields to hide
          const videoHideFields = Object.freeze(['Artist', 'Album', 'TrackNum', 'Genre', 'Year']);
          const nonMP3HideFields = Object.freeze(['TrackNum', 'Genre', 'Year']);

          return (
               // If the format is a video format, hide these fields
               (!this.isAudioFormat(formatName) && videoHideFields.includes(fieldName))
               ||
               // If the format is an audio format but is not MP3, hide these fields
               (this.isAudioFormat(formatName) && !this.isMP3Format(formatName) && nonMP3HideFields.includes(fieldName))
          );
     }

     getAPIKey() {
          return this.processStep("/GetAPIKey",null);
     }

     async getBackendURL() {
          await this.storage.create();

          this.backendURL = await this.storage.get('BackEndURL');

          if (this.backendURL == null) {
               this.showSnackBarMessage("Please enter the backend URL in the settings");
               return;
          }

          // Once the back end URL has been loaded, get the formats & API key
          this.loadFormats().subscribe((response) => {
               if (response === null)
                    return Promise.reject('Null response when getting formats');
     
               response.map(x => this.formats[x.FormatName] = { FormatDisplayName : x.FormatDisplayName, FormatTypeName: x.FormatTypeName, IsMP3Format: (x.IsMP3Format == "1" ? true : false) } );
               Object.freeze(this.formats);
                 
               response.map(x => this.formatKeys.push(x.FormatName));
               Object.freeze(this.formatKeys);
          },
          error => {
               const formats= [
                    {"FormatID":"1","0":"1","FormatDisplayName":"aac","1":"aac","FormatName":"aac","2":"aac","FormatTypeID":"1","3":"1","IsMP3Format":"0","4":"0","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"2","0":"2","FormatDisplayName":"flac","1":"flac","FormatName":"flac","2":"flac","FormatTypeID":"1","3":"1","IsMP3Format":"0","4":"0","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"3","0":"3","FormatDisplayName":"m4a","1":"m4a","FormatName":"m4a","2":"m4a","FormatTypeID":"1","3":"1","IsMP3Format":"0","4":"0","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"4","0":"4","FormatDisplayName":"mp3 128k","1":"mp3 128k","FormatName":"128k","2":"128k","FormatTypeID":"1","3":"1","IsMP3Format":"1","4":"1","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"5","0":"5","FormatDisplayName":"mp3 192k","1":"mp3 192k","FormatName":"192k","2":"192k","FormatTypeID":"1","3":"1","IsMP3Format":"1","4":"1","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"6","0":"6","FormatDisplayName":"mp3 256k","1":"mp3 256k","FormatName":"256k","2":"256k","FormatTypeID":"1","3":"1","IsMP3Format":"1","4":"1","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"7","0":"7","FormatDisplayName":"mp3 320k","1":"mp3 320k","FormatName":"320k","2":"320k","FormatTypeID":"1","3":"1","IsMP3Format":"1","4":"1","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"8","0":"8","FormatDisplayName":"mp3 VBR 0 (Best)","1":"mp3 VBR 0 (Best)","FormatName":"0","2":"0","FormatTypeID":"1","3":"1","IsMP3Format":"1","4":"1","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"9","0":"9","FormatDisplayName":"mp3 VBR (5) (OK)","1":"mp3 VBR (5) (OK)","FormatName":"5","2":"5","FormatTypeID":"1","3":"1","IsMP3Format":"1","4":"1","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"10","0":"10","FormatDisplayName":"mp3 VBR (9) (Worst)","1":"mp3 VBR (9) (Worst)","FormatName":"9","2":"9","FormatTypeID":"1","3":"1","IsMP3Format":"1","4":"1","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"11","0":"11","FormatDisplayName":"opus","1":"opus","FormatName":"opus","2":"opus","FormatTypeID":"1","3":"1","IsMP3Format":"0","4":"0","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"12","0":"12","FormatDisplayName":"vorbis","1":"vorbis","FormatName":"vorbis","2":"vorbis","FormatTypeID":"1","3":"1","IsMP3Format":"0","4":"0","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"13","0":"13","FormatDisplayName":"wav","1":"wav","FormatName":"wav","2":"wav","FormatTypeID":"1","3":"1","IsMP3Format":"0","4":"0","FormatTypeName":"Audio","5":"Audio"},
                    {"FormatID":"14","0":"14","FormatDisplayName":"No conversion","1":"No conversion","FormatName":"original","2":"original","FormatTypeID":"2","3":"2","IsMP3Format":"0","4":"0","FormatTypeName":"Video","5":"Video"},
                    {"FormatID":"15","0":"15","FormatDisplayName":"Convert to avi","1":"Convert to avi","FormatName":"avi","2":"avi","FormatTypeID":"2","3":"2","IsMP3Format":"0","4":"0","FormatTypeName":"Video","5":"Video"},
                    {"FormatID":"16","0":"16","FormatDisplayName":"Convert to flv","1":"Convert to flv","FormatName":"flv","2":"flv","FormatTypeID":"2","3":"2","IsMP3Format":"0","4":"0","FormatTypeName":"Video","5":"Video"},
                    {"FormatID":"17","0":"17","FormatDisplayName":"Convert to mkv","1":"Convert to mkv","FormatName":"mkv","2":"mkv","FormatTypeID":"2","3":"2","IsMP3Format":"0","4":"0","FormatTypeName":"Video","5":"Video"},
                    {"FormatID":"18","0":"18","FormatDisplayName":"Convert to mp4","1":"Convert to mp4","FormatName":"mp4","2":"mp4","FormatTypeID":"2","3":"2","IsMP3Format":"0","4":"0","FormatTypeName":"Video","5":"Video"},
                    {"FormatID":"19","0":"19","FormatDisplayName":"Convert to ogg","1":"Convert to ogg","FormatName":"ogg","2":"ogg","FormatTypeID":"2","3":"2","IsMP3Format":"0","4":"0","FormatTypeName":"Video","5":"Video"},
                    {"FormatID":"20","0":"20","FormatDisplayName":"Convert to webm","1":"Convert to webm","FormatName":"webm","2":"webm","FormatTypeID":"2","3":"2","IsMP3Format":"0","4":"0","FormatTypeName":"Video","5":"Video"}];
     
               formats.map(x => this.formats[x.FormatName] = { FormatDisplayName : x.FormatDisplayName, FormatTypeName: x.FormatTypeName, IsMP3Format: (x.IsMP3Format == "1" ? true : false) } );
               Object.freeze(this.formats);
     
               Object.keys(formats).map(x => this.formatKeys.push(formats[x].FormatName));
               Object.freeze(this.formatKeys);
          });

          this.getAPIKey().subscribe((response) => {
               this.setAPIKey(response[0].APIKey);
          },
          error => {
               alert(`An error occurred initializing YouTube search with the error ${error.error} and this functionality will not be available`);
               console.log(`An error occurred initializing YouTube search with the error ${error.error} and this functionality will not be available`);
               return throwError("An error occurred getting the API Key");
          });
     }

     async getDebugging() {
          await this.storage.create();

          const debugging = await this.storage.get('Debugging');

          this.debugging=(debugging === true ? true : false);
     }

     async getMobileMode() {
          await this.storage.create();

          const mobileMode = await this.storage.get('MobileMode');

          this.isMobilePlatform=(mobileMode === true ? true : false);
     }

     getDownloadProgress(currLink: object) {
          let params = new HttpParams();
          params = params.append('UUID',currLink['UUID']);

          return this.processStep("/GetDownloadProgress",params);
     }

     getFieldKeys() {
          return this.fieldKeys;
     }

     getFormatKeys() {
          return this.formatKeys;
     }

     getLinks() {
          return this.links;
     }

     getLinkKey(currLink: object) {
          return currLink['StepperIndex'];
     }

     getSupportedURLs() {
          return this.processStep("/GetSupportedURLs",null);
     }

     getThumbnail(videoId:string) {
          let params = new HttpParams();
          
          params = params.append('URL',`https://www.youtube.com/watch?v=${videoId}`);

          return this.processStep("/GetThumbnail",params);
     }

     getURLParameters() {
          return this.URLParameters;
     }

     private handleError(error: Response | any) {
          if (error.error instanceof Error) {
               const errMessage = error.error.message;

               return throwError(errMessage);
               // Use the following instead if using lite-server
               // return Observable.throw(err.text() || 'backend server error');
          }

          return throwError(error || 'Node.js server error');
     }

     isAudioFormat(format: string) {
          let isAudio = false;

          Object.keys(this.formats).forEach(key => {
               if (key === format && this.formats[key].FormatTypeName === 'Audio')
                    isAudio = true;              
          });

          return isAudio;
     }

     isMoveToServerAllowed() {
          return this.processStep("/IsMoveToServerAllowed",null);
     }

     isMP3Format(format: string) {
          let isMP3 = false;

          Object.keys(this.formats).forEach(key => {
               if (key === format && this.formats[key].FormatTypeName === 'Audio' && this.formats[key].IsMP3Format)
                    isMP3=true; 
          });

          return isMP3;
     }

     loadFormats() {
          return this.processStep("/GetFormats",null);
     }

     moveFile(currLink: object) {
          let params = new HttpParams();
          params = params.append('Filename',currLink['Filename']);
          params = params.append('Artist',this.rfc3986EncodeURIComponent(currLink['Fields']['Artist'].Value));
          
          if (this.isAudioFormat(currLink['Format'])) {
               params = params.append('IsAudioFormat',true);

               if (typeof currLink['Fields']['Album'].Value !== 'undefined')
                    params = params.append('Album',this.rfc3986EncodeURIComponent(currLink['Fields']['Album'].Value));
          } else
               params = params.append('IsVideoFormat',true);

          return this.processStep("/MoveFile",params);
     } 

     processStep(path: string, params: HttpParams): Observable<any> {
          if (this.backendURL == null) {
               this.getBackendURL();

               setTimeout(function() {
                    if (this.backendURL == null)
                         return;
               },3000);               
          }

          return this.http.get<any>(this.backendURL + path, { params: params})
               .pipe(
                    catchError(this.handleError)
               );
     }

     // Escapes all special characters so they can safely be passed as URL parameters
     private rfc3986EncodeURIComponent(str) {  
          return encodeURIComponent(str).replace(/[!'()*]/g, escape);  
     }

     async saveBackendURL() {
          if (this.backendURL != null && this.backendURL != "") {
               await this.storage.set('BackEndURL', this.backendURL); //Save the URL
          } else {
               await this.storage.remove('BackEndURL');
          }
     }

     async saveDebugging() {
          console.log("Saving when it is " + this.debugging)
          await this.storage.set('Debugging', this.debugging);      
     }

     async saveMobileMode() {
          console.log(`Saving this.isMobilePlatform when its value is ${this.isMobilePlatform}`)
          await this.storage.set('MobileMode', this.isMobilePlatform);      
     }

     searchVideos(query: string): Observable <any> {
          if (this.API_TOKEN == "") {
              this.showSnackBarMessage("Search is not available. The API key is not available");
              return;
          }

          const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;     

          return this.http.get(url)
            .pipe(
               catchError(this.handleError)
              //map((response: any) => response.items)
            );
     }

     setAPIKey(API_TOKEN: string) {
          this.API_TOKEN=API_TOKEN;
     }

     setDownloadStatusMessage(currLink: object, newStatusMessage: string) {
          currLink['DownloadStatusMessage']=newStatusMessage;
     }

     setDownloadSubscription(currLink: object, downloadSubscription: any) {
          Object.keys(this.links).forEach(key => {
               if (this.links[key]['URL'] === currLink['URL']) {
                    this.links[key]['DownloadProgressSubscription']=downloadSubscription;
               }
          });
     }

     async showSnackBarMessage(message: string) {
          const toast = await this.toastController.create({
               message: message,
               duration: 3000
          });
          toast.present();
     }

     URLExists(URL: string) {
          let URLExists=0;

          Object.keys(this.links).forEach(key => {
               if (this.links[key]['URL'] === URL) {
                    URLExists++;
               }
          });

          return URLExists > 1;
     }

     writeID3Tags(currLink: object) {
          if (currLink['Fields']['TrackNum'].Value !== null && !isNaN(parseInt(currLink['Fields']['TrackNum'].Value)) && parseInt(currLink['Fields']['TrackNum'].Value) < 10)
               currLink['Fields']['TrackNum'].Value = "0" + currLink['Fields']['TrackNum'].Value;

          let params = new HttpParams();
          params = params.append('Filename',currLink['Filename']);
     
          if  (currLink['Fields']['Artist'].Value !== null)
               params = params.append('Artist',currLink['Fields']['Artist'].Value);

          if  (currLink['Fields']['Album'].Value !== null)
               params = params.append('Album',currLink['Fields']['Album'].Value);

          if  (currLink['Fields']['Name'].Value !== null)
               params = params.append('Name',currLink['Fields']['Name'].Value);

          if  (currLink['Fields']['TrackNum'].Value !== null)
               params = params.append('TrackNum',currLink['Fields']['TrackNum'].Value);

          if  (currLink['Fields']['Genre'].Value !== null)
               params = params.append('Genre',currLink['Fields']['Genre'].Value);

          if  (currLink['Fields']['Year'].Value !== null)
               params = params.append('Year',currLink['Fields']['Year'].Value);
          
          return this.processStep("/WriteID3Tags", params);
     }
}