"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var animation_1 = require('../animations/animation');
/**
 * @private
 **/
var Transition = (function (_super) {
    __extends(Transition, _super);
    function Transition(opts) {
        _super.call(this, null, {
            renderDelay: opts.renderDelay
        });
    }
    Transition.createTransition = function (enteringView, leavingView, opts) {
        var TransitionClass = TransitionRegistry[opts.animation];
        if (!TransitionClass) {
            // didn't find a transition animation, default to ios-transition
            TransitionClass = TransitionRegistry['ios-transition'];
        }
        return new TransitionClass(enteringView, leavingView, opts);
    };
    Transition.register = function (name, TransitionClass) {
        TransitionRegistry[name] = TransitionClass;
    };
    return Transition;
}(animation_1.Animation));
exports.Transition = Transition;
var TransitionRegistry = {};
