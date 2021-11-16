(self["webpackChunkyou2me_ionic"] = self["webpackChunkyou2me_ionic"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_y2m_y2m_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./y2m/y2m.module */ 50734)).then(m => m.Y2MPageModule),
        pathMatch: 'full'
    },
    {
        path: 'y2m',
        redirectTo: '',
    },
    {
        path: 'Y2M',
        redirectTo: '',
    },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ytsearch_ytsearch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ytsearch/ytsearch.module */ 38048)).then(m => m.Y2MSearchPageModule)
    },
    {
        path: 'Search',
        redirectTo: 'search',
        pathMatch: 'full'
    }, {
        path: 'SupportedURLS',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_supportedURLS_supportedURLs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./supportedURLS/supportedURLs.module */ 91370)).then(m => m.SupportedURLSPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/youtube-player */ 37783);
/* harmony import */ var _core_saver_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/saver.provider */ 59313);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__.YouTubePlayerModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }, { provide: _core_saver_provider__WEBPACK_IMPORTED_MODULE_3__.SAVER, useFactory: _core_saver_provider__WEBPACK_IMPORTED_MODULE_3__.getSaver }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* binding */ CoreModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 13943);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);





//import { File } from '@ionic-native/file/ngx';
let CoreModule = class CoreModule {
};
CoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__.HTTP]
    })
], CoreModule);



/***/ }),

/***/ 13943:
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/ */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ 84133);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 61628);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);










