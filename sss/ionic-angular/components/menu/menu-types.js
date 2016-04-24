"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var menu_controller_1 = require('./menu-controller');
var animation_1 = require('../../animations/animation');
/**
 * @private
 * Menu Type
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
var MenuType = (function () {
    function MenuType() {
        this.ani = new animation_1.Animation();
    }
    MenuType.prototype.setOpen = function (shouldOpen, done) {
        this.ani
            .onFinish(done, true)
            .reverse(!shouldOpen)
            .play();
    };
    MenuType.prototype.setProgressStart = function (isOpen) {
        this.isOpening = !isOpen;
        // the cloned animation should not use an easing curve during seek
        this.ani
            .reverse(isOpen)
            .progressStart();
    };
    MenuType.prototype.setProgessStep = function (stepValue) {
        // adjust progress value depending if it opening or closing
        this.ani.progressStep(stepValue);
    };
    MenuType.prototype.setProgressEnd = function (shouldComplete, currentStepValue, done) {
        var _this = this;
        var isOpen = (this.isOpening && shouldComplete);
        if (!this.isOpening && !shouldComplete) {
            isOpen = true;
        }
        this.ani.onFinish(function () {
            _this.isOpening = false;
            done(isOpen);
        }, true);
        this.ani.progressEnd(shouldComplete, currentStepValue);
    };
    MenuType.prototype.destroy = function () {
        this.ani && this.ani.destroy();
    };
    return MenuType;
}());
exports.MenuType = MenuType;
/**
 * @private
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
var MenuRevealType = (function (_super) {
    __extends(MenuRevealType, _super);
    function MenuRevealType(menu) {
        _super.call(this);
        var openedX = (menu.width() * (menu.side === 'right' ? -1 : 1)) + 'px';
        this.ani
            .easing('ease')
            .duration(250);
        var contentOpen = new animation_1.Animation(menu.getContentElement());
        contentOpen.fromTo('translateX', '0px', openedX);
        this.ani.add(contentOpen);
    }
    return MenuRevealType;
}(MenuType));
menu_controller_1.MenuController.registerType('reveal', MenuRevealType);
/**
 * @private
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
var MenuPushType = (function (_super) {
    __extends(MenuPushType, _super);
    function MenuPushType(menu) {
        _super.call(this);
        this.ani
            .easing('ease')
            .duration(250);
        var contentOpenedX, menuClosedX, menuOpenedX;
        if (menu.side === 'right') {
            contentOpenedX = -menu.width() + 'px';
            menuOpenedX = (menu._platform.width() - menu.width()) + 'px';
            menuClosedX = menu._platform.width() + 'px';
        }
        else {
            contentOpenedX = menu.width() + 'px';
            menuOpenedX = '0px';
            menuClosedX = -menu.width() + 'px';
        }
        var menuAni = new animation_1.Animation(menu.getMenuElement());
        menuAni.fromTo('translateX', menuClosedX, menuOpenedX);
        this.ani.add(menuAni);
        var contentApi = new animation_1.Animation(menu.getContentElement());
        contentApi.fromTo('translateX', '0px', contentOpenedX);
        this.ani.add(contentApi);
    }
    return MenuPushType;
}(MenuType));
menu_controller_1.MenuController.registerType('push', MenuPushType);
/**
 * @private
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
var MenuOverlayType = (function (_super) {
    __extends(MenuOverlayType, _super);
    function MenuOverlayType(menu) {
        _super.call(this);
        this.ani
            .easing('ease')
            .duration(250);
        var closedX, openedX;
        if (menu.side === 'right') {
            // right side
            closedX = menu._platform.width() + 'px';
            openedX = (menu._platform.width() - menu.width() - 8) + 'px';
        }
        else {
            // left side
            closedX = -menu.width() + 'px';
            openedX = '8px';
        }
        var menuAni = new animation_1.Animation(menu.getMenuElement());
        menuAni.fromTo('translateX', closedX, openedX);
        this.ani.add(menuAni);
        var backdropApi = new animation_1.Animation(menu.getBackdropElement());
        backdropApi.fromTo('opacity', 0.01, 0.35);
        this.ani.add(backdropApi);
    }
    return MenuOverlayType;
}(MenuType));
menu_controller_1.MenuController.registerType('overlay', MenuOverlayType);