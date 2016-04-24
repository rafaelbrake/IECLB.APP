import { Config } from '../../config/config';
import { Refresher } from './refresher';
/**
 * @private
 */
export declare class RefresherContent {
    private r;
    private _config;
    /**
     * @input {string} a static icon to display when you begin to pull down
     */
    pullingIcon: string;
    /**
     * @input {string} the text you want to display when you begin to pull down
     */
    pullingText: string;
    /**
     * @input {string} An animated SVG spinner that shows when refreshing begins
     */
    refreshingSpinner: string;
    /**
     * @input {string} the text you want to display when performing a refresh
     */
    refreshingText: string;
    constructor(r: Refresher, _config: Config);
    /**
     * @private
     */
    ngOnInit(): void;
}
