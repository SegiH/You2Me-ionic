(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkyou2me_ionic"] = self["webpackChunkyou2me_ionic"] || []).push([["src_app_ytsearch_ytsearch_module_ts"], {
    /***/
    83669: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppPageRoutingModule": function AppPageRoutingModule() {
          return (
            /* binding */
            _AppPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ytsearch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ytsearch.page */
      73650);

      var routes = [{
        path: '',
        component: _ytsearch_page__WEBPACK_IMPORTED_MODULE_0__.YTSearchComponent
      }];

      var _AppPageRoutingModule = function AppPageRoutingModule() {
        _classCallCheck(this, AppPageRoutingModule);
      };

      _AppPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppPageRoutingModule);
      /***/
    },

    /***/
    38048: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Y2MSearchPageModule": function Y2MSearchPageModule() {
          return (
            /* binding */
            _Y2MSearchPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ytsearch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ytsearch.page */
      73650);
      /* harmony import */


      var _ytsearch_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ytsearch-routing.module */
      83669);
      /* harmony import */


      var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/youtube-player */
      37783);

      var _Y2MSearchPageModule = function Y2MSearchPageModule() {
        _classCallCheck(this, Y2MSearchPageModule);
      };

      _Y2MSearchPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ytsearch_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppPageRoutingModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__.YouTubePlayerModule],
        declarations: [_ytsearch_page__WEBPACK_IMPORTED_MODULE_0__.YTSearchComponent]
      })], _Y2MSearchPageModule);
      /***/
    },

    /***/
    73650: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "YTSearchComponent": function YTSearchComponent() {
          return (
            /* binding */
            _YTSearchComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_ytsearch_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ytsearch.component.html */
      98335);
      /* harmony import */


      var _ytsearch_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ytsearch.component.css */
      28472);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/data.service */
      13943);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476); // https://itnext.io/a-loader-for-your-components-with-angular-cdk-overlay-ebf5a4962e4d


      var _YTSearchComponent = /*#__PURE__*/function () {
        function YTSearchComponent(dataService) {
          _classCallCheck(this, YTSearchComponent);

          this.dataService = dataService;
          this.apiLoaded = false;
          this.searchResultsLoaded = false;
          this.searchTerm = "";
        }

        _createClass(YTSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            debugger;
            this.dataService.getAPIKey().subscribe(function (response) {
              _this.dataService.setAPIKey(response[0].APIKey);
            }, function (error) {
              //alert(`An error occurred initializing YouTube search with the error ${error.error} and this functionality will not be available`);
              console.log("An error occurred initializing YouTube search with the error ".concat(error.error, " and this functionality will not be available")); //return throwError("An error occurred getting the API Key");
            }); // Load Youtube player API code

            if (!this.apiLoaded) {
              // This code loads the IFrame Player API code asynchronously, according to the instructions at https://developers.google.com/youtube/iframe_api_reference#Getting_Started
              var tag = document.createElement('script');
              tag.src = 'https://www.youtube.com/iframe_api';
              document.body.appendChild(tag);
              this.apiLoaded = true;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "createHyperlink",
          value: function createHyperlink(videoid) {
            return "https://www.youtube.com/watch?v=".concat(videoid);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this2 = this;

            setTimeout(function () {
              console.log('Done');
              event.target.complete(); // App logic to determine if all data is loaded
              // and disable the infinite scroll

              if (_this2.searchResultsLoaded) {
                event.target.disabled = true;
              }
            }, 500);
          }
        }, {
          key: "toggleInfiniteScroll",
          value: function toggleInfiniteScroll() {
            //if (this.searchResultsLoaded==false)
            //     this.searchYTChange();
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
          }
        }, {
          key: "addSearchResult",
          value: function addSearchResult(currSearchResult) {
            this.dataService.addLink("https://www.youtube.com/watch?v=" + currSearchResult.id.videoId, "320k"); // remove current item from search results

            this.searchResults = this.searchResults.filter(function (result) {
              return result.id.videoId != currSearchResult.id.videoId;
            });
          }
        }, {
          key: "deleteSearchResultsButtonClick",
          value: function deleteSearchResultsButtonClick() {
            this.searchTerm = null;
            this.searchResults = null;
            this.dataService.YTSearchOverlayRef.detach();
          }
        }, {
          key: "handleYouTubeSearchKeyUp",
          value: function handleYouTubeSearchKeyUp(e) {
            if (e.keyCode === 13) // Submit when enter is pressed
              this.searchYTChange();
          }
        }, {
          key: "searchYTChange",
          value: function searchYTChange() {
            var _this3 = this;

            if (this.searchTerm == "") {
              this.dataService.showSnackBarMessage("Please enter the search term");
              return;
            } // Do not call YT API when debugging or you'll hit the daily limit very quickly


            if (this.dataService.debugging) {
              this.searchResults = [{
                "kind": "youtube#searchResult",
                "etag": "gkReAAD4IdpTiKzJY2LwKc_FjDA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "dyQJH615KwA"
                },
                "snippet": {
                  "publishedAt": "2012-09-29T18:09:04Z",
                  "channelId": "UC2hu_UEIwg47FDaVnhReVtw",
                  "title": "Buckethead - One of the best, most emotional versions of Soothsayer Live @ Gothic 9-28-2012",
                  "description": "Front row with great audio and great view that gets better towards the end.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/dyQJH615KwA/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/dyQJH615KwA/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/dyQJH615KwA/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Bill",
                  "liveBroadcastContent": "none",
                  "publishTime": "2012-09-29T18:09:04Z"
                }
              }, {
                "kind": "youtube#searchResult",
                "etag": "DsxcLTIu3YbcVqK7BH3SpprXDQA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "adV8-_hgL4g"
                },
                "snippet": {
                  "publishedAt": "2007-10-28T17:51:26Z",
                  "channelId": "UCXIg4Htz3yq7l9AVJyxf2bw",
                  "title": "Buckethead - Soothsayer",
                  "description": "Track #6 on the album Crime Slunk Scene by Buckethead.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/adV8-_hgL4g/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/adV8-_hgL4g/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/adV8-_hgL4g/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "lounaslaatikko",
                  "liveBroadcastContent": "none",
                  "publishTime": "2007-10-28T17:51:26Z"
                }
              }, {
                "kind": "youtube#searchResult",
                "etag": "UjFwmlsm2Bf5vikJJnt6RkSgy6o",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "NrO0YPQcI14"
                },
                "snippet": {
                  "publishedAt": "2017-05-19T03:00:54Z",
                  "channelId": "UC8fqt_PDhDDszL5Zi8EauqA",
                  "title": "Buckethead - Relaxing Mix",
                  "description": "This mix is some of my favorites of Buckethead's more relaxing tunes: 1: The Flooding Of Pain 0:00 (pike #32 Rise Of The Blue Lotus track 02) 2: Pike 78 Track ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/NrO0YPQcI14/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/NrO0YPQcI14/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/NrO0YPQcI14/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Terminal Passage",
                  "liveBroadcastContent": "none",
                  "publishTime": "2017-05-19T03:00:54Z"
                }
              }, {
                "kind": "youtube#searchResult",
                "etag": "6TrTPf8ynwFmYdOqP8NLXShSizI",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "n4bply6Ibqw"
                },
                "snippet": {
                  "publishedAt": "2016-09-27T04:50:53Z",
                  "channelId": "UCHnAYLrjeNgPbCxtLi6AcLA",
                  "title": "Buckethead - 09.24.16 - Ardmore Music Hall - 4K - Full Set",
                  "description": "0:00 - Intro 1:33 - Welcome to Bucketheadland 5:04 - Redeem Team 10:12 - Mad Monster Party 13:43 - Flare 20:57 - King James 24:56 - Jowls 29:19 - Siege ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/n4bply6Ibqw/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/n4bply6Ibqw/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/n4bply6Ibqw/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Chris Cafiero",
                  "liveBroadcastContent": "none",
                  "publishTime": "2016-09-27T04:50:53Z"
                }
              }, {
                "kind": "youtube#searchResult",
                "etag": "Qq9ey-K1LABRczdU28LPpvVD0xo",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "E5PXYehriYY"
                },
                "snippet": {
                  "publishedAt": "2014-06-26T21:37:14Z",
                  "channelId": "UCBbv5enHgikfCgDvvQxfAMg",
                  "title": "Buckethead Pike 65 - Hold Me Forever (In memory of my mom Nancy York Carroll)",
                  "description": "Buy this album, for support of Buckethead ! http://www.bucketheadpikes.com/pike_65.html.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/E5PXYehriYY/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/E5PXYehriYY/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/E5PXYehriYY/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Zoran Lozanoski",
                  "liveBroadcastContent": "none",
                  "publishTime": "2014-06-26T21:37:14Z"
                }
              }, {
                "kind": "youtube#searchResult",
                "etag": "y06CHGUz9kC1134_aHnkg8SPnUs",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "4RgQ-JDiOic"
                },
                "snippet": {
                  "publishedAt": "2012-05-24T07:20:12Z",
                  "channelId": "UCNeK9z5NeOOEW_vzHsvcNyQ",
                  "title": "Buckethead - Aunt Suzie",
                  "description": "",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/4RgQ-JDiOic/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/4RgQ-JDiOic/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/4RgQ-JDiOic/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "JPetAreS",
                  "liveBroadcastContent": "none",
                  "publishTime": "2012-05-24T07:20:12Z"
                }
              }, {
                "kind": "youtube#searchResult",
                "etag": "n3JWylO9oPaRJ5ILIEJS9wSVr9o",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "86GJgvF8rP8"
                },
                "snippet": {
                  "publishedAt": "2020-11-30T05:36:25Z",
                  "channelId": "UCyaqzhb9KcQk497fDp4WkJw",
                  "title": "(Full Album) Buckethead - Through the Looking Garden (Buckethead Pikes #284)",
                  "description": "Through the Looking Garden - Full Album 1. Through the Looking Garden 0:00 *Released on November 28, 2020 Buy it: ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/86GJgvF8rP8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/86GJgvF8rP8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/86GJgvF8rP8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Polipoli8",
                  "liveBroadcastContent": "none",
                  "publishTime": "2020-11-30T05:36:25Z"
                }
              }, {
                "kind": "youtube#searchResult",
                "etag": "9v9iKsJKNqdIrTV-DWjfRkRDeYA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "MEDB4xJsXVo"
                },
                "snippet": {
                  "publishedAt": "2008-01-13T23:31:39Z",
                  "channelId": "UCGbwarBv3qdsfB7ol6rMyIw",
                  "title": "Buckethead with Claypool Bernie Worrell and Brain",
                  "description": "Colonel Claypool's Bucket of Bernie Brains at Bonnaroo 2002 the best!!!!",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/MEDB4xJsXVo/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/MEDB4xJsXVo/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/MEDB4xJsXVo/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Tim Beck",
                  "liveBroadcastContent": "none",
                  "publishTime": "2008-01-13T23:31:39Z"
                }
              }, {
                "kind": "youtube#searchResult",
                "etag": "iJoitIhOfXpJnVuVUyiu6VSVeBw",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "gaHpM6GEwIg"
                },
                "snippet": {
                  "publishedAt": "2013-02-09T17:26:10Z",
                  "channelId": "UCyaqzhb9KcQk497fDp4WkJw",
                  "title": "(Full Album) Buckethead - Electric Sea",
                  "description": "Electric Sea - Full Album 1. Electric Sea 0:00 2. Beyond the Knowing 6:25 3. Swomee Swan 10:19 4. Point Doom 15:04 5. El Indio 20:23 6. La Wally 27:39 7.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/gaHpM6GEwIg/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/gaHpM6GEwIg/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/gaHpM6GEwIg/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Polipoli8",
                  "liveBroadcastContent": "none",
                  "publishTime": "2013-02-09T17:26:10Z"
                }
              }, {
                "kind": "youtube#searchResult",
                "etag": "g6_k051qOVDanDc6YS1OP376720",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "H3ieFsv_EZM"
                },
                "snippet": {
                  "publishedAt": "2019-05-21T14:00:04Z",
                  "channelId": "UCVJOhLYPKzof5MSZGA9h7ZQ",
                  "title": "Guns N&#39; Roses Slash Talks About Buckethead &amp; His Thoughts on His Playing",
                  "description": "gunsnroses #axlrose #slash #duffmckagan #izzystradlin #2019 #newalbum For the latest Guns N' Roses latest news check out our blog: www.gnrcentral.com ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/H3ieFsv_EZM/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/H3ieFsv_EZM/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/H3ieFsv_EZM/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Guns N' Roses Central",
                  "liveBroadcastContent": "none",
                  "publishTime": "2019-05-21T14:00:04Z"
                }
              }];
              this.searchResultsLoaded = true;
            } else {
              // Call data service to search YT
              this.dataService.searchVideos(this.searchTerm).subscribe(function (response) {
                _this3.searchResults = response.items;
                _this3.searchResultsLoaded = true;
              }, function (error) {
                _this3.dataService.showSnackBarMessage("An error occurred searching YouTube");
              });
            }
          }
        }]);

        return YTSearchComponent;
      }();

      _YTSearchComponent.ctorParameters = function () {
        return [{
          type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _YTSearchComponent.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInfiniteScroll]
        }]
      };
      _YTSearchComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ytsearch',
        template: _raw_loader_ytsearch_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ytsearch_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _YTSearchComponent);
      /***/
    },

    /***/
    28472: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":root {\r\n    --bg-color: #DADBDC;\r\n}\r\n\r\n.linkDeleteIcon {\r\n    margin-left: 95%;\r\n    position: absolute;\r\n    top: -3px;\r\n}\r\n\r\n::ng-deep .cdk-overlay-pane > app-ytsearch {\r\n    overflow-y: scroll !important;\r\n}\r\n\r\n#searchButton {\r\n    border-radius: 10px;\r\n}\r\n\r\n#searchCheckBox {\r\n    position: relative;\r\n}\r\n\r\n#searchFilter {\r\n    position: relative;\r\n    left: -170px !important;\r\n    top: 65px !important;\r\n}\r\n\r\n#searchResultsDeleteIcon {\r\n    cursor: pointer;\r\n    margin-left: auto;\r\n    position: relative;\r\n}\r\n\r\n#searchYTButton {\r\n    position: relative;\r\n    margin-left: 99%;\r\n    top: -99px;\r\n}\r\n\r\n#searchYTPanel {\r\n    background-color: #DADBDC;\r\n    min-height: 150px !important;\r\n    z-index: 999;\r\n}\r\n\r\nmat-card {\r\n    /*border-style: solid;\r\n    border-width: 1px !important;*/\r\n    min-width: 500px;\r\n    overflow: scroll;\r\n}\r\n\r\nmat-grid-list.links mat-grid-tile {\r\n    border-style:  none;\r\n    /*border-style: solid;\r\n    border-collapse: collapse;\r\n    border-width: 1px !important;*/\r\n    box-shadow: inset 1px 1px 1px #000;\r\n    text-align: start;\r\n}\r\n\r\nmat-panel-title.searchResults {\r\n    display: grid;\r\n    position: absolute;\r\n    vertical-align: text-top; \r\n}\r\n\r\nmat-panel-title.searchResults span {\r\n    display: inline-block;\r\n    margin-bottom: 5px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInl0c2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO2tDQUM4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25COztrQ0FFOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJ5dHNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgLS1iZy1jb2xvcjogI0RBREJEQztcclxufVxyXG5cclxuLmxpbmtEZWxldGVJY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5NSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSA+IGFwcC15dHNlYXJjaCB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcclxufVxyXG5cclxuI3NlYXJjaEJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jc2VhcmNoQ2hlY2tCb3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jc2VhcmNoRmlsdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xNzBweCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzZWFyY2hSZXN1bHRzRGVsZXRlSWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI3NlYXJjaFlUQnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5OSU7XHJcbiAgICB0b3A6IC05OXB4O1xyXG59XHJcblxyXG4jc2VhcmNoWVRQYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFEQkRDO1xyXG4gICAgbWluLWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgLypib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDsqL1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbm1hdC1ncmlkLWxpc3QubGlua3MgbWF0LWdyaWQtdGlsZSB7XHJcbiAgICBib3JkZXItc3R5bGU6ICBub25lO1xyXG4gICAgLypib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7Ki9cclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxubWF0LXBhbmVsLXRpdGxlLnNlYXJjaFJlc3VsdHMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDsgXHJcbn1cclxuXHJcbm1hdC1wYW5lbC10aXRsZS5zZWFyY2hSZXN1bHRzIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    98335: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card id=\"searchYTPanel\">\r\n     <ion-card-header class=\"ion-inherit-color ios hydrated\">\r\n          <ion-card-subtitle></ion-card-subtitle>\r\n          <ion-card-title >Youtube Search</ion-card-title>\r\n     </ion-card-header>\r\n\r\n     <ion-card-content>\r\n          <ion-row size=\"12\">         \r\n               <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"searchYTChange()\"></ion-searchbar>\r\n          </ion-row>\r\n          \r\n          <ion-accordion-group>\r\n               <ion-accordion *ngFor=\"let currSearchResult of this.searchResults\">\r\n                    <ion-item slot=\"header\">\r\n                         <ion-col><span>{{currSearchResult.snippet.title}}</span></ion-col>\r\n                         <ion-button class=\"addToYou2Me\" color=\"primary\" (click)=\"addSearchResult(currSearchResult)\">Add</ion-button>\r\n                         <!--<ion-img [src]=\"currSearchResult.snippet.thumbnails.default.url\"></ion-img>-->\r\n                    </ion-item>\r\n\r\n                    <ion-list slot=\"content\">\r\n                         <ion-item><a [href]=createHyperlink(currSearchResult.id.videoId) target=\"_blank\"><ion-label>YouTube Video ID: {{ currSearchResult.id.videoId }}</ion-label></a></ion-item>\r\n                         <ion-item><ion-label>Description: {{currSearchResult.snippet.description}}</ion-label></ion-item>\r\n                         <ion-item><youtube-player #player [videoId]=\"currSearchResult.id.videoId\" [width]=\"250\" [height]=\"250\"></youtube-player></ion-item>\r\n                    </ion-list>  \r\n               </ion-accordion>\r\n          </ion-accordion-group>\r\n     </ion-card-content>\r\n</ion-card>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_ytsearch_ytsearch_module_ts-es5.js.map