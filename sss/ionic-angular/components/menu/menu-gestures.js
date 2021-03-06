"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var slide_edge_gesture_1 = require('../../gestures/slide-edge-gesture');
var util_1 = require('../../util/util');
/**
 * Gesture attached to the content which the menu is assigned to
 */
var MenuContentGesture = (function (_super) {
    __extends(MenuContentGesture, _super);
    function MenuContentGesture(menu, contentEle, options) {
        if (options === void 0) { options = {}; }
        _super.call(this, contentEle, util_1.assign({
            direction: 'x',
            edge: menu.side,
            threshold: 0,
            maxEdgeStart: menu.maxEdgeStart || 75
        }, options));
        this.menu = menu;
    }
    MenuContentGesture.prototype.canStart = function (ev) {
        var menu = this.menu;
        if (!menu.enabled || !menu.swipeEnabled) {
            void 0;
            return false;
        }
        if (ev.distance > 50) {
            // the distance is longer than you'd expect a side menu swipe to be
            void 0;
            return false;
        }
        void 0;
        if (menu.side === 'right') {
            // right side
            if (menu.isOpen) {
                // right side, opened
                return true;
            }
            else {
                // right side, closed
                if ((ev.angle > 140 && ev.angle <= 180) || (ev.angle > -140 && ev.angle <= -180)) {
                    return _super.prototype.canStart.call(this, ev);
                }
            }
        }
        else {
            // left side
            if (menu.isOpen) {
                // left side, opened
                return true;
            }
            else {
                // left side, closed
                if (ev.angle > -40 && ev.angle < 40) {
                    return _super.prototype.canStart.call(this, ev);
                }
            }
        }
        // didn't pass the test, don't open this menu
        return false;
    };
    // Set CSS, then wait one frame for it to apply before sliding starts
    MenuContentGesture.prototype.onSlideBeforeStart = function (slide, ev) {
        void 0;
        this.menu.swipeStart();
    };
    MenuContentGesture.prototype.onSlide = function (slide, ev) {
        var z = (this.menu.side === 'right' ? slide.min : slide.max);
        var stepValue = (slide.distance / z);
        void 0;
        this.menu.swipeProgress(stepValue);
    };
    MenuContentGesture.prototype.onSlideEnd = function (slide, ev) {
        var z = (this.menu.side === 'right' ? slide.min : slide.max);
        var shouldComplete = (Math.abs(ev.velocityX) > 0.2) ||
            (Math.abs(slide.delta) > Math.abs(z) * 0.5);
        var currentStepValue = (slide.distance / z);
        void 0;
        this.menu.swipeEnd(shouldComplete, currentStepValue);
    };
    MenuContentGesture.prototype.getElementStartPos = function (slide, ev) {
        if (this.menu.side === 'right') {
            // right menu
            return this.menu.isOpen ? slide.min : slide.max;
        }
        // left menu
        return this.menu.isOpen ? slide.max : slide.min;
    };
    MenuContentGesture.prototype.getSlideBoundaries = function () {
        if (this.menu.side === 'right') {
            // right menu
            return {
                min: -this.menu.width(),
                max: 0
            };
        }
        // left menu
        return {
            min: 0,
            max: this.menu.width()
        };
    };
    return MenuContentGesture;
}(slide_edge_gesture_1.SlideEdgeGesture));
exports.MenuContentGesture = MenuContentGesture;
/**
 * Gesture attached to the actual menu itself
 */
var MenuTargetGesture = (function (_super) {
    __extends(MenuTargetGesture, _super);
    function MenuTargetGesture(menu, menuEle) {
        _super.call(this, menu, menuEle, {
            maxEdgeStart: 0
        });
    }
    return MenuTargetGesture;
}(MenuContentGesture));
exports.MenuTargetGesture = MenuTargetGesture;
