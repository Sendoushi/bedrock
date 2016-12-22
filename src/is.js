// @flow
'use strict';
/* global $, window, document, module, process, navigator */

/* ::
import $ from 'jquery';
import type {Node, Browser, Ie, Edge, Ios, Android, Mobile, Touch, Media, Url} from './_test/is.flow.js';
*/

// -----------------------------------------
// Functions

/**
 * Check if is browser
 * @param  {*} val
 * @return {boolean}
 */
const browser/* :: :Browser */ = () => !!(typeof window !== 'undefined');

/**
 * Check if is node
 * @param  {*} val
 * @return {boolean}
 */
const node/* :: :Node */ = () => !!(typeof module !== 'undefined' && module.exports && typeof process !== 'undefined');

/**
 * Is it ie?
 * @return {boolean}
 */
const ie/* :: :Ie */ = () => !!(browser() && navigator.userAgent.toLowerCase().match(/trident\/7\./));

/**
 * Is edge
 * @return {Boolean}
 */
const edge/* :: :Edge */ = () => !!(browser() && /edge\/\d./i.test(navigator.userAgent.toLowerCase()));

/**
 * Is android
 * @return {Boolean}
 */
const android/* :: :Android */ = () => !!(browser() && navigator.userAgent.toLowerCase().match(/android/));

/**
 * Is ios
 * @return {Boolean}
 */
const ios/* :: :Ios */ = () => !!(browser() && navigator.userAgent.toLowerCase().match(/(ipod|iphone|ipad)/));

/**
 * Is it mobile?
 * @return {boolean}
 */
const mobile/* :: :Mobile */ = () => {
    /* eslint-disable max-len */
    if (browser() && /Android|Tablet PC|PalmOS|PalmSource|smartphone|GT-P1000|SGH-T849|SHW-M180S|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows CE|Windows Mobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    /* eslint-enable max-len */

    return false;
};

/**
 * Check if device is touch
 * @return {boolean}
 */
const touch/* :: :Touch */ = () => {
    if (browser()) {
        return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
    }

    return false;
};

/**
 * Check if media is...
 * @return {boolean}
 */
const media/* :: :Media */ = (target) => {
    if (!browser() || typeof $ === 'undefined' || !target || target.replace(/ /g, '') === '') {
        // TODO: We should try to do without $
        return false;
    }

    const body = $('body');

    if (target === 'mobile') {
        return !!(body.find('> .is-mobile').is(':visible'));
    } else if (target === 'tablet') {
        return !!(body.find('> .is-tablet').is(':visible'));
    } else if (target === 'desktop') {
        return !(body.find('> .is-mobile').is(':visible')) &&
               !(body.find('> .is-tablet').is(':visible'));
    } else if (target === 'over') {
        return !!(body.find('> .is-over').is(':visible'));
    }

    return false;
};

/**
 * Check if url is valid
 *
 * @param {string} urlTest
 * @returns {boolean}
 */
const url/* :: :Url */ = (urlTest) => {
    return !!(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(urlTest));
};

// ------------------------------------
// Export

export default { node, browser, ie, edge, ios, android, mobile, touch, media, url };
