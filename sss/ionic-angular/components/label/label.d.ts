import { ElementRef, Renderer } from 'angular2/core';
/**
 * @name Label
 * @description
 * Labels are placed inside of an `ion-item` element and can be used
 * to describe an `ion-input`, `ion-toggle`, `ion-checkbox`, and more.
 *
 * @property [fixed] - a persistant label that sits next the the input
 * @property [floating] - a label that will float about the input if the input is empty of looses focus
 * @property [stacked] - A stacked label will always appear on top of the input

 *
 * @usage
 * ```html
 *  <ion-item>
 *    <ion-label>Username</ion-label>
 *    <ion-input></ion-input>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label fixed>Website</ion-label>
 *    <ion-input type="url"></ion-input>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label floating>Email</ion-label>
 *    <ion-input type="email"></ion-input>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label stacked>Phone</ion-label>
 *    <ion-input type="tel"></ion-input>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label>Toggle</ion-label>
 *    <ion-toggle></ion-toggle>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label>Checkbox</ion-label>
 *    <ion-checkbox></ion-checkbox>
 *  </ion-item>
 * ```
 *
 * @demo /docs/v2/demos/label/
 * @see {@link ../../../../components#inputs Input Component Docs}
 * @see {@link ../Input Input API Docs}
 *
 */
export declare class Label {
    private _elementRef;
    private _renderer;
    private _id;
    /**
     * @private
     */
    type: string;
    constructor(_elementRef: ElementRef, _renderer: Renderer, isFloating: string, isStacked: string, isFixed: string, isInset: string);
    /**
     * @private
     */
    id: string;
    /**
     * @private
     */
    text: string;
    /**
     * @private
     * @param {string} add class name
     */
    addClass(className: string): void;
}
