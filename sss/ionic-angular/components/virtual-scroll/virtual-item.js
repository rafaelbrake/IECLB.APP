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
var VirtualHeader = (function () {
    function VirtualHeader(templateRef) {
        this.templateRef = templateRef;
    }
    VirtualHeader = __decorate([
        core_1.Directive({ selector: '[virtualHeader]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], VirtualHeader);
    return VirtualHeader;
}());
exports.VirtualHeader = VirtualHeader;
/**
 * @private
 */
var VirtualFooter = (function () {
    function VirtualFooter(templateRef) {
        this.templateRef = templateRef;
    }
    VirtualFooter = __decorate([
        core_1.Directive({ selector: '[virtualFooter]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], VirtualFooter);
    return VirtualFooter;
}());
exports.VirtualFooter = VirtualFooter;
/**
 * @private
 */
var VirtualItem = (function () {
    function VirtualItem(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    VirtualItem = __decorate([
        core_1.Directive({ selector: '[virtualItem]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], VirtualItem);
    return VirtualItem;
}());
exports.VirtualItem = VirtualItem;