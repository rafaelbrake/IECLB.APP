"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var config_1 = require('../../config/config');
var click_block_1 = require('../../util/click-block');
/**
 * App utility service.  Allows you to look up components that have been
 * registered using the [Id directive](../Id/).
 */
var IonicApp = (function () {
    function IonicApp(_config, _clickBlock, _zone) {
        this._config = _config;
        this._clickBlock = _clickBlock;
        this._zone = _zone;
        this._cmps = {};
        this._disTime = 0;
        this._scrollTime = 0;
        this._title = '';
        this._titleSrv = new browser_1.Title();
        this._isProd = false;
    }
    /**
     * Sets the document title.
     * @param {string} val  Value to set the document title to.
     */
    IonicApp.prototype.setTitle = function (val) {
        if (val !== this._title) {
            this._title = val;
            this._titleSrv.setTitle(val);
        }
    };
    /**
     * Returns if the app has been set to be in be in production mode or not.
     * Production mode can only be set within the config of `@App`. Defaults
     * to `false`.
     * @return {boolean}
     */
    IonicApp.prototype.isProd = function () {
        return this._isProd;
    };
    /**
     * @private
     */
    IonicApp.prototype.setProd = function (val) {
        this._isProd = !!val;
    };
    /**
     * @private
     * Sets if the app is currently enabled or not, meaning if it's
     * available to accept new user commands. For example, this is set to `false`
     * while views transition, a modal slides up, an action-sheet
     * slides up, etc. After the transition completes it is set back to `true`.
     * @param {boolean} isEnabled
     * @param {boolean} fallback  When `isEnabled` is set to `false`, this argument
     * is used to set the maximum number of milliseconds that app will wait until
     * it will automatically enable the app again. It's basically a fallback incase
     * something goes wrong during a transition and the app wasn't re-enabled correctly.
     */
    IonicApp.prototype.setEnabled = function (isEnabled, duration) {
        if (duration === void 0) { duration = 700; }
        this._disTime = (isEnabled ? 0 : Date.now() + duration);
        if (duration > 32 || isEnabled) {
            // only do a click block if the duration is longer than XXms
            this._clickBlock.show(!isEnabled, duration + 64);
        }
    };
    /**
     * @private
     * Boolean if the app is actively enabled or not.
     * @return {boolean}
     */
    IonicApp.prototype.isEnabled = function () {
        return (this._disTime < Date.now());
    };
    /**
     * @private
     */
    IonicApp.prototype.setScrolling = function () {
        this._scrollTime = Date.now();
    };
    /**
     * Boolean if the app is actively scrolling or not.
     * @return {boolean}
     */
    IonicApp.prototype.isScrolling = function () {
        return (this._scrollTime + 64 > Date.now());
    };
    /**
     * @private
     * Register a known component with a key, for easy lookups later.
     * @param {string} id  The id to use to register the component
     * @param {object} component  The component to register
     */
    IonicApp.prototype.register = function (id, component) {
        this._cmps[id] = component;
    };
    /**
     * @private
     * Unregister a known component with a key.
     * @param {string} id  The id to use to unregister
     */
    IonicApp.prototype.unregister = function (id) {
        delete this._cmps[id];
    };
    /**
     * @private
     * Get a registered component with the given type (returns the first)
     * @param {object} cls the type to search for
     * @return {object} the matching component, or undefined if none was found
     */
    IonicApp.prototype.getRegisteredComponent = function (cls) {
        for (var key in this._cmps) {
            var component = this._cmps[key];
            if (component instanceof cls) {
                return component;
            }
        }
    };
    /**
     * Get the component for the given key.
     */
    IonicApp.prototype.getComponent = function (id) {
        // deprecated warning
        if (/menu/i.test(id)) {
            void 0;
        }
        return this._cmps[id];
    };
    IonicApp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [config_1.Config, click_block_1.ClickBlock, core_1.NgZone])
    ], IonicApp);
    return IonicApp;
}());
exports.IonicApp = IonicApp;
