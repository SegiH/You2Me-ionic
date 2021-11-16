(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkyou2me_ionic"] = self["webpackChunkyou2me_ionic"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_y2m_y2m_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./y2m/y2m.module */
          50734)).then(function (m) {
            return m.Y2MPageModule;
          });
        },
        pathMatch: 'full'
      }, {
        path: 'y2m',
        redirectTo: ''
      }, {
        path: 'Y2M',
        redirectTo: ''
      }, {
        path: 'search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_ytsearch_ytsearch_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./ytsearch/ytsearch.module */
          38048)).then(function (m) {
            return m.Y2MSearchPageModule;
          });
        }
      }, {
        path: 'Search',
        redirectTo: 'search',
        pathMatch: 'full'
      }, {
        path: 'SupportedURLS',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_supportedURLS_supportedURLs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./supportedURLS/supportedURLs.module */
          91370)).then(function (m) {
            return m.SupportedURLSPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      _AppComponent.ctorParameters = function () {
        return [];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/core.module */
      40294);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/youtube-player */
      37783);
      /* harmony import */


      var _core_saver_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/saver.provider */
      59313);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54925);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__.YouTubePlayerModule],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy
        }, {
          provide: _core_saver_provider__WEBPACK_IMPORTED_MODULE_3__.SAVER,
          useFactory: _core_saver_provider__WEBPACK_IMPORTED_MODULE_3__.getSaver
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    40294: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data.service */
      13943);
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      68589); //import { File } from '@ionic-native/file/ngx';


      var _CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      _CoreModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__.HTTP]
      })], _CoreModule);
      /***/
    },

    /***/
    13943: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataService": function DataService() {
          return (
            /* binding */
            _DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/ */
      40205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular2-uuid */
      84133);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage */
      61628);
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      68589);

      var stepperIndex = 0;

      var _DataService = /*#__PURE__*/function () {
        function DataService(toastController, http, platform, mobileHTTP, storage) {
          _classCallCheck(this, DataService);

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
          if (this.platform.is('android') || this.platform.is('ios')) this.isMobilePlatform = true; // Load Youtube player API code

          if (!this.apiLoaded) {
            // This code loads the IFrame Player API code asynchronously, according to the instructions at https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            var tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            this.apiLoaded = true;
          } //if (this.platform.is('hybrid'))
          //     this.isMobilePlatform=true;


          this.getBackendURL();
          this.getDebugging();
          this.getMobileMode();
        }

        _createClass(DataService, [{
          key: "addLink",
          value: function addLink() {
            var newURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var newFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "320k";
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
              UUID: angular2_uuid__WEBPACK_IMPORTED_MODULE_0__.UUID.UUID() // Unique UUID is generated so it can be used to track D/L progress with a unique identifier for each link

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
        }, {
          key: "anySubmittedLinks",
          value: function anySubmittedLinks() {
            var _this = this;

            var retVal = false;
            Object.keys(this.links).forEach(function (key) {
              if (_this.links[key]['IsSubmitted'] === true) retVal = true;
            });
            return retVal;
          }
        }, {
          key: "deleteDownloadFile",
          value: function deleteDownloadFile(fileName) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('Filename', fileName);
            return this.processStep("/DeleteDownloadFile", params);
          }
        }, {
          key: "deleteDownloadProgress",
          value: function deleteDownloadProgress(UUID) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('UUID', UUID);
            return this.processStep("/DeleteDownloadProgress", params);
          }
        }, {
          key: "deleteLink",
          value: function deleteLink(UUID) {
            var _this2 = this;

            Object.keys(this.links).forEach(function (key) {
              if (_this2.links[key]['UUID'] === UUID) {
                _this2.links.splice(key, 1);

                return;
              }
            });
          }
        }, {
          key: "fetchFile",
          value: function fetchFile(currLink) {
            var fileName = (this.isAudioFormat("") && !isNaN(parseInt(this.fields.TrackNum.Value)) ? this.fields.TrackNum.Value + " " : "") + (this.fields.Name.Value != "" ? this.fields.Name.Value : "Unknown"); // extra URL parameters in a Youtube link causes issues for youtube-dl

            if (currLink['URL'].includes('youtube.com')) {
              var arr = currLink['URL'].split('&');
              currLink['URL'] = arr[0];
            }

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('URL', currLink['URL']);
            params = params.append('Filename', this.rfc3986EncodeURIComponent(fileName));
            params = params.append('Debugging', this.debugging);
            params = params.append('CurrUUID', currLink['UUID']);

            if (this.isAudioFormat(currLink['Format'])) {
              params = params.append('IsAudioFormat', true);
              params = params.append('AudioFormat', currLink['Format']);
              if (this.isMP3Format(currLink['Format'])) params = params.append('Bitrate', currLink['Format']);
            } else {
              params = params.append('IsVideoFormat', true);
              params = params.append('VideoFormat', currLink['Format']);
            }

            return this.processStep("/DownloadFile", params);
          }
        }, {
          key: "fieldIsEditable",
          value: function fieldIsEditable(formatName, fieldName) {
            // Specified values are the fields to hide
            var videoHideFields = Object.freeze(['Artist', 'Album', 'TrackNum', 'Genre', 'Year']);
            var nonMP3HideFields = Object.freeze(['TrackNum', 'Genre', 'Year']);
            return (// If the format is a video format, hide these fields
              !this.isAudioFormat(formatName) && videoHideFields.includes(fieldName) || this.isAudioFormat(formatName) && !this.isMP3Format(formatName) && nonMP3HideFields.includes(fieldName)
            );
          }
        }, {
          key: "getAPIKey",
          value: function getAPIKey() {
            return this.processStep("/GetAPIKey", null);
          }
        }, {
          key: "getBackendURL",
          value: function getBackendURL() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.create();

                    case 2:
                      _context.next = 4;
                      return this.storage.get('BackEndURL');

                    case 4:
                      this.backendURL = _context.sent;

                      if (!(this.backendURL == null)) {
                        _context.next = 8;
                        break;
                      }

                      this.showSnackBarMessage("Please enter the backend URL in the settings");
                      return _context.abrupt("return");

                    case 8:
                      // Once the back end URL has been loaded, get the formats & API key
                      this.loadFormats().subscribe(function (response) {
                        if (response === null) return Promise.reject('Null response when getting formats');
                        response.map(function (x) {
                          return _this3.formats[x.FormatName] = {
                            FormatDisplayName: x.FormatDisplayName,
                            FormatTypeName: x.FormatTypeName,
                            IsMP3Format: x.IsMP3Format == "1" ? true : false
                          };
                        });
                        Object.freeze(_this3.formats);
                        response.map(function (x) {
                          return _this3.formatKeys.push(x.FormatName);
                        });
                        Object.freeze(_this3.formatKeys);
                      }, function (error) {
                        var formats = [{
                          "FormatID": "1",
                          "0": "1",
                          "FormatDisplayName": "aac",
                          "1": "aac",
                          "FormatName": "aac",
                          "2": "aac",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "2",
                          "0": "2",
                          "FormatDisplayName": "flac",
                          "1": "flac",
                          "FormatName": "flac",
                          "2": "flac",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "3",
                          "0": "3",
                          "FormatDisplayName": "m4a",
                          "1": "m4a",
                          "FormatName": "m4a",
                          "2": "m4a",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "4",
                          "0": "4",
                          "FormatDisplayName": "mp3 128k",
                          "1": "mp3 128k",
                          "FormatName": "128k",
                          "2": "128k",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "1",
                          "4": "1",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "5",
                          "0": "5",
                          "FormatDisplayName": "mp3 192k",
                          "1": "mp3 192k",
                          "FormatName": "192k",
                          "2": "192k",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "1",
                          "4": "1",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "6",
                          "0": "6",
                          "FormatDisplayName": "mp3 256k",
                          "1": "mp3 256k",
                          "FormatName": "256k",
                          "2": "256k",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "1",
                          "4": "1",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "7",
                          "0": "7",
                          "FormatDisplayName": "mp3 320k",
                          "1": "mp3 320k",
                          "FormatName": "320k",
                          "2": "320k",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "1",
                          "4": "1",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "8",
                          "0": "8",
                          "FormatDisplayName": "mp3 VBR 0 (Best)",
                          "1": "mp3 VBR 0 (Best)",
                          "FormatName": "0",
                          "2": "0",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "1",
                          "4": "1",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "9",
                          "0": "9",
                          "FormatDisplayName": "mp3 VBR (5) (OK)",
                          "1": "mp3 VBR (5) (OK)",
                          "FormatName": "5",
                          "2": "5",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "1",
                          "4": "1",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "10",
                          "0": "10",
                          "FormatDisplayName": "mp3 VBR (9) (Worst)",
                          "1": "mp3 VBR (9) (Worst)",
                          "FormatName": "9",
                          "2": "9",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "1",
                          "4": "1",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "11",
                          "0": "11",
                          "FormatDisplayName": "opus",
                          "1": "opus",
                          "FormatName": "opus",
                          "2": "opus",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "12",
                          "0": "12",
                          "FormatDisplayName": "vorbis",
                          "1": "vorbis",
                          "FormatName": "vorbis",
                          "2": "vorbis",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "13",
                          "0": "13",
                          "FormatDisplayName": "wav",
                          "1": "wav",
                          "FormatName": "wav",
                          "2": "wav",
                          "FormatTypeID": "1",
                          "3": "1",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Audio",
                          "5": "Audio"
                        }, {
                          "FormatID": "14",
                          "0": "14",
                          "FormatDisplayName": "No conversion",
                          "1": "No conversion",
                          "FormatName": "original",
                          "2": "original",
                          "FormatTypeID": "2",
                          "3": "2",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Video",
                          "5": "Video"
                        }, {
                          "FormatID": "15",
                          "0": "15",
                          "FormatDisplayName": "Convert to avi",
                          "1": "Convert to avi",
                          "FormatName": "avi",
                          "2": "avi",
                          "FormatTypeID": "2",
                          "3": "2",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Video",
                          "5": "Video"
                        }, {
                          "FormatID": "16",
                          "0": "16",
                          "FormatDisplayName": "Convert to flv",
                          "1": "Convert to flv",
                          "FormatName": "flv",
                          "2": "flv",
                          "FormatTypeID": "2",
                          "3": "2",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Video",
                          "5": "Video"
                        }, {
                          "FormatID": "17",
                          "0": "17",
                          "FormatDisplayName": "Convert to mkv",
                          "1": "Convert to mkv",
                          "FormatName": "mkv",
                          "2": "mkv",
                          "FormatTypeID": "2",
                          "3": "2",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Video",
                          "5": "Video"
                        }, {
                          "FormatID": "18",
                          "0": "18",
                          "FormatDisplayName": "Convert to mp4",
                          "1": "Convert to mp4",
                          "FormatName": "mp4",
                          "2": "mp4",
                          "FormatTypeID": "2",
                          "3": "2",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Video",
                          "5": "Video"
                        }, {
                          "FormatID": "19",
                          "0": "19",
                          "FormatDisplayName": "Convert to ogg",
                          "1": "Convert to ogg",
                          "FormatName": "ogg",
                          "2": "ogg",
                          "FormatTypeID": "2",
                          "3": "2",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Video",
                          "5": "Video"
                        }, {
                          "FormatID": "20",
                          "0": "20",
                          "FormatDisplayName": "Convert to webm",
                          "1": "Convert to webm",
                          "FormatName": "webm",
                          "2": "webm",
                          "FormatTypeID": "2",
                          "3": "2",
                          "IsMP3Format": "0",
                          "4": "0",
                          "FormatTypeName": "Video",
                          "5": "Video"
                        }];
                        formats.map(function (x) {
                          return _this3.formats[x.FormatName] = {
                            FormatDisplayName: x.FormatDisplayName,
                            FormatTypeName: x.FormatTypeName,
                            IsMP3Format: x.IsMP3Format == "1" ? true : false
                          };
                        });
                        Object.freeze(_this3.formats);
                        Object.keys(formats).map(function (x) {
                          return _this3.formatKeys.push(formats[x].FormatName);
                        });
                        Object.freeze(_this3.formatKeys);
                      });
                      this.getAPIKey().subscribe(function (response) {
                        _this3.setAPIKey(response[0].APIKey);
                      }, function (error) {
                        alert("An error occurred initializing YouTube search with the error ".concat(error.error, " and this functionality will not be available"));
                        console.log("An error occurred initializing YouTube search with the error ".concat(error.error, " and this functionality will not be available"));
                        return (0, rxjs___WEBPACK_IMPORTED_MODULE_5__.throwError)("An error occurred getting the API Key");
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getDebugging",
          value: function getDebugging() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var debugging;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storage.create();

                    case 2:
                      _context2.next = 4;
                      return this.storage.get('Debugging');

                    case 4:
                      debugging = _context2.sent;
                      this.debugging = debugging === true ? true : false;

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getMobileMode",
          value: function getMobileMode() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var mobileMode;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storage.create();

                    case 2:
                      _context3.next = 4;
                      return this.storage.get('MobileMode');

                    case 4:
                      mobileMode = _context3.sent;
                      this.isMobilePlatform = mobileMode === true ? true : false;

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getDownloadProgress",
          value: function getDownloadProgress(currLink) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('UUID', currLink['UUID']);
            return this.processStep("/GetDownloadProgress", params);
          }
        }, {
          key: "getFieldKeys",
          value: function getFieldKeys() {
            return this.fieldKeys;
          }
        }, {
          key: "getFormatKeys",
          value: function getFormatKeys() {
            return this.formatKeys;
          }
        }, {
          key: "getLinks",
          value: function getLinks() {
            return this.links;
          }
        }, {
          key: "getLinkKey",
          value: function getLinkKey(currLink) {
            return currLink['StepperIndex'];
          }
        }, {
          key: "getSupportedURLs",
          value: function getSupportedURLs() {
            return this.processStep("/GetSupportedURLs", null);
          }
        }, {
          key: "getThumbnail",
          value: function getThumbnail(videoId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('URL', "https://www.youtube.com/watch?v=".concat(videoId));
            return this.processStep("/GetThumbnail", params);
          }
        }, {
          key: "getURLParameters",
          value: function getURLParameters() {
            return this.URLParameters;
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof Error) {
              var errMessage = error.error.message;
              return (0, rxjs___WEBPACK_IMPORTED_MODULE_5__.throwError)(errMessage); // Use the following instead if using lite-server
              // return Observable.throw(err.text() || 'backend server error');
            }

            return (0, rxjs___WEBPACK_IMPORTED_MODULE_5__.throwError)(error || 'Node.js server error');
          }
        }, {
          key: "isAudioFormat",
          value: function isAudioFormat(format) {
            var _this4 = this;

            var isAudio = false;
            Object.keys(this.formats).forEach(function (key) {
              if (key === format && _this4.formats[key].FormatTypeName === 'Audio') isAudio = true;
            });
            return isAudio;
          }
        }, {
          key: "isMoveToServerAllowed",
          value: function isMoveToServerAllowed() {
            return this.processStep("/IsMoveToServerAllowed", null);
          }
        }, {
          key: "isMP3Format",
          value: function isMP3Format(format) {
            var _this5 = this;

            var isMP3 = false;
            Object.keys(this.formats).forEach(function (key) {
              if (key === format && _this5.formats[key].FormatTypeName === 'Audio' && _this5.formats[key].IsMP3Format) isMP3 = true;
            });
            return isMP3;
          }
        }, {
          key: "loadFormats",
          value: function loadFormats() {
            return this.processStep("/GetFormats", null);
          }
        }, {
          key: "moveFile",
          value: function moveFile(currLink) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('Filename', currLink['Filename']);
            params = params.append('Artist', this.rfc3986EncodeURIComponent(currLink['Fields']['Artist'].Value));

            if (this.isAudioFormat(currLink['Format'])) {
              params = params.append('IsAudioFormat', true);
              if (typeof currLink['Fields']['Album'].Value !== 'undefined') params = params.append('Album', this.rfc3986EncodeURIComponent(currLink['Fields']['Album'].Value));
            } else params = params.append('IsVideoFormat', true);

            return this.processStep("/MoveFile", params);
          }
        }, {
          key: "processStep",
          value: function processStep(path, params) {
            if (this.backendURL == null) {
              this.getBackendURL();
              setTimeout(function () {
                if (this.backendURL == null) return;
              }, 3000);
            }

            return this.http.get(this.backendURL + path, {
              params: params
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
          } // Escapes all special characters so they can safely be passed as URL parameters

        }, {
          key: "rfc3986EncodeURIComponent",
          value: function rfc3986EncodeURIComponent(str) {
            return encodeURIComponent(str).replace(/[!'()*]/g, escape);
          }
        }, {
          key: "saveBackendURL",
          value: function saveBackendURL() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.backendURL != null && this.backendURL != "")) {
                        _context4.next = 5;
                        break;
                      }

                      _context4.next = 3;
                      return this.storage.set('BackEndURL', this.backendURL);

                    case 3:
                      _context4.next = 7;
                      break;

                    case 5:
                      _context4.next = 7;
                      return this.storage.remove('BackEndURL');

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "saveDebugging",
          value: function saveDebugging() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log("Saving when it is " + this.debugging);
                      _context5.next = 3;
                      return this.storage.set('Debugging', this.debugging);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "saveMobileMode",
          value: function saveMobileMode() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log("Saving this.isMobilePlatform when its value is ".concat(this.isMobilePlatform));
                      _context6.next = 3;
                      return this.storage.set('MobileMode', this.isMobilePlatform);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "searchVideos",
          value: function searchVideos(query) {
            if (this.API_TOKEN == "") {
              this.showSnackBarMessage("Search is not available. The API key is not available");
              return;
            }

            var url = "".concat(this.API_URL, "?q=").concat(query, "&key=").concat(this.API_TOKEN, "&part=snippet&type=video&maxResults=10");
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError) //map((response: any) => response.items)
            );
          }
        }, {
          key: "setAPIKey",
          value: function setAPIKey(API_TOKEN) {
            this.API_TOKEN = API_TOKEN;
          }
        }, {
          key: "setDownloadStatusMessage",
          value: function setDownloadStatusMessage(currLink, newStatusMessage) {
            currLink['DownloadStatusMessage'] = newStatusMessage;
          }
        }, {
          key: "setDownloadSubscription",
          value: function setDownloadSubscription(currLink, downloadSubscription) {
            var _this6 = this;

            Object.keys(this.links).forEach(function (key) {
              if (_this6.links[key]['URL'] === currLink['URL']) {
                _this6.links[key]['DownloadProgressSubscription'] = downloadSubscription;
              }
            });
          }
        }, {
          key: "showSnackBarMessage",
          value: function showSnackBarMessage(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 3000
                      });

                    case 2:
                      toast = _context7.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "URLExists",
          value: function URLExists(URL) {
            var _this7 = this;

            var URLExists = 0;
            Object.keys(this.links).forEach(function (key) {
              if (_this7.links[key]['URL'] === URL) {
                URLExists++;
              }
            });
            return URLExists > 1;
          }
        }, {
          key: "writeID3Tags",
          value: function writeID3Tags(currLink) {
            if (currLink['Fields']['TrackNum'].Value !== null && !isNaN(parseInt(currLink['Fields']['TrackNum'].Value)) && parseInt(currLink['Fields']['TrackNum'].Value) < 10) currLink['Fields']['TrackNum'].Value = "0" + currLink['Fields']['TrackNum'].Value;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('Filename', currLink['Filename']);
            if (currLink['Fields']['Artist'].Value !== null) params = params.append('Artist', currLink['Fields']['Artist'].Value);
            if (currLink['Fields']['Album'].Value !== null) params = params.append('Album', currLink['Fields']['Album'].Value);
            if (currLink['Fields']['Name'].Value !== null) params = params.append('Name', currLink['Fields']['Name'].Value);
            if (currLink['Fields']['TrackNum'].Value !== null) params = params.append('TrackNum', currLink['Fields']['TrackNum'].Value);
            if (currLink['Fields']['Genre'].Value !== null) params = params.append('Genre', currLink['Fields']['Genre'].Value);
            if (currLink['Fields']['Year'].Value !== null) params = params.append('Year', currLink['Fields']['Year'].Value);
            return this.processStep("/WriteID3Tags", params);
          }
        }]);

        return DataService;
      }();

      _DataService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage
        }];
      };

      _DataService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: "root"
      })], _DataService);
      /***/
    },

    /***/
    59313: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SAVER": function SAVER() {
          return (
            /* binding */
            _SAVER
          );
        },

        /* harmony export */
        "getSaver": function getSaver() {
          return (
            /* binding */
            _getSaver
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! file-saver */
      49457);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);

      var _SAVER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('saver');

      function _getSaver() {
        return file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs;
      }
      /***/

    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863: function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-accordion_2.entry.js": [38359, "node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"],
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-breadcrumb_2.entry.js": [44355, "common", "node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-button {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufSJdfQ== */";
      /***/
    },

    /***/
    91106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!--<ion-router-outlet></ion-router-outlet>-->\r\n     <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">\r\n               <ion-tab-button id=\"y2mtab\" tab=\"Y2M\">\r\n                    <ion-icon name=\"cloud-download-sharp\"></ion-icon>\r\n                    <ion-label>Y2M</ion-label>\r\n                    <!--<ion-badge>6</ion-badge> Change to # of active D/Ls -->\r\n               </ion-tab-button>\r\n\r\n               <ion-tab-button tab=\"Search\">\r\n                    <ion-icon name=\"cloud-download-sharp\"></ion-icon>\r\n                    <ion-label>Search</ion-label>\r\n               </ion-tab-button>\r\n\r\n               <ion-tab-button tab=\"SupportedURLS\">\r\n                    <ion-icon name=\"globe-sharp\"></ion-icon>\r\n                    <ion-label>Supported Sites</ion-label>\r\n               </ion-tab-button>\r\n          </ion-tab-bar>\r\n     </ion-tabs>\r\n</ion-app>";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map