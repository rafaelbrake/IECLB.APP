"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var app_1 = require('../app/app');
var config_1 = require('../../config/config');
var keyboard_1 = require('../../util/keyboard');
var util_1 = require('../../util/util');
var nav_controller_1 = require('./nav-controller');
var nav_portal_1 = require('./nav-portal');
var view_controller_1 = require('./view-controller');
/**
 * @name Nav
 * @description
 * _For a quick walkthrough of navigation in Ionic, check out the
 * [Navigation section](../../../../components/#navigation) of the Component
 * docs._
 *
 * Nav is a basic navigation controller component.  As a subclass of NavController
 * you use it to navigate to pages in your app and manipulate the navigation stack.
 * Nav automatically animates transitions between pages for you.
 *
 * For more information on using navigation controllers like Nav or [Tab](../../Tabs/Tab/),
 * take a look at the [NavController API reference](../NavController/).
 *
 * You must set a root page (where page is any [@Page](../../config/Page/)
 * component) to be loaded initially by any Nav you create, using
 * the 'root' property:
 *
 * @usage
 * ```ts
 * import {GettingStartedPage} from 'getting-started';
 * @App({
 *   template: `<ion-nav [root]="rootPage"></ion-nav>`
 * })
 * class MyApp {
 *   constructor(){
 *     this.rootPage = GettingStartedPage;
 *   }
 * }
 * ```
 *
 * <h2 id="back_navigation">Back navigation</h2>
 * If a [page](../NavController/#creating_pages) you navigate to has a [NavBar](../NavBar/),
 * Nav will automatically add a back button to it if there is a page
 * before the one you are navigating to in the navigation stack.
 *
 * Additionally, specifying the `swipeBackEnabled` property will allow you to
 * swipe to go back:
 * ```html
 * <ion-nav swipeBackEnabled="false" [root]="rootPage"></ion-nav>
 * ```
 *
 * Here is a diagram of how Nav animates smoothly between pages:
 *
 * <div class="highlight less-margin">
 *   <pre>
 *                           +-------+
 *                           |  App  |
 *                           +---+---+
 *                           &lt;ion-app&gt;
 *                               |
 *                  +------------+-------------+
 *                  |   Ionic Nav Controller   |
 *                  +------------+-------------+
 *                           &lt;ion-nav&gt;
 *                               |
 *                               |
 *             Page 3  +--------------------+                     LoginPage
 *           Page 2  +--------------------+ |
 *         Page 1  +--------------------+ | |              +--------------------+
 *                 | | Header           |&lt;-----------------|       Login        |
 *                 +--------------------+ | |              +--------------------+
 *                 | | |                | | |              | Username:          |
 *                 | | |                | | |              | Password:          |
 *                 | | |  Page 3 is     | | |              |                    |
 *                 | | |  only content  | | |              |                    |
 *                 | | |                |&lt;-----------------|                    |
 *                 | | |                | | |              |                    |
 *                 | | |                | | |              |                    |
 *                 | +------------------|-+ |              |                    |
 *                 | | Footer           |-|-+              |                    |
 *                 | +------------------|-+                |                    |
 *                 +--------------------+                  +--------------------+
 *
 *           +--------------------+    +--------------------+    +--------------------+
 *           | Header             |    | Content            |    | Content            |
 *           +--------------------+    |                    |    |                    |
 *           | Content            |    |                    |    |                    |
 *           |                    |    |                    |    |                    |
 *           |                    |    |                    |    |                    |
 *           |                    |    |                    |    |                    |
 *           |                    |    |                    |    |                    |
 *           |                    |    |                    |    |                    |
 *           |                    |    |                    |    |                    |
 *           |                    |    |                    |    |                    |
 *           |                    |    +--------------------+    |                    |
 *           |                    |    | Footer             |    |                    |
 *           +--------------------+    +--------------------+    +--------------------+
 *
 *   </pre>
 * </div>
 *
 * @demo /docs/v2/demos/navigation/
 * @see {@link /docs/v2/components#navigation Navigation Component Docs}
 */
var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav(hostNavCtrl, viewCtrl, app, config, keyboard, elementRef, compiler, viewManager, zone, renderer) {
        _super.call(this, hostNavCtrl, app, config, keyboard, elementRef, 'contents', compiler, viewManager, zone, renderer);
        this._hasInit = false;
        if (viewCtrl) {
            // an ion-nav can also act as an ion-page within a parent ion-nav
            // this would happen when an ion-nav nests a child ion-nav.
            viewCtrl.setContent(this);
            viewCtrl.setContentRef(elementRef);
        }
    }
    Object.defineProperty(Nav.prototype, "root", {
        /**
         * @input {Page} The Page component to load as the root page within this nav.
         */
        get: function () {
            return this._root;
        },
        set: function (page) {
            this._root = page;
            if (this._hasInit) {
                this.setRoot(page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav.prototype, "swipeBackEnabled", {
        /**
         * @input {boolean} Whether it's possible to swipe-to-go-back on this nav controller or not.
         */
        get: function () {
            return this._sbEnabled;
        },
        set: function (val) {
            this._sbEnabled = util_1.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Nav.prototype.ngOnInit = function () {
        this._hasInit = true;
        if (this._root) {
            if (typeof this._root !== 'function') {
                throw 'The [root] property in <ion-nav> must be given a reference to a component class from within the constructor.';
            }
            this.push(this._root);
        }
    };
    Object.defineProperty(Nav.prototype, "_navPortal", {
        set: function (val) {
            this.setPortal(val);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.Type)
    ], Nav.prototype, "root", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Nav.prototype, "swipeBackEnabled", null);
    __decorate([
        core_1.ViewChild(nav_portal_1.Portal), 
        __metadata('design:type', nav_portal_1.Portal), 
        __metadata('design:paramtypes', [nav_portal_1.Portal])
    ], Nav.prototype, "_navPortal", null);
    Nav = __decorate([
        core_1.Component({
            selector: 'ion-nav',
            template: '<div #contents></div><div portal></div>',
            directives: [nav_portal_1.Portal]
        }),
        __param(0, core_1.Optional()),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [nav_controller_1.NavController, view_controller_1.ViewController, app_1.IonicApp, config_1.Config, keyboard_1.Keyboard, core_1.ElementRef, core_1.Compiler, core_1.AppViewManager, core_1.NgZone, core_1.Renderer])
    ], Nav);
    return Nav;
}(nav_controller_1.NavController));
exports.Nav = Nav;
