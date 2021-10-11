'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

exports.NotificationVisibility = void 0;
(function (NotificationVisibility) {
    NotificationVisibility[NotificationVisibility["Visible"] = 0] = "Visible";
    NotificationVisibility[NotificationVisibility["VisibleNotifyCompleted"] = 1] = "VisibleNotifyCompleted";
    NotificationVisibility[NotificationVisibility["VisibilityHidden"] = 2] = "VisibilityHidden";
    NotificationVisibility[NotificationVisibility["VisibleNotifyOnlyCompletion"] = 3] = "VisibleNotifyOnlyCompletion";
})(exports.NotificationVisibility || (exports.NotificationVisibility = {}));
var Downloader = /** @class */ (function (_super) {
    tslib.__extends(Downloader, _super);
    function Downloader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Downloader.prototype.download = function (request) { return core.cordova(this, "download", {}, arguments); };
    Downloader.pluginName = "Downloader";
    Downloader.plugin = "integrator-cordova-plugin-downloader";
    Downloader.pluginRef = "cordova.plugins.Downloader";
    Downloader.repo = "https://github.com/Luka313/integrator-cordova-plugin-downloader.git";
    Downloader.platforms = ["Android"];
    Downloader.decorators = [
        { type: core$1.Injectable }
    ];
    return Downloader;
}(core.IonicNativePlugin));

exports.Downloader = Downloader;
