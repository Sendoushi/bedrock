/* @flow */
/* :: import type {Comp, NativeEl} from './_test/common.flow.js' */
/* :: import type {
    jQueryComp,
    FnRender, FnDestroy, FnInit, FnGetComp
} from './_test/jquery.flow.js' */
'use strict';

import cloneDeep from 'lodash/cloneDeep.js';
import common from './common.js';

const DEFAULTS = {};

// -----------------------------------------
// Functions

/**
 * Gets native el
 *
 * @param {element} el
 * @returns {arr|undefined}
 */
const getNativeEl/* :: :FnGetNativeEl */ = (el) => {
    const nativeEl/* :: :NativeEl */ = [];

    // Lets get the basic native el elements
    if (el !== undefined) {
        for (let i = 0; i < el.length; i += 1) {
            nativeEl.push(el[i]);
        }
    }

    if (nativeEl.length) {
        return nativeEl;
    }

    return undefined;
};

/**
 * Gets native el from object
 *
 * @param {object} els
 * @returns {object}
 */
const getNativeEls/* :: :FnGetNativeEls */ = (els) => {
    const nativeEls/* :: :NativeEls */ = {};
    const keys = Object.keys(els);

    // Lets get the basic native els elements
    for (let c = 0; c < keys.length; c += 1) {
        nativeEls[keys[c]] = getNativeEl(els[keys[c]]);
    }

    return nativeEls;
};

/**
 * Get super comp
 *
 * @param {object} comp
 * @returns {object}
 */
const getSuperComp/* :: :FnGetSuperComp */ = (comp) => {
    const compClone/* :: :jQueryComp|Comp */ = cloneDeep(comp);

    compClone.el = getNativeEl(comp.el);
    compClone.els = getNativeEls(comp.els);

    const newComp/* :: :Comp */ = common.init(comp.el, compClone);

    // Cache it for possible later use
    comp.superComp = newComp;

    return newComp;
};

/**
 * Renders
 * @param  {object} comp
 * @param  {object} state
 * @return {object}
 */
const render/* :: :FnRender */ = (comp, state) => common.render(getSuperComp(comp), state);

/**
 * Destroys component
 * @param  {object} comp
 * @returns {object}
 */
const destroy/* :: :FnDestroy */ = (comp) => common.destroy(getSuperComp(comp));

/**
 * Initializes
 *
 * @param {object} comp
 * @returns {object}
 */
const init/* :: :FnInit */ = (comp) => comp;

// --------------------------------
// Export

export default {
    init: (el/* :: :jQueryEl */, data) => {
        const nativeEl/* :: :NativeEl */ = getNativeEl(el);
        const comp/* :: :jQueryComp|Comp */ = common.getComp(data, DEFAULTS);

        // Super ...
        getSuperComp(common.init(nativeEl, comp));

        return (!el || !el.length) ? comp : init(comp);
    },
    getComp: common.getComp,
    render, destroy
};
