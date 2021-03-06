import { ElementRef, EventEmitter } from 'angular2/core';
/**
 * @name Option
 * @description
 * `ion-option` is a child component of `ion-select`. Similar to the native option element, `ion-option` can take a value and a checked property.
 *
 * @demo /docs/v2/demos/item-sliding/
 */
export declare class Option {
    private _elementRef;
    private _checked;
    private _value;
    /**
     * @input {any} Event to evaluate when option has changed
     */
    select: EventEmitter<any>;
    constructor(_elementRef: ElementRef);
    /**
     * @input {boolean} Whether or not the option is already checked and selected
     */
    checked: any;
    /**
     * @input {any} The value of the option
     */
    value: any;
    /**
     * @private
     */
    text: any;
}
