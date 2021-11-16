(self["webpackChunkyou2me_ionic"] = self["webpackChunkyou2me_ionic"] || []).push([["src_app_y2m_y2m_module_ts"],{

/***/ 2217:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": function() { return /* binding */ Scheduler; }
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 20945:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": function() { return /* binding */ interval; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 69165);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 33637);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 26561);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 22901:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; }
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 10826);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 401:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": function() { return /* binding */ AsyncAction; }
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 22901);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 4548:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": function() { return /* binding */ AsyncScheduler; }
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 2217);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 33637:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": function() { return /* binding */ asyncScheduler; },
/* harmony export */   "async": function() { return /* binding */ async; }
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 401);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 26561:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": function() { return /* binding */ isNumeric; }
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 59796);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ 86253:
/*!******************************************!*\
  !*** ./src/app/core/download.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadService": function() { return /* binding */ DownloadService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download */ 88035);
/* harmony import */ var _saver_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saver.provider */ 59313);





let DownloadService = class DownloadService {
    constructor(http, save) {
        this.http = http;
        this.save = save;
    }
    download(url, filename) {
        return this.http.get(url, {
            reportProgress: true,
            observe: 'events',
            responseType: 'blob'
        }).pipe((0,_download__WEBPACK_IMPORTED_MODULE_0__.download)(blob => this.save(blob, filename)));
    }
    blob(url, filename) {
        return this.http.get(url, {
            responseType: 'blob'
        });
    }
};
DownloadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject, args: [_saver_provider__WEBPACK_IMPORTED_MODULE_1__.SAVER,] }] }
];
DownloadService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], DownloadService);



/***/ }),

/***/ 88035:
/*!**********************************!*\
  !*** ./src/app/core/download.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "download": function() { return /* binding */ download; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 42145);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 87519);


function isHttpResponse(event) {
    return event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpEventType.Response;
}
function isHttpProgressEvent(event) {
    return (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpEventType.DownloadProgress ||
        event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpEventType.UploadProgress);
}
function download(saver) {
    return (source) => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.scan)((download, event) => {
        if (isHttpProgressEvent(event)) {
            return {
                progress: event.total
                    ? Math.round((100 * event.loaded) / event.total)
                    : download.progress,
                state: "IN_PROGRESS",
                content: null
            };
        }
        if (isHttpResponse(event)) {
            if (saver) {
                saver(event.body);
            }
            return {
                progress: 100,
                state: "DONE",
                content: event.body
            };
        }
        return download;
    }, { state: "PENDING", progress: 0, content: null }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)((a, b) => a.state === b.state
        && a.progress === b.progress
        && a.content === b.content));
}


/***/ }),

/***/ 24437:
/*!*******************************************!*\
  !*** ./src/app/y2m/y2m-routing.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y2MPageRoutingModule": function() { return /* binding */ Y2MPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _y2m_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./y2m.page */ 75953);




const routes = [
    {
        path: '',
        component: _y2m_page__WEBPACK_IMPORTED_MODULE_0__.Y2MPage,
    }
];
let Y2MPageRoutingModule = class Y2MPageRoutingModule {
};
Y2MPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Y2MPageRoutingModule);



/***/ }),

/***/ 50734:
/*!***********************************!*\
  !*** ./src/app/y2m/y2m.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y2MPageModule": function() { return /* binding */ Y2MPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _y2m_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./y2m.page */ 75953);
/* harmony import */ var _y2m_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./y2m-routing.module */ 24437);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);







let Y2MPageModule = class Y2MPageModule {
};
Y2MPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _y2m_routing_module__WEBPACK_IMPORTED_MODULE_1__.Y2MPageRoutingModule
        ],
        declarations: [_y2m_page__WEBPACK_IMPORTED_MODULE_0__.Y2MPage]
    })
], Y2MPageModule);



/***/ }),

/***/ 75953:
/*!*********************************!*\
  !*** ./src/app/y2m/y2m.page.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y2MPage": function() { return /* binding */ Y2MPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_y2m_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./y2m.page.html */ 32607);
/* harmony import */ var _y2m_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./y2m.page.scss */ 8490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data.service */ 13943);
/* harmony import */ var _core_download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/download.service */ 86253);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 20945);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
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







