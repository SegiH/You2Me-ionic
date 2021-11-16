(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkyou2me_ionic"] = self["webpackChunkyou2me_ionic"] || []).push([["src_app_supportedURLS_supportedURLs_module_ts"], {
    /***/
    54566: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportedURLSPageRoutingModule": function SupportedURLSPageRoutingModule() {
          return (
            /* binding */
            _SupportedURLSPageRoutingModule
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


      var _supportsURLS_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./supportsURLS.page */
      28039);

      var routes = [{
        path: '',
        component: _supportsURLS_page__WEBPACK_IMPORTED_MODULE_0__.SupportedURLSPage
      }];

      var _SupportedURLSPageRoutingModule = function SupportedURLSPageRoutingModule() {
        _classCallCheck(this, SupportedURLSPageRoutingModule);
      };

      _SupportedURLSPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SupportedURLSPageRoutingModule);
      /***/
    },

    /***/
    91370: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportedURLSPageModule": function SupportedURLSPageModule() {
          return (
            /* binding */
            _SupportedURLSPageModule
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


      var _supportsURLS_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./supportsURLS.page */
      28039);
      /* harmony import */


      var _supportedURLS_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./supportedURLS-routing.module */
      54566);

      var _SupportedURLSPageModule = function SupportedURLSPageModule() {
        _classCallCheck(this, SupportedURLSPageModule);
      };

      _SupportedURLSPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _supportedURLS_routing_module__WEBPACK_IMPORTED_MODULE_1__.SupportedURLSPageRoutingModule],
        declarations: [_supportsURLS_page__WEBPACK_IMPORTED_MODULE_0__.SupportedURLSPage]
      })], _SupportedURLSPageModule);
      /***/
    },

    /***/
    28039: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportedURLSPage": function SupportedURLSPage() {
          return (
            /* binding */
            _SupportedURLSPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_supportsURLS_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./supportsURLS.page.html */
      77644);
      /* harmony import */


      var _supportsURLS_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./supportsURLS.page.scss */
      48923);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/data.service */
      13943);

      var _SupportedURLSPage = /*#__PURE__*/function () {
        function SupportedURLSPage(dataService) {
          _classCallCheck(this, SupportedURLSPage);

          this.dataService = dataService;
        }

        _createClass(SupportedURLSPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataService.getSupportedURLs().subscribe(function (response) {
              if (typeof response == 'undefined') return;
              _this.supportedURLS = response;
            }, function (error) {//this.handleError(null, Response, error);
            });
          } // Used to prevent the entire DOM tree from being re-rendered every time that there is a change

        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return index; // or item.id
          }
        }]);

        return SupportedURLSPage;
      }();

      _SupportedURLSPage.ctorParameters = function () {
        return [{
          type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _SupportedURLSPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-supportedURLS',
        template: _raw_loader_supportsURLS_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_supportsURLS_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SupportedURLSPage);
      /***/
    },

    /***/
    48923: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnRzVVJMUy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxnQkFBQTtBQUNMIiwiZmlsZSI6InN1cHBvcnRzVVJMUy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgICAgb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */";
      /***/
    },

    /***/
    77644: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "Supported URLS\r\n\r\n<ion-list>\r\n    <ion-item *ngFor=\"let currLink of supportedURLS;trackBy: trackByFn\">{{currLink}}</ion-item>\r\n</ion-list>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_supportedURLS_supportedURLs_module_ts-es5.js.map