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
/**
 * @private
 */
var Form = (function () {
    function Form() {
        this._focused = null;
        this._ids = -1;
        this._inputs = [];
        this.focusCtrl(document);
    }
    Form.prototype.register = function (input) {
        this._inputs.push(input);
    };
    Form.prototype.deregister = function (input) {
        var index = this._inputs.indexOf(input);
        if (index > -1) {
            this._inputs.splice(index, 1);
        }
        if (input === this._focused) {
            this._focused = null;
        }
    };
    Form.prototype.focusCtrl = function (document) {
        // raw DOM fun
        var focusCtrl = document.createElement('focus-ctrl');
        focusCtrl.setAttribute('aria-hidden', true);
        this._blur = document.createElement('button');
        this._blur.tabIndex = -1;
        focusCtrl.appendChild(this._blur);
        document.body.appendChild(focusCtrl);
    };
    Form.prototype.focusOut = function () {
        void 0;
        var activeElement = document.activeElement;
        if (activeElement) {
            activeElement.blur();
        }
        this._blur.focus();
    };
    Form.prototype.setAsFocused = function (input) {
        this._focused = input;
    };
    /**
     * Focuses the next input element, if it exists.
     */
    Form.prototype.tabFocus = function (currentInput) {
        var index = this._inputs.indexOf(currentInput);
        if (index > -1 && (index + 1) < this._inputs.length) {
            var nextInput = this._inputs[index + 1];
            if (nextInput !== this._focused) {
                void 0;
                return nextInput.initFocus();
            }
        }
        index = this._inputs.indexOf(this._focused);
        if (index > 0) {
            var previousInput = this._inputs[index - 1];
            if (previousInput) {
                void 0;
                previousInput.initFocus();
            }
        }
    };
    Form.prototype.nextId = function () {
        return ++this._ids;
    };
    Form = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Form);
    return Form;
}());
exports.Form = Form;