let Y2MPage = class Y2MPage {
    constructor(alertController, dataService, downloads, menu) {
        this.alertController = alertController;
        this.dataService = dataService;
        this.downloads = downloads;
        this.menu = menu;
    }
    ngOnInit() {
        // Save current debugging value
        //const currDebugging = this.dataService.debugging;
        // Enable debugging if Debugging was provided as URL parameter. Otherwise default to currDebugging
        //this.dataService.debugging = (this.getURLParam("Debugging") != this.dataService.debugging && this.getURLParam("Debugging") ? this.getURLParam("Debugging") : currDebugging);
        document.title = `You2Me ${(this.dataService.debugging ? ` (Debugging)` : ``)}`;
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
        const URL = this.getURLParam('URL');
        const name = this.getURLParam('Name');
        const format = this.getURLParam('Format');
        if (URL !== null && name != null && format != null) {
            this.dataService.addLink(URL, format);
            if (name != null)
                this.dataService.links[0]['Fields']['Name'].Value = name;
        }
        /*this.downloads.download("https://you2me-backend.hovav.org/Unknown.mp3", "Unknown.mp3").subscribe((response) => {
             //console.log("Response: " + response.state);
             if (response.state === "DONE") {
                  this.dataService.showSnackBarMessage(`Finished downloading the file`);
             }
        },
        error => {
             //this.dataService.deleteLink(currLink['URL']);

             console.log("An error " + error + " occurred downloading the file from the server");
        });*/
        /*this.dataService.platform.ready().then(() => {
             this.dataService.mobileHTTP.downloadFile("https://you2me-backend.hovav.org/Unknown.mp3",{},{},"Unknown.mp3").then(response => {
             }).catch(err => {
                  this.dataService.showSnackBarMessage(`The error ${err} occurred while downloading the file`);
                  console.log(`The error ${err} occurred while downloading the file`)
             })
        });*/
    }
    addLinkClick() {
        this.dataService.addLink(null, "320k"); // Add row to the table with the default format set to the highest quality mp3
    }
    confirmDialog(currLink, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                //cssClass: 'my-custom-class',
                header: 'Alert',
                //subHeader: 'Subtitle',
                message: message,
                buttons: ['OK', 'Cancel']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            if (role != "cancel") // OK
                this.dataService.deleteLink(currLink['UUID']);
        });
    }
    deleteLinkButtonClick(currLink) {
        this.confirmDialog(currLink, "Are you sure you want to delete this link ?");
    }
    downloadFile(currLink) {
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
                if (typeof response[1] !== 'undefined' && response[1] !== "" && currLink['Fields']['Artist'].Value == "")
                    currLink['Fields']['Artist'].Value = response[1];
                // Third index will be Title if matched through Python script that does audio fingerprinting
                if (typeof response[2] !== 'undefined' && response[2] !== "" && currLink['Fields']['Name'].Value == "")
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
            }, error => {
                console.log("An error occurred terminating the download progress subscription");
            });
            if (this.dataService.isMP3Format(currLink['Format'])) {
                currLink['StatusMessage'] = 'File was downloaded';
                this.writeID3Tags(currLink);
            }
            else {
                // The response returns the URL for the downloaded file
                currLink['DownloadLink'] = decodeURIComponent(response[0].replace(/\+/g, ' '));
                currLink['StatusMessage'] = 'File is ready';
                this.finished(currLink);
            }
        }, error => {
            // Stop the REST service that gets the download status
            this.handleError(currLink, Response, error);
        });
    }
    downloadButtonClicked(currLink) {
        const fileNameWithoutPath = currLink['DownloadLink'].substr(currLink['DownloadLink'].lastIndexOf("/") + 1);
        currLink['DownloadButtonClicked'] = true;
        if (!this.dataService.platform.is('android') && !this.dataService.platform.is('ios')) {
            // Subscribe to DL service and wait for the done response 
            this.downloads.download(currLink['DownloadLink'], fileNameWithoutPath).subscribe((response) => {
                //console.log("Response: " + response.state);               
                if (response.state === "DONE") {
                    this.dataService.deleteLink(currLink['URL']); // Delete link from list
                    // Send request to delete the file
                    this.dataService.deleteDownloadFile(currLink['Filename']).subscribe((response) => { }, error => {
                        console.log("An error " + error + " occurred deleting the file from the server 1");
                    });
                }
            }, error => {
                this.dataService.deleteLink(currLink['URL']);
                console.log("An error " + error + " occurred deleting the file from the server 2");
            });
        }
        else {
            /*const filePath = (this.dataService.platform.is('ios') ? this.file.documentsDirectory : this.file.dataDirectory ) + fileNameWithoutPath;
            
            this.dataService.platform.ready().then(() => {
                 this.nativeHTTP.downloadFile(currLink['DownloadLink'],{},{},fileNameWithoutPath).then(response => {
                 }).catch(err => {
                      this.dataService.showSnackBarMessage(` The error ${err} occurred while downloading the file`);
                 })
            });*/
        }
    }
    finished(currLink, isError = false) {
        while (currLink["CurrentStep"] < currLink["StepperStepNames"].length - 1)
            currLink["CurrentStep"]++;
        currLink['IsFinished'] = true;
        // Stop the REST service that gets the download status
        if (!this.dataService.debugging)
            currLink['DownloadProgressSubscription'].unsubscribe();
    }
    getThumbnail(currLink) {
        setTimeout(() => {
            if (currLink != null && currLink["URL"] !== null && currLink["URL"] !== "" && currLink["URL"].toString().includes("youtube.com") && currLink["ThumbnailPreviewStarted"] != true && currLink["ThumbnailLoaded"] != true) {
                currLink["ThumbnailPreviewStarted"] = true;
                const URL = currLink["URL"];
                if (URL.includes("https://www.youtube.com/watch?v=")) {
                    const videoID = URL.replace("https://www.youtube.com/watch?v=", "");
                    // Call data service to download the file
                    this.dataService.getThumbnail(videoID)
                        .subscribe((response) => {
                        currLink["ThumbnailLoaded"] = true;
                        currLink["ThumbnailURL"] = response[0];
                    }, error => {
                        currLink["ThumbnailPreviewStarted"] = false;
                        currLink["ThumbnailLoaded"] = false;
                        this.handleError(currLink, Response, error);
                    });
                }
                else
                    return null;
            }
            else
                return null;
        });
    }
    getURLParam(name) {
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
    goButtonClick(currLink) {
        // Validate fields
        const name = currLink['Fields']['Name'].Value;
        const artist = currLink['Fields']['Artist'].Value;
        const album = currLink['Fields']['Album'].Value;
        if (currLink['CurrentStep'] == 0) {
            currLink['URL'] = currLink['URL'].trim();
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
            }
            else if (!this.dataService.isAudioFormat(currLink['Format']) && currLink['Fields']['Name'].Value === "") {
                this.dataService.showSnackBarMessage("Please enter the name");
                return;
            }
            currLink['IsSubmitted'] = true;
            currLink['StatusMessage'] = "Starting download";
            this.downloadFile(currLink);
        }
        else if (currLink['CurrentStep'] == 2) { // After writing ID3 tags, if the artist and name are still blank, prompt user to fill them in
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
            this.writeID3Tags(currLink);
        }
    }
    handleError(currLink, response, error) {
        // write error status
        if (currLink != null) {
            if (!this.dataService.debugging)
                currLink['DownloadProgressSubscription'].unsubscribe();
            currLink['StatusMessage'] = `A fatal error occurred`;
            currLink['IsError'] = true;
            console.log(`An error occurred at step ${currLink['CurrentStep']} with the response ${response[0]} and error ${error[0]}`);
        }
        else {
            console.log(`An error occurred at step (no currLink) with the error ${error[0]}`);
        }
        this.finished(currLink, true);
    }
    keyPressNumbers(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode < 48 || charCode > 57) { // Only Numbers 0-9
            event.preventDefault();
            return false;
        }
        else {
            return true;
        }
    }
    moveFileToServer(currLink) {
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
        }, error => {
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
        map1.map(x => this.urlParams[decodeURI(x[0]).toUpperCase()] = decodeURI(x[1]) + (typeof x[2] !== 'undefined' ? '=' + decodeURI(x[2]) : ''));
    }
    startDownloadProgressMonitor(currLink) {
        if (this.dataService.debugging)
            return;
        this.dataService.setDownloadSubscription(currLink, (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(50)
            .subscribe(() => {
            this.dataService.getDownloadProgress(currLink)
                .subscribe((downloadProgress) => {
                currLink['DownloadProgress'] = downloadProgress;
                if (downloadProgress == 100)
                    currLink['DownloadProgressSubscription'].unsubscribe();
            }, error => {
            });
        }));
    }
    // Used to prevent the entire DOM tree from being re-rendered every time that there is a change
    trackByFn(index, item) {
        return index; // or item.id
    }
    writeID3Tags(currLink) {
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
            currLink["Filename"] = response[1];
            currLink['StatusMessage'] = 'File is ready.';
            currLink['CurrentStep']++;
            this.finished(currLink);
            return;
        }, error => {
            this.handleError(currLink, Response, error);
        });
    }
};
Y2MPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _core_download_service__WEBPACK_IMPORTED_MODULE_3__.DownloadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController }
];
Y2MPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-y2m',
        template: _raw_loader_y2m_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_y2m_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({ providedIn: 'root' })
], Y2MPage);



