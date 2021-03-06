import { ElementRef, Renderer, TemplateRef, ViewContainerRef } from 'angular2/core';
import { ToolbarBase } from '../toolbar/toolbar';
import { Config } from '../../config/config';
import { IonicApp } from '../app/app';
import { ViewController } from '../nav/view-controller';
/**
 * @name Navbar
 * @description
 * Navbar is a global level toolbar that gets updated every time a page gets
 * loaded. You can pass the navbar an `ion-title`, any number of buttons, a segment, or a searchbar.
 *
 * @usage
 * ```html
 * <ion-navbar *navbar>
 *   <button menuToggle>
 *     <ion-icon name="menu"></ion-icon>
 *   </button>
 *
 *   <ion-title>
 *     Page Title
 *   </ion-title>
 *
 *   <ion-buttons end>
 *     <button (click)="openModal()">
 *       <ion-icon name="options"></ion-icon>
 *     </button>
 *   </ion-buttons>
 * </ion-navbar>
 * ```
 *
 * @demo /docs/v2/demos/navbar/
 * @see {@link ../../toolbar/Toolbar/ Toolbar API Docs}
 */
export declare class Navbar extends ToolbarBase {
    private _app;
    private _renderer;
    private _bbIcon;
    private _bbText;
    private _hidden;
    private _hideBb;
    private _bbRef;
    private _bbtRef;
    private _bgRef;
    /**
     * @input {boolean} whether the back button should be shown or not
     */
    hideBackButton: boolean;
    constructor(_app: IonicApp, viewCtrl: ViewController, elementRef: ElementRef, config: Config, _renderer: Renderer);
    /**
     * @private
     */
    setBackButtonText(text: string): void;
    /**
     * @private
     */
    getBackButtonRef(): ElementRef;
    /**
     * @private
     */
    setBackButtonRef(backButtonElementRef: ElementRef): void;
    /**
     * @private
     */
    getBackButtonTextRef(): ElementRef;
    /**
     * @private
     */
    setBackButtonTextRef(backButtonTextElementRef: ElementRef): void;
    /**
     * @private
     */
    setBackgroundRef(backgrouneElementRef: ElementRef): void;
    /**
     * @private
     */
    getBackgroundRef(): ElementRef;
    /**
     * @private
     */
    didEnter(): void;
    /**
     * @private
     */
    setHidden(isHidden: boolean): void;
}
/**
 * @private
 * Used to find and register headers in a view, and this directive's
 * content will be moved up to the common navbar location, and created
 * using the same context as the view's content area.
*/
export declare class NavbarTemplate {
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef, viewCtrl: ViewController);
}