let stepperIndex = 0;
let DataService = class DataService {
    constructor(toastController, http, platform, mobileHTTP, storage) {
        this.toastController = toastController;
        this.http = http;
        this.mobileHTTP = mobileHTTP;
        this.storage = storage;
        this.apiLoaded = false;
        this.backendURL = null;
        this.links = [];
        this.API_TOKEN = "";
        this.API_URL = 'https://www.googleapis.com/youtube/v3/search';
        this.debugging = false;
        this.fields = {
            'Artist': {
                'Required': true,
                'Value': "",
                'Disabled': false
            },
            'Album': {
                'Required': false,
                'Value': "",
                'Disabled': false
            },
            'Name': {
                'Required': true,
                'Value': "",
                'Disabled': false
            },
            'TrackNum': {
                'Required': false,
                'Value': "",
                'Disabled': false
            },
            'Genre': {
                'Required': false,
                'Value': "",
                'Disabled': false
            },
            'Year': {
                'Required': false,
                'Value': "",
                'Disabled': false
            }
        };
        this.fieldKeys = Object.freeze(Object.keys(this.fields));
        this.formats = {};
        this.formatKeys = [];
        this.isMobilePlatform = false;
        this.stepperStepNames = ['Started download', 'Finished download', 'Writing ID3 Tags', 'Your file is ready'];
        this.URLParameters = ['URL', 'Artist', 'Album', 'Format', 'Genre', 'Name', 'TrackNum', 'MoveToServer', 'Year', 'Debugging'];
        this.platform = platform;
        if (this.platform.is('android') || this.platform.is('ios'))
            this.isMobilePlatform = true;
        // Load Youtube player API code
        if (!this.apiLoaded) {
            // This code loads the IFrame Player API code asynchronously, according to the instructions at https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            this.apiLoaded = true;
        }
        //if (this.platform.is('hybrid'))
        //     this.isMobilePlatform=true;
        this.getBackendURL();
        this.getDebugging();
        this.getMobileMode();
    }
    addLink(newURL = null, newFormat = "320k") {
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
            UUID: angular2_uuid__WEBPACK_IMPORTED_MODULE_0__.UUID.UUID(), // Unique UUID is generated so it can be used to track D/L progress with a unique identifier for each link
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
                retVal = true;
        });
        return retVal;
    }
    deleteDownloadFile(fileName) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('Filename', fileName);
        return this.processStep("/DeleteDownloadFile", params);
    }
    deleteDownloadProgress(UUID) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('UUID', UUID);
        return this.processStep("/DeleteDownloadProgress", params);
    }
    deleteLink(UUID) {
        Object.keys(this.links).forEach(key => {
            if (this.links[key]['UUID'] === UUID) {
                this.links.splice(key, 1);
                return;
            }
        });
    }
    fetchFile(currLink) {
        const fileName = (this.isAudioFormat("") && !isNaN(parseInt(this.fields.TrackNum.Value)) ? this.fields.TrackNum.Value + " " : "") + (this.fields.Name.Value != "" ? this.fields.Name.Value : "Unknown");
        // extra URL parameters in a Youtube link causes issues for youtube-dl
        if (currLink['URL'].includes('youtube.com')) {
            const arr = currLink['URL'].split('&');
            currLink['URL'] = arr[0];
        }
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('URL', currLink['URL']);
        params = params.append('Filename', this.rfc3986EncodeURIComponent(fileName));
        params = params.append('Debugging', this.debugging);
        params = params.append('CurrUUID', currLink['UUID']);
        if (this.isAudioFormat(currLink['Format'])) {
            params = params.append('IsAudioFormat', true);
            params = params.append('AudioFormat', currLink['Format']);
            if (this.isMP3Format(currLink['Format']))
                params = params.append('Bitrate', currLink['Format']);
        }
        else {
            params = params.append('IsVideoFormat', true);
            params = params.append('VideoFormat', currLink['Format']);
        }
        return this.processStep("/DownloadFile", params);
    }
    fieldIsEditable(formatName, fieldName) {
        // Specified values are the fields to hide
        const videoHideFields = Object.freeze(['Artist', 'Album', 'TrackNum', 'Genre', 'Year']);
        const nonMP3HideFields = Object.freeze(['TrackNum', 'Genre', 'Year']);
        return (
        // If the format is a video format, hide these fields
        (!this.isAudioFormat(formatName) && videoHideFields.includes(fieldName))
            ||
                // If the format is an audio format but is not MP3, hide these fields
                (this.isAudioFormat(formatName) && !this.isMP3Format(formatName) && nonMP3HideFields.includes(fieldName)));
    }
    getAPIKey() {
        return this.processStep("/GetAPIKey", null);
    }
    getBackendURL() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            this.backendURL = yield this.storage.get('BackEndURL');
            if (this.backendURL == null) {
                this.showSnackBarMessage("Please enter the backend URL in the settings");
                return;
            }
            // Once the back end URL has been loaded, get the formats & API key
            this.loadFormats().subscribe((response) => {
                if (response === null)
                    return Promise.reject('Null response when getting formats');
                response.map(x => this.formats[x.FormatName] = { FormatDisplayName: x.FormatDisplayName, FormatTypeName: x.FormatTypeName, IsMP3Format: (x.IsMP3Format == "1" ? true : false) });
                Object.freeze(this.formats);
                response.map(x => this.formatKeys.push(x.FormatName));
                Object.freeze(this.formatKeys);
            }, error => {
                const formats = [
                    { "FormatID": "1", "0": "1", "FormatDisplayName": "aac", "1": "aac", "FormatName": "aac", "2": "aac", "FormatTypeID": "1", "3": "1", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "2", "0": "2", "FormatDisplayName": "flac", "1": "flac", "FormatName": "flac", "2": "flac", "FormatTypeID": "1", "3": "1", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "3", "0": "3", "FormatDisplayName": "m4a", "1": "m4a", "FormatName": "m4a", "2": "m4a", "FormatTypeID": "1", "3": "1", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "4", "0": "4", "FormatDisplayName": "mp3 128k", "1": "mp3 128k", "FormatName": "128k", "2": "128k", "FormatTypeID": "1", "3": "1", "IsMP3Format": "1", "4": "1", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "5", "0": "5", "FormatDisplayName": "mp3 192k", "1": "mp3 192k", "FormatName": "192k", "2": "192k", "FormatTypeID": "1", "3": "1", "IsMP3Format": "1", "4": "1", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "6", "0": "6", "FormatDisplayName": "mp3 256k", "1": "mp3 256k", "FormatName": "256k", "2": "256k", "FormatTypeID": "1", "3": "1", "IsMP3Format": "1", "4": "1", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "7", "0": "7", "FormatDisplayName": "mp3 320k", "1": "mp3 320k", "FormatName": "320k", "2": "320k", "FormatTypeID": "1", "3": "1", "IsMP3Format": "1", "4": "1", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "8", "0": "8", "FormatDisplayName": "mp3 VBR 0 (Best)", "1": "mp3 VBR 0 (Best)", "FormatName": "0", "2": "0", "FormatTypeID": "1", "3": "1", "IsMP3Format": "1", "4": "1", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "9", "0": "9", "FormatDisplayName": "mp3 VBR (5) (OK)", "1": "mp3 VBR (5) (OK)", "FormatName": "5", "2": "5", "FormatTypeID": "1", "3": "1", "IsMP3Format": "1", "4": "1", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "10", "0": "10", "FormatDisplayName": "mp3 VBR (9) (Worst)", "1": "mp3 VBR (9) (Worst)", "FormatName": "9", "2": "9", "FormatTypeID": "1", "3": "1", "IsMP3Format": "1", "4": "1", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "11", "0": "11", "FormatDisplayName": "opus", "1": "opus", "FormatName": "opus", "2": "opus", "FormatTypeID": "1", "3": "1", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "12", "0": "12", "FormatDisplayName": "vorbis", "1": "vorbis", "FormatName": "vorbis", "2": "vorbis", "FormatTypeID": "1", "3": "1", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "13", "0": "13", "FormatDisplayName": "wav", "1": "wav", "FormatName": "wav", "2": "wav", "FormatTypeID": "1", "3": "1", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Audio", "5": "Audio" },
                    { "FormatID": "14", "0": "14", "FormatDisplayName": "No conversion", "1": "No conversion", "FormatName": "original", "2": "original", "FormatTypeID": "2", "3": "2", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Video", "5": "Video" },
                    { "FormatID": "15", "0": "15", "FormatDisplayName": "Convert to avi", "1": "Convert to avi", "FormatName": "avi", "2": "avi", "FormatTypeID": "2", "3": "2", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Video", "5": "Video" },
                    { "FormatID": "16", "0": "16", "FormatDisplayName": "Convert to flv", "1": "Convert to flv", "FormatName": "flv", "2": "flv", "FormatTypeID": "2", "3": "2", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Video", "5": "Video" },
                    { "FormatID": "17", "0": "17", "FormatDisplayName": "Convert to mkv", "1": "Convert to mkv", "FormatName": "mkv", "2": "mkv", "FormatTypeID": "2", "3": "2", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Video", "5": "Video" },
                    { "FormatID": "18", "0": "18", "FormatDisplayName": "Convert to mp4", "1": "Convert to mp4", "FormatName": "mp4", "2": "mp4", "FormatTypeID": "2", "3": "2", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Video", "5": "Video" },
                    { "FormatID": "19", "0": "19", "FormatDisplayName": "Convert to ogg", "1": "Convert to ogg", "FormatName": "ogg", "2": "ogg", "FormatTypeID": "2", "3": "2", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Video", "5": "Video" },
                    { "FormatID": "20", "0": "20", "FormatDisplayName": "Convert to webm", "1": "Convert to webm", "FormatName": "webm", "2": "webm", "FormatTypeID": "2", "3": "2", "IsMP3Format": "0", "4": "0", "FormatTypeName": "Video", "5": "Video" }
                ];
                formats.map(x => this.formats[x.FormatName] = { FormatDisplayName: x.FormatDisplayName, FormatTypeName: x.FormatTypeName, IsMP3Format: (x.IsMP3Format == "1" ? true : false) });
                Object.freeze(this.formats);
                Object.keys(formats).map(x => this.formatKeys.push(formats[x].FormatName));
                Object.freeze(this.formatKeys);
            });
            this.getAPIKey().subscribe((response) => {
                this.setAPIKey(response[0].APIKey);
            }, error => {
                alert(`An error occurred initializing YouTube search with the error ${error.error} and this functionality will not be available`);
                console.log(`An error occurred initializing YouTube search with the error ${error.error} and this functionality will not be available`);
                return (0,rxjs___WEBPACK_IMPORTED_MODULE_5__.throwError)("An error occurred getting the API Key");
            });
        });
    }
    getDebugging() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            const debugging = yield this.storage.get('Debugging');
            this.debugging = (debugging === true ? true : false);
        });
    }
    getMobileMode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            const mobileMode = yield this.storage.get('MobileMode');
            this.isMobilePlatform = (mobileMode === true ? true : false);
        });
    }
    getDownloadProgress(currLink) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('UUID', currLink['UUID']);
        return this.processStep("/GetDownloadProgress", params);
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
    getLinkKey(currLink) {
        return currLink['StepperIndex'];
    }
    getSupportedURLs() {
        return this.processStep("/GetSupportedURLs", null);
    }
    getThumbnail(videoId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('URL', `https://www.youtube.com/watch?v=${videoId}`);
        return this.processStep("/GetThumbnail", params);
    }
    getURLParameters() {
        return this.URLParameters;
    }
    handleError(error) {
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return (0,rxjs___WEBPACK_IMPORTED_MODULE_5__.throwError)(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return (0,rxjs___WEBPACK_IMPORTED_MODULE_5__.throwError)(error || 'Node.js server error');
    }
    isAudioFormat(format) {
        let isAudio = false;
        Object.keys(this.formats).forEach(key => {
            if (key === format && this.formats[key].FormatTypeName === 'Audio')
                isAudio = true;
        });
        return isAudio;
    }
    isMoveToServerAllowed() {
        return this.processStep("/IsMoveToServerAllowed", null);
    }
    isMP3Format(format) {
        let isMP3 = false;
        Object.keys(this.formats).forEach(key => {
            if (key === format && this.formats[key].FormatTypeName === 'Audio' && this.formats[key].IsMP3Format)
                isMP3 = true;
        });
        return isMP3;
    }
    loadFormats() {
        return this.processStep("/GetFormats", null);
    }
    moveFile(currLink) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('Filename', currLink['Filename']);
        params = params.append('Artist', this.rfc3986EncodeURIComponent(currLink['Fields']['Artist'].Value));
        if (this.isAudioFormat(currLink['Format'])) {
            params = params.append('IsAudioFormat', true);
            if (typeof currLink['Fields']['Album'].Value !== 'undefined')
                params = params.append('Album', this.rfc3986EncodeURIComponent(currLink['Fields']['Album'].Value));
        }
        else
            params = params.append('IsVideoFormat', true);
        return this.processStep("/MoveFile", params);
    }
    processStep(path, params) {
        if (this.backendURL == null) {
            this.getBackendURL();
            setTimeout(function () {
                if (this.backendURL == null)
                    return;
            }, 3000);
        }
        return this.http.get(this.backendURL + path, { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
    }
    // Escapes all special characters so they can safely be passed as URL parameters
    rfc3986EncodeURIComponent(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, escape);
    }
    saveBackendURL() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.backendURL != null && this.backendURL != "") {
                yield this.storage.set('BackEndURL', this.backendURL); //Save the URL
            }
            else {
                yield this.storage.remove('BackEndURL');
            }
        });
    }
    saveDebugging() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Saving when it is " + this.debugging);
            yield this.storage.set('Debugging', this.debugging);
        });
    }
    saveMobileMode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(`Saving this.isMobilePlatform when its value is ${this.isMobilePlatform}`);
            yield this.storage.set('MobileMode', this.isMobilePlatform);
        });
    }
    searchVideos(query) {
        if (this.API_TOKEN == "") {
            this.showSnackBarMessage("Search is not available. The API key is not available");
            return;
        }
        const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
        return this.http.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError)
        //map((response: any) => response.items)
        );
    }
    setAPIKey(API_TOKEN) {
        this.API_TOKEN = API_TOKEN;
    }
    setDownloadStatusMessage(currLink, newStatusMessage) {
        currLink['DownloadStatusMessage'] = newStatusMessage;
    }
    setDownloadSubscription(currLink, downloadSubscription) {
        Object.keys(this.links).forEach(key => {
            if (this.links[key]['URL'] === currLink['URL']) {
                this.links[key]['DownloadProgressSubscription'] = downloadSubscription;
            }
        });
    }
    showSnackBarMessage(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000
            });
            toast.present();
        });
    }
    URLExists(URL) {
        let URLExists = 0;
        Object.keys(this.links).forEach(key => {
            if (this.links[key]['URL'] === URL) {
                URLExists++;
            }
        });
        return URLExists > 1;
    }
    writeID3Tags(currLink) {
        if (currLink['Fields']['TrackNum'].Value !== null && !isNaN(parseInt(currLink['Fields']['TrackNum'].Value)) && parseInt(currLink['Fields']['TrackNum'].Value) < 10)
            currLink['Fields']['TrackNum'].Value = "0" + currLink['Fields']['TrackNum'].Value;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('Filename', currLink['Filename']);
        if (currLink['Fields']['Artist'].Value !== null)
            params = params.append('Artist', currLink['Fields']['Artist'].Value);
        if (currLink['Fields']['Album'].Value !== null)
            params = params.append('Album', currLink['Fields']['Album'].Value);
        if (currLink['Fields']['Name'].Value !== null)
            params = params.append('Name', currLink['Fields']['Name'].Value);
        if (currLink['Fields']['TrackNum'].Value !== null)
            params = params.append('TrackNum', currLink['Fields']['TrackNum'].Value);
        if (currLink['Fields']['Genre'].Value !== null)
            params = params.append('Genre', currLink['Fields']['Genre'].Value);
        if (currLink['Fields']['Year'].Value !== null)
            params = params.append('Year', currLink['Fields']['Year'].Value);
        return this.processStep("/WriteID3Tags", params);
    }
};
DataService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: "root",
    })
], DataService);