/***/ }),

/***/ 8490:
/*!***********************************!*\
  !*** ./src/app/y2m/y2m.page.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --bg-color: #DADBDC;\n}\n\n.deleteLink {\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 24px;\n  position: absolute;\n  margin-top: 8%;\n}\n\n.deleteLinkMobile {\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 24px;\n  margin-left: 89%;\n}\n\n.ion-page {\n  background-color: #757679 !important;\n}\n\n.linkItem {\n  background-color: #EDF0F5;\n}\n\n.menu {\n  --width: 500px;\n}\n\n.menuItemLabel {\n  margin-right: 15px;\n}\n\n.mobileDiv {\n  display: flex;\n  max-width: 500px;\n}\n\n.mobileField {\n  margin-lefT: 25px;\n  max-width: 300px;\n}\n\n.mobileField > ion-input {\n  max-height: 25px;\n}\n\n.mobileField > ion-input.numberField {\n  width: 100px;\n}\n\n.mobileLabel {\n  min-width: 155px;\n  text-align: left;\n}\n\n.tableHeader {\n  background-color: #53A2F0;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  border-style: solid;\n  border-collapse: collapse;\n  border-width: 1px !important;\n}\n\n.thumbnailImage {\n  width: 8%;\n}\n\n#addLinkIcon {\n  color: black;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 24px;\n  margin-left: 98%;\n  position: relative;\n  left: -50px;\n  top: -30px;\n}\n\n#backendDiv {\n  display: flex;\n  width: 900px;\n}\n\n#backendLabel {\n  margin-top: 1%;\n}\n\n#backendURL {\n  border-style: none;\n  max-width: 300px;\n  vertical-align: top !important;\n}\n\n#debugging {\n  text-align: left;\n  vertical-align: center;\n}\n\n#debugging ion-checkbox {\n  margin-top: 1%;\n}\n\n#debugging ion-label {\n  margin-right: 25px;\n}\n\n#editBackendURL {\n  margin-top: 1%;\n  width: 25px;\n  height: 25px;\n}\n\n#mobileFormat {\n  display: ruby;\n}\n\n#settingsIcon {\n  color: black;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 24px;\n  margin-left: 98%;\n}\n\n#showSupportedURLs {\n  text-align: left;\n}\n\n#you2meCard {\n  background-color: #dadbdc;\n  text-align: center;\n}\n\nion-card {\n  overflow-y: auto;\n}\n\nion-card-title {\n  font-size: 32px !important;\n  font-weight: bold;\n}\n\nion-col {\n  border-style: solid;\n  border-collapse: collapse;\n  border-width: 1px !important;\n}\n\nion-col ion-progress-bar {\n  margin-top: 10%;\n}\n\nion-grid.links {\n  border-style: solid;\n  border-collapse: collapse;\n  border-width: 1px !important;\n  box-shadow: inset 1px 1px 1px #000;\n  text-align: center;\n}\n\nion-input {\n  border-style: solid;\n  border-collapse: collapse;\n  border-width: 1px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInkybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0ssU0FBQTtBQUNMOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNLLGNBQUE7QUFDTDs7QUFFQTtFQUNNLGtCQUFBO0FBQ047O0FBRUE7RUFDTSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDTjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDSyxlQUFBO0FBRUw7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFFRiIsImZpbGUiOiJ5Mm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tYmctY29sb3I6ICNEQURCREM7XHJcbn1cclxuXHJcbi5kZWxldGVMaW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiA4JTtcclxufVxyXG5cclxuLmRlbGV0ZUxpbmtNb2JpbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDg5JTtcclxufVxyXG5cclxuLmlvbi1wYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3Njc5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saW5rSXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERjBGNTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIC0td2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4ubWVudUl0ZW1MYWJlbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubW9iaWxlRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5tb2JpbGVGaWVsZCB7XHJcbiAgbWFyZ2luLWxlZlQ6IDI1cHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm1vYmlsZUZpZWxkID4gaW9uLWlucHV0IHtcclxuICAgIG1heC1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5tb2JpbGVGaWVsZCA+IGlvbi1pbnB1dC5udW1iZXJGaWVsZCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubW9iaWxlTGFiZWwge1xyXG4gIG1pbi13aWR0aDogMTU1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRhYmxlSGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNBMkYwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7ICBcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aHVtYm5haWxJbWFnZSB7XHJcbiAgICAgd2lkdGg6IDglO1xyXG59XHJcblxyXG4jYWRkTGlua0ljb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5OCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC01MHB4O1xyXG4gIHRvcDogLTMwcHg7XHJcbn1cclxuXHJcbiNiYWNrZW5kRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA5MDBweDtcclxufVxyXG5cclxuI2JhY2tlbmRMYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbiNiYWNrZW5kVVJMIHtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNkZWJ1Z2dpbmcge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2RlYnVnZ2luZyBpb24tY2hlY2tib3gge1xyXG4gICAgIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4jZGVidWdnaW5nIGlvbi1sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuI2VkaXRCYWNrZW5kVVJMIHtcclxuICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbiNtb2JpbGVGb3JtYXQge1xyXG4gIGRpc3BsYXk6IHJ1Ynk7XHJcbn1cclxuXHJcbiNzZXR0aW5nc0ljb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5OCU7XHJcbn1cclxuXHJcbiNzaG93U3VwcG9ydGVkVVJMcyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI3lvdTJtZUNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRiZGM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyAgXHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7ICBcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbCBpb24tcHJvZ3Jlc3MtYmFyIHtcclxuICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbmlvbi1ncmlkLmxpbmtzIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAgXHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4ICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgIFxyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 32607:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/y2m/y2m.page.html ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n     <ion-menu class=\"menu\" side=\"start\" menu-id=\"first\" content-id=\"you2meCard\">\r\n          <ion-header>\r\n               <ion-toolbar color=\"primary\">\r\n                    <ion-title>You2Me Settings</ion-title>\r\n               </ion-toolbar>\r\n          </ion-header>\r\n          \r\n          <ion-content>\r\n               <ion-list>\r\n                    <ion-item><span class=\"menuItemLabel\">Backend URL:</span><ion-input id=\"backendURL\" [(ngModel)]=\"dataService.backendURL\" value=\"dataService.backendURL\" (change)=\"dataService.saveBackendURL()\"></ion-input></ion-item>\r\n                    <ion-item>Mobile Mode<ion-toggle [(ngModel)]=\"dataService.isMobilePlatform\" color=\"primary\" (ionChange)=\"dataService.saveMobileMode()\"></ion-toggle></ion-item>\r\n                    <ion-item>Debugging<ion-toggle [(ngModel)]=\"dataService.debugging\" color=\"primary\" (ionChange)=\"dataService.saveDebugging()\"></ion-toggle></ion-item>\r\n               </ion-list>\r\n          </ion-content>\r\n     </ion-menu>\r\n        \r\n<ion-card class=\"ios hydrated\" id=\"you2meCard\">\r\n     <ion-card-header class=\"ion-inherit-color ios hydrated\">\r\n          <ion-icon id=\"settingsIcon\" name=\"settings-sharp\" (click)=\"openMenu()\"></ion-icon>\r\n          <ion-icon id=\"addLinkIcon\" name=\"add-sharp\" (click)=\"addLinkClick()\"></ion-icon>\r\n          <ion-card-title>{{ 'You2Me' + (dataService.debugging ? \" (debugging)\" : \"\") }}</ion-card-title>          \r\n          <ion-card-subtitle></ion-card-subtitle>\r\n     </ion-card-header>\r\n\r\n     <ion-card-content>\r\n          <ion-grid  *ngIf=\"!dataService.isMobilePlatform; else MobileContent\" class=\"links\">\r\n               <ion-row> <!-- Table column headers -->\r\n                    <ion-col class=\"tableHeader\">URL</ion-col>\r\n                    <ion-col class=\"tableHeader\">Format</ion-col>\r\n                    <ion-col class=\"tableHeader\">Progress</ion-col>\r\n                    <ion-col class=\"tableHeader\">Artist</ion-col>\r\n                    <ion-col class=\"tableHeader\">Album</ion-col>\r\n                    <ion-col class=\"tableHeader\">Name</ion-col>\r\n                    <ion-col class=\"tableHeader\">TrackNum</ion-col>\r\n                    <ion-col class=\"tableHeader\">Genre</ion-col>\r\n                    <ion-col class=\"tableHeader\">Year</ion-col>\r\n                    <ion-col class=\"tableHeader\">Action</ion-col>\r\n                    <ion-col class=\"tableHeader\">Status</ion-col>\r\n                    <ion-col class=\"tableHeader\">Delete</ion-col>\r\n               </ion-row>\r\n               \r\n               <ion-row *ngFor=\"let currLink of dataService.getLinks();trackBy: trackByFn\" class=\"linkItem\"> <!-- Links -->\r\n                         <ion-col size=\"1\">\r\n                              <div *ngIf=\"currLink.IsSubmitted; else editURL\">{{currLink.URL}}</div>\r\n                              \r\n                              <ng-template #editURL>\r\n                                   <ion-input [(ngModel)]=\"currLink.URL\" [value]=\"currLink.URL\" placeholder=\"URL\" (change)=\"getThumbnail(currLink)\"></ion-input>\r\n                              </ng-template>\r\n                         </ion-col>\r\n                         \r\n                         <ion-col>\r\n                              <ion-select placeholder='Format' name=\"format\" [(ngModel)]=\"currLink.Format\" [required]=true [disabled]=\"currLink.IsSubmitted\">\r\n                                   <ion-select-option *ngFor=\"let currFormat of dataService.getFormatKeys();trackBy: trackByFn\" [value]=\"currFormat\">\r\n                                        {{dataService.formats[currFormat].FormatDisplayName}}\r\n                                   </ion-select-option>\r\n                              </ion-select>  \r\n                         </ion-col>\r\n\r\n                         <ion-col>\r\n                              <ion-progress-bar *ngIf=\"currLink.IsSubmitted\" type=\"determinate\" [value]=\"currLink.DownloadProgress\"></ion-progress-bar>\r\n                         </ion-col>\r\n\r\n                         <!--  *ngIf=\"dataService.getLinks().length > 1 || ( dataService.getLinks().length == 1 && dataService.isAudioFormat(dataService.links[0].Format))\" -->\r\n                         <ion-col>\r\n                              <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Artist'); else editArtist\">{{currLink.Fields.Artist.Value}}</div>\r\n                             \r\n                              <ng-template  #editArtist>\r\n                                   <ion-input [(ngModel)]=\"currLink.Fields.Artist.Value\" value=\"currLink.Fields.Artist.Value\"></ion-input>\r\n                              </ng-template>\r\n                         </ion-col>\r\n\r\n                         <!--  *ngIf=\"dataService.getLinks().length > 1 || ( dataService.getLinks().length == 1 && dataService.isAudioFormat(dataService.links[0].Format))\" -->\r\n                         <ion-col>\r\n                              <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Album'); else editAlbum\">{{currLink.Fields.Album.Value}}</div>\r\n                             \r\n                              <ng-template  #editAlbum>\r\n                                   <ion-input [(ngModel)]=\"currLink.Fields.Album.Value\" value=\"currLink.Fields.Album.Value\"></ion-input>\r\n                              </ng-template>\r\n                         </ion-col>\r\n\r\n                         <ion-col>\r\n                              <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Name'); else editName\">{{currLink.Fields.Name.Value}}</div>\r\n                             \r\n                              <ng-template  #editName>\r\n                                   <ion-input [(ngModel)]=\"currLink.Fields.Name.Value\" value=\"currLink.Fields.Name.Value\"></ion-input>\r\n                              </ng-template>\r\n                         </ion-col>\r\n\r\n                         <!--  *ngIf=\"dataService.getLinks().length > 1 || ( dataService.getLinks().length == 1 && dataService.isAudioFormat(dataService.links[0].Format))\" -->\r\n                         <ion-col>\r\n                              <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'TrackNum'); else editTrackNum\">{{currLink.Fields.TrackNum.Value}}</div>\r\n                             \r\n                              <ng-template  #editTrackNum>\r\n                                   <ion-input type=\"number\" [(ngModel)]=\"currLink.Fields.TrackNum.Value\" [(ngModel)]=\"currLink.Fields.TrackNum.Value\" value=\"currLink.Fields.TrackNum.Value\"></ion-input>\r\n                              </ng-template>\r\n                         </ion-col>\r\n\r\n                         <!--  *ngIf=\"dataService.getLinks().length > 1 || ( dataService.getLinks().length == 1 && dataService.isAudioFormat(dataService.links[0].Format))\" -->\r\n                         <ion-col>\r\n                              <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Genre'); else editGenre\">{{currLink.Fields.Genre.Value}}</div>\r\n                             \r\n                              <ng-template #editGenre>\r\n                                   <ion-input [(ngModel)]=\"currLink.Fields.Genre.Value\" value=\"currLink.Fields.Genre.Value\"></ion-input>\r\n                              </ng-template>\r\n                         </ion-col>\r\n\r\n                         <!--  *ngIf=\"dataService.getLinks().length > 1 || ( dataService.getLinks().length == 1 && dataService.isAudioFormat(dataService.links[0].Format))\" -->\r\n                         <ion-col>\r\n                              <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Year'); else editYear\">{{currLink.Fields.Year.Value}}</div>\r\n                             \r\n                              <ng-template  #editYear>\r\n                                   <ion-input type=\"number\" [(ngModel)]=\"currLink.Fields.Year.Value\" [(ngModel)]=\"currLink.Fields.Year.Value\" value=\"currLink.Fields.Year.Value\"></ion-input>\r\n                              </ng-template>\r\n                         </ion-col>\r\n\r\n                         <ion-col>\r\n                              <ion-button class=\"goButton\" *ngIf=\"dataService.backendURL != null && !currLink.IsSubmitted\" color=\"primary\" (click)=\"goButtonClick(currLink)\">Go</ion-button>\r\n                              <ion-button color=\"success\" *ngIf=\"currLink.IsFinished && !currLink.IsError && !currLink.DownloadButtonClicked && !currLink.MoveToServerButtonClicked\" (click)=\"downloadButtonClicked(currLink)\">Download</ion-button>\r\n                              <ion-button color=\"danger\" *ngIf=\"currLink.IsFinished && !currLink.IsError && allowMoveToServer && !currLink.DownloadButtonClicked && !currLink.MoveToServerButtonClicked\" (click)=\"moveFileToServer(currLink)\">Server</ion-button>\r\n                         </ion-col>\r\n\r\n                         <ion-col>\r\n                              <div>{{currLink.StatusMessage}}</div>\r\n                         </ion-col>\r\n\r\n                         <ion-col *ngIf=\"dataService.getLinks().length > 0\">\r\n                              <div class=\"linkDeleteIcon\"><ion-icon name=\"close-sharp\" class=\"deleteLink\" (click)=\"deleteLinkButtonClick(currLink)\"></ion-icon></div>\r\n                         </ion-col>\r\n               </ion-row> \r\n          </ion-grid>\r\n\r\n          <ng-template #MobileContent>               \r\n               <ion-accordion-group expand=\"true\">\r\n                    <ion-accordion *ngFor=\"let currLink of dataService.getLinks();trackBy: trackByFn\" class=\"linkItem\">\r\n                         <ion-item slot=\"header\">\r\n                              <ion-img class=\"thumbnailImage\" *ngIf=\"currLink.URL != null && currLink.URL.includes('youtube.com') && currLink.ThumbnailURL != null\" [src]=\"currLink.ThumbnailURL\">Thumbnail</ion-img>\r\n                              <div *ngIf=\"currLink.ThumbnailLoaded != true\">Link</div>\r\n                         </ion-item>\r\n\r\n                         <ion-list slot=\"content\">\r\n                              <div class=\"linkDeleteIcon\"><ion-icon name=\"close-sharp\" class=\"deleteLinkMobile\" (click)=\"deleteLinkButtonClick(currLink)\"></ion-icon></div>\r\n                              <ion-grid>\r\n                                   <ion-row size=\"12\">\r\n                                        <div class=\"mobileDiv\" *ngIf=\"currLink.IsSubmitted\"> \r\n                                             <div>{{currLink.StatusMessage}}</div>\r\n                                             <!--<ion-progress-bar type=\"determinate\" [value]=\"currLink.DownloadProgress\"></ion-progress-bar>-->\r\n                                        </div>\r\n                                   </ion-row>\r\n\r\n                                   <ion-row>\r\n                                        <div class=\"mobileDiv\">\r\n                                             <div class=\"mobileLabel\">URL:</div>                                        \r\n                                             \r\n                                             <div class=\"mobileField\">\r\n                                                  <div *ngIf=\"currLink.IsSubmitted; else editURL\">{{currLink.URL}}</div>\r\n                                   \r\n                                                  <ng-template #editURL>\r\n                                                       <ion-input [(ngModel)]=\"currLink.URL\" [value]=\"currLink.URL\" placeholder=\"URL\" (change)=\"getThumbnail(currLink)\"></ion-input>\r\n                                                  </ng-template>\r\n                                             </div>\r\n                                        </div>\r\n                                   </ion-row>\r\n\r\n                                   <ion-row>\r\n                                        <div class=\"mobileDiv\">\r\n                                             <div class=\"mobileLabel\">Format:</div>                                        \r\n                                             \r\n                                             <div class=\"mobileField\">\r\n                                                  <div *ngIf=\"currLink.IsSubmitted; else editFormat\">{{currLink.Format}}</div>\r\n                                   \r\n                                                  <ng-template #editFormat>\r\n                                                       <ion-select id=\"mobileFormat\" placeholder='Format' name=\"format\" [(ngModel)]=\"currLink.Format\" [required]=true [disabled]=\"currLink.IsSubmitted\">\r\n                                                            <ion-select-option *ngFor=\"let currFormat of dataService.getFormatKeys();trackBy: trackByFn\" [value]=\"currFormat\">\r\n                                                                 {{dataService.formats[currFormat].FormatDisplayName}}\r\n                                                            </ion-select-option>\r\n                                                       </ion-select>\r\n                                                  </ng-template>\r\n                                             </div>\r\n                                        </div>\r\n                                   </ion-row>\r\n\r\n                                   <ion-row>\r\n                                        <div class=\"mobileDiv\">\r\n                                             <div class=\"mobileLabel\">Artist:</div>                                        \r\n                                             \r\n                                             <div class=\"mobileField\">\r\n                                                  <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Artist'); else editArtist\">{{currLink.Fields.Artist.Value}}</div>\r\n                                   \r\n                                                  <ng-template #editArtist>\r\n                                                       <ion-input [(ngModel)]=\"currLink.Fields.Artist.Value\" value=\"currLink.Fields.Artist.Value\"></ion-input>\r\n                                                  </ng-template>\r\n                                             </div>\r\n                                        </div>\r\n                                   </ion-row>\r\n\r\n                                   <ion-row>\r\n                                        <div class=\"mobileDiv\">\r\n                                             <div class=\"mobileLabel\">Album:</div>                                        \r\n                                             \r\n                                             <div class=\"mobileField\">\r\n                                                  <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Album'); else editAlbum\">{{currLink.Fields.Album.Value}}</div>\r\n                                   \r\n                                                  <ng-template #editAlbum>\r\n                                                       <ion-input [(ngModel)]=\"currLink.Fields.Album.Value\" value=\"currLink.Fields.Album.Value\"></ion-input>\r\n                                                  </ng-template>\r\n                                             </div>\r\n                                        </div>\r\n                                   </ion-row>\r\n\r\n                                   <ion-row>\r\n                                        <div class=\"mobileDiv\">\r\n                                             <div class=\"mobileLabel\">Name:</div>                                        \r\n                                             \r\n                                             <div class=\"mobileField\">\r\n                                                  <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Name'); else editName\">{{currLink.Fields.Name.Value}}</div>\r\n                                   \r\n                                                  <ng-template #editName>\r\n                                                       <ion-input [(ngModel)]=\"currLink.Fields.Name.Value\" value=\"currLink.Fields.Name.Value\"></ion-input>\r\n                                                  </ng-template>\r\n                                             </div>\r\n                                        </div>\r\n                                   </ion-row>\r\n\r\n                                   <ion-row>\r\n                                        <div class=\"mobileDiv\">\r\n                                             <div class=\"mobileLabel\">Genre:</div>                                        \r\n                                             \r\n                                             <div class=\"mobileField\">\r\n                                                  <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Genre'); else editGenre\">{{currLink.Fields.Genre.Value}}</div>\r\n                                   \r\n                                                  <ng-template #editGenre>\r\n                                                       <ion-input [(ngModel)]=\"currLink.Fields.Genre.Value\" value=\"currLink.Fields.Genre.Value\"></ion-input>\r\n                                                  </ng-template>\r\n                                             </div>\r\n                                        </div>\r\n                                   </ion-row>\r\n                             \r\n                                   <ion-row>\r\n                                        <div class=\"mobileDiv\">\r\n                                             <div class=\"mobileLabel\">Track Num:</div>                                        \r\n                                             \r\n                                             <div class=\"mobileField\">\r\n                                                  <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'TrackNum'); else editTrackNum\">{{currLink.Fields.TrackNum.Value}}</div>\r\n                                   \r\n                                                  <ng-template #editTrackNum>\r\n                                                       <ion-input type=\"number\" class=\"numberField\" [(ngModel)]=\"currLink.Fields.TrackNum.Value\" value=\"currLink.Fields.TrackNum.Value\"></ion-input>\r\n                                                  </ng-template>\r\n                                             </div>\r\n                                        </div>\r\n                                   </ion-row>   \r\n                             \r\n                                   <ion-row>\r\n                                        <div class=\"mobileDiv\">\r\n                                             <div class=\"mobileLabel\">Year:</div>                                        \r\n                                             \r\n                                             <div class=\"mobileField\">\r\n                                                  <div *ngIf=\"currLink.IsSubmitted || dataService.fieldIsEditable(currLink.Format,'Year'); else editYear\">{{currLink.Fields.Year.Value}}</div>\r\n                                   \r\n                                                  <ng-template #editYear>\r\n                                                       <ion-input type=\"number\" class=\"numberField\" [(ngModel)]=\"currLink.Fields.Year.Value\" value=\"currLink.Fields.Year.Value\"></ion-input>\r\n                                                  </ng-template>\r\n                                             </div>\r\n                                        </div>\r\n                                   </ion-row>\r\n\r\n                                   <ion-button class=\"goButton\" *ngIf=\"dataService.backendURL != null && !currLink.IsSubmitted\" color=\"primary\" (click)=\"goButtonClick(currLink)\">Go</ion-button>\r\n                                   <ion-button color=\"success\" *ngIf=\"currLink.IsFinished && !currLink.IsError && !currLink.DownloadButtonClicked && !currLink.MoveToServerButtonClicked\" (click)=\"downloadButtonClicked(currLink)\">Download</ion-button>\r\n                                   <ion-button color=\"danger\" *ngIf=\"currLink.IsFinished && !currLink.IsError && allowMoveToServer && !currLink.DownloadButtonClicked && !currLink.MoveToServerButtonClicked\" (click)=\"moveFileToServer(currLink)\">Server</ion-button>\r\n                              </ion-grid>\r\n                         </ion-list>\r\n                    </ion-accordion>\r\n               </ion-accordion-group>\r\n          </ng-template>\r\n\r\n          <div id=\"debugging\" *ngIf=\"debuggingCheckboxVisible\">\r\n               <ion-label>Debugging</ion-label><ion-checkbox [(ngModel)]=\"dataService.debugging\"></ion-checkbox>\r\n          </div>\r\n     </ion-card-content>\r\n</ion-card>\r\n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=src_app_y2m_y2m_module_ts-es2015.js.map