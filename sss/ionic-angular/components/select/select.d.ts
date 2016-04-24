import { ElementRef, Renderer, EventEmitter } from 'angular2/core';
import { Form } from '../../util/form';
import { Item } from '../item/item';
import { NavController } from '../nav/nav-controller';
/**
 * @name Select
 * @description
 * The `ion-select` component is similar to an HTML `<select>` element, however,
 * Ionic's select component makes it easier for users to sort through and select
 * the preferred option or options. When users tap the select component, a
 * dialog will appear with all of the options in a large, easy to select list
 * for users.
 *
 * Under-the-hood the `ion-select` actually uses the
 * {@link ../../alert/Alert Alert API} to open up the overlay of options
 * which the user is presented with. Select can take numerous child
 * `ion-option` components. If `ion-option` is not given a `value` attribute
 * then it will use its text as the value.
 *
 * ### Single Value: Radio Buttons
 *
 * The standard `ion-select` component allows the user to select only one
 * option. When selecting only one option the alert overlay presents users with
 * a radio button styled list of options. The `ion-select` component's value
 * receives the value of the selected option's value.
 *
 * ```html
 * <ion-item>
 *   <ion-label>Gender</ion-label>
 *   <ion-select [(ngModel)]="gender">
 *     <ion-option value="f" checked="true">Female</ion-option>
 *     <ion-option value="m">Male</ion-option>
 *   </ion-select>
 * </ion-item>
 * ```
 *
 * ### Multiple Value: Checkboxes
 *
 * By adding the `multiple="true"` attribute to `ion-select`, users are able
 * to select multiple options. When multiple options can be selected, the alert
 * overlay presents users with a checkbox styled list of options. The
 * `ion-select multiple="true"` component's value receives an array of all the
 * selected option values. In the example below, because each option is not given
 * a `value`, then it'll use its text as the value instead.
 *
 * ```html
 * <ion-item>
 *   <ion-label>Toppings</ion-label>
 *   <ion-select [(ngModel)]="toppings" multiple="true">
 *     <ion-option>Bacon</ion-option>
 *     <ion-option>Black Olives</ion-option>
 *     <ion-option>Extra Cheese</ion-option>
 *     <ion-option>Mushrooms</ion-option>
 *     <ion-option>Pepperoni</ion-option>
 *     <ion-option>Sausage</ion-option>
 *   </ion-select>
 * <ion-item>
 * ```
 *
 * ### Alert Buttons
 * By default, the two buttons read `Cancel` and `OK`. The each button's text
 * can be customized using the `cancelText` and `okText` attributes:
 *
 * ```html
 * <ion-select okText="Okay" cancelText="Dismiss">
 *   ...
 * </ion-select>
 * ```
 *
 * ### Alert Options
 *
 * Remember how `ion-select` is really just a wrapper to `Alert`? By using
 * the `alertOptions` property you can pass custom options to the alert
 * overlay. This would be useful if there is a custom alert title,
 * subtitle or message. {@link ../../alert/Alert Alert API}
 *
 * ```html
 * <ion-select [alertOptions]="alertOptions">
 *   ...
 * </ion-select>
 * ```
 *
 * ```ts
 * this.alertOptions = {
 *   title: 'Pizza Toppings',
 *   subTitle: 'Select your toppings'
 * };
 * ```
 *
 * @demo /docs/v2/demos/select/
 */
export declare class Select {
    private _form;
    private _elementRef;
    private _renderer;
    private _item;
    private _nav;
    private _disabled;
    private _labelId;
    private _multi;
    private _options;
    private _values;
    private _texts;
    private _text;
    private _fn;
    private _isOpen;
    /**
     * @private
     */
    id: string;
    /**
     * @private
     * @input {string}  The text of the cancel button. Defatuls to `Cancel`
     */
    cancelText: string;
    /**
     * @private
     * @input {string} The text of the ok button. Defatuls to `OK`
     */
    okText: string;
    /**
     * @private
     * @input {any} Any addition options that an alert can take. Title, Subtitle, etc.
     */
    alertOptions: any;
    /**
     * @private
     */
    checked: any;
    /**
     * @output {any} Any expression you want to evaluate when the selection has changed
     */
    change: EventEmitter<any>;
    /**
     * @output {any} Any expression you want to evaluate when the selection was cancelled
     */
    cancel: EventEmitter<any>;
    constructor(_form: Form, _elementRef: ElementRef, _renderer: Renderer, _item: Item, _nav: NavController);
    private _click(ev);
    private _keyup(ev);
    private _open();
    /**
     * @input {boolean} Whether or not the select component can accept multipl selections
     */
    multiple: any;
    /**
     * @private
     */
    text: string[] | string;
    /**
     * @private
     */
    private options;
    /**
     * @private
     */
    private _updOpts();
    /**
     * @input {boolean} Whether or not the select component is disabled or not
     */
    disabled: any;
    /**
     * @private
     */
    writeValue(val: any): void;
    /**
     * @private
     */
    ngAfterContentInit(): void;
    /**
     * @private
     */
    registerOnChange(fn: Function): void;
    /**
     * @private
     */
    registerOnTouched(fn: any): void;
    /**
     * @private
     */
    onChange(val: any): void;
    /**
     * @private
     */
    onTouched(): void;
    /**
     * @private
     */
    ngOnDestroy(): void;
}
