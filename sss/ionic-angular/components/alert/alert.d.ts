import { ViewController } from '../nav/view-controller';
/**
 * @name Alert
 * @description
 * An Alert is a dialog that presents users with information or collects
 * information from the user using inputs. An alert appears on top
 * of the app's content, and must be manually dismissed by the user before
 * they can resume interaction with the app. It can also optionally have a
 * `title`, `subTitle` and `message`.
 *
 * You can pass all of the alert's options in the first argument of
 * the create method: `Alert.create(opts)`. Otherwise the alert's instance
 * has methods to add options, such as `setTitle()` or `addButton()`.
 *
 *
 * ### Alert Buttons
 *
 * In the array of `buttons`, each button includes properties for its `text`,
 * and optionally a `handler`. If a handler returns `false` then the alert
 * will not automatically be dismissed when the button is clicked. All
 * buttons will show  up in the order they have been added to the `buttons`
 * array, from left to right. Note: The right most button (the last one in
 * the array) is the main button.
 *
 * Optionally, a `role` property can be added to a button, such as `cancel`.
 * If a `cancel` role is on one of the buttons, then if the alert is
 * dismissed by tapping the backdrop, then it will fire the handler from
 * the button with a cancel role.
 *
 *
 * ### Alert Inputs
 *
 * Alerts can also include several different inputs whose data can be passed
 * back to the app. Inputs can be used as a simple way to prompt users for
 * information. Radios, checkboxes and text inputs are all accepted, but they
 * cannot be mixed. For example, an alert could have all radio button inputs,
 * or all checkbox inputs, but the same alert cannot mix radio and checkbox
 * inputs. Do note however, different types of "text"" inputs can be mixed,
 * such as `url`, `email`, `text`, etc. If you require a complex form UI
 * which doesn't fit within the guidelines of an alert then we recommend
 * building the form within a modal instead.
 *
 *
 * @usage
 * ```ts
 * constructor(nav: NavController) {
 *   this.nav = nav;
 * }
 *
 * presentAlert() {
 *   let alert = Alert.create({
 *     title: 'Low battery',
 *     subTitle: '10% of battery remaining',
 *     buttons: ['Dismiss']
 *   });
 *   this.nav.present(alert);
 * }
 *
 * presentConfirm() {
 *   let alert = Alert.create({
 *     title: 'Confirm purchase',
 *     message: 'Do you want to buy this book?',
 *     buttons: [
 *       {
 *         text: 'Cancel',
 *         role: 'cancel',
 *         handler: () => {
 *           console.log('Cancel clicked');
 *         }
 *       },
 *       {
 *         text: 'Buy',
 *         handler: () => {
 *           console.log('Buy clicked');
 *         }
 *       }
 *     ]
 *   });
 *   this.nav.present(alert);
 * }
 *
 * presentPrompt() {
 *   let alert = Alert.create({
 *     title: 'Login',
 *     inputs: [
 *       {
 *         name: 'username',
 *         placeholder: 'Username'
 *       },
 *       {
 *         name: 'password',
 *         placeholder: 'Password',
 *         type: 'password'
 *       }
 *     ],
 *     buttons: [
 *       {
 *         text: 'Cancel',
 *         role: 'cancel',
 *         handler: data => {
 *           console.log('Cancel clicked');
 *         }
 *       },
 *       {
 *         text: 'Login',
 *         handler: data => {
 *           if (User.isValid(data.username, data.password)) {
 *             // logged in!
 *           } else {
 *             // invalid login
 *             return false;
 *           }
 *         }
 *       }
 *     ]
 *   });
 *   this.nav.present(alert);
 * }
 * ```
 *
 * @demo /docs/v2/demos/alert/
 */
export declare class Alert extends ViewController {
    constructor(opts?: AlertOptions);
    /**
    * @private
    */
    getTransitionName(direction: string): any;
    /**
     * @param {string} title Alert title
     */
    setTitle(title: string): void;
    /**
     * @param {string} subTitle Alert subtitle
     */
    setSubTitle(subTitle: string): void;
    /**
     * @private
     */
    private setBody(message);
    /**
     * @param {string} message  Alert message content
     */
    setMessage(message: string): void;
    /**
     * @param {object} input Alert input
     */
    addInput(input: AlertInputOptions): void;
    /**
     * @param {any} button Alert button
     */
    addButton(button: any): void;
    /**
     * @param {string} cssClass CSS class name to add to the alert's outer wrapper
     */
    setCssClass(cssClass: string): void;
    /**
     *
     *  Alert options
     *
     *  | Property              | Type      | Description                                                               |
     *  |-----------------------|-----------|---------------------------------------------------------------------------|
     *  | title                 | `string`  | The string for the alert (optional)                                       |
     *  | subTitle              | `string`  | The subtitle for the alert (optional)                                     |
     *  | message               | `string`  | The message for the alert (optional)                                      |
     *  | cssClass              | `string`  | Any additional class for the alert (optional)                             |
     *  | inputs                | `array`   | An array of inputs for the alert. See input options. (optional)           |
     *  | buttons               | `array`   | An array of buttons for the alert. See buttons options. (optional)        |
     *  | enableBackdropDismiss | `boolean` | Wheather the alert should be dismissed by tapping the backdrop (optional) |
     *
     *
     *  Input options
     *
     *  | Property    | Type      | Description                                                     |
     *  |-------------|-----------|-----------------------------------------------------------------|
     *  | type        | `string`  | The type the input should be, text, tel, number, etc (optional) |
     *  | name        | `string`  | The name for the input (optional)                               |
     *  | placeHolder | `string`  | The input's placeholder (optional)                              |
     *  | value       | `string`  | The input's value (optional)                                    |
     *  | label       | `string`  | The input's label (optional)                                    |
     *  | checked     | `boolean` | Whether or not the input is checked or not (optional)           |
     *  | id          | `string`  | The input's id (optional)                                       |
     *
     *  Button options
     *
     *  | Property | Type     | Description                                                    |
     *  |----------|----------|----------------------------------------------------------------|
     *  | text     | `string` | The buttons displayed text                                     |
     *  | handler  | `any`    | Expression that should be evaluated when the button is pressed |
     *  | cssClass | `string` | An additional CSS class for the button                         |
     *  | role     | `string` | The buttons role, null or `cancel`                             |
     *
     * @param {object} opts Alert. See the tabel above
     */
    static create(opts?: AlertOptions): Alert;
}
export interface AlertOptions {
    title?: string;
    subTitle?: string;
    message?: string;
    cssClass?: string;
    inputs?: Array<AlertInputOptions>;
    buttons?: Array<any>;
    enableBackdropDismiss?: boolean;
}
export interface AlertInputOptions {
    type?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    label?: string;
    checked?: boolean;
    id?: string;
}