/***/ }),

/***/ 59313:
/*!****************************************!*\
  !*** ./src/app/core/saver.provider.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SAVER": function() { return /* binding */ SAVER; },
/* harmony export */   "getSaver": function() { return /* binding */ getSaver; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 49457);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);


const SAVER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('saver');
function getSaver() {
    return file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs;
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		38359,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		44355,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <!--<ion-router-outlet></ion-router-outlet>-->\r\n     <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">\r\n               <ion-tab-button id=\"y2mtab\" tab=\"Y2M\">\r\n                    <ion-icon name=\"cloud-download-sharp\"></ion-icon>\r\n                    <ion-label>Y2M</ion-label>\r\n                    <!--<ion-badge>6</ion-badge> Change to # of active D/Ls -->\r\n               </ion-tab-button>\r\n\r\n               <ion-tab-button tab=\"Search\">\r\n                    <ion-icon name=\"cloud-download-sharp\"></ion-icon>\r\n                    <ion-label>Search</ion-label>\r\n               </ion-tab-button>\r\n\r\n               <ion-tab-button tab=\"SupportedURLS\">\r\n                    <ion-icon name=\"globe-sharp\"></ion-icon>\r\n                    <ion-label>Supported Sites</ion-label>\r\n               </ion-tab-button>\r\n          </ion-tab-bar>\r\n     </ion-tabs>\r\n</ion-app>");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map