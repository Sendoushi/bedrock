/* @flow */
/* :: import type {CompData, FnGetNativeEl, FnGetNativeEls} from './_test/jquery.flow.js' */
'use strict';

import { Component as Comp } from './vanilla.js';

// -----------------------------------------
// Functions

/**
 * Gets native el
 *
 * @param {element} $el
 * @returns {arr|undefined}
 */
const getNativeEl/* :: :FnGetNativeEl */ = ($el) => {
    const nativeEl/* :: :Element[] */ = [];

    // Lets get the basic native el elements
    if ($el !== undefined && $el !== null) {
        for (let i = 0; i < $el.length; i += 1) {
            nativeEl.push($el[i]);
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
 * @param {object} $els
 * @returns {object}
 */
const getNativeEls/* :: :FnGetNativeEls */ = ($els) => {
    const nativeEls/* :: :{ [key: string]: ?Element[] } */ = {};
    const keys = Object.keys($els);

    // Lets get the basic native els elements
    for (let c = 0; c < keys.length; c += 1) {
        nativeEls[keys[c]] = getNativeEl($els[keys[c]]);
    }

    return nativeEls;
};

// --------------------------------
// Class

class Component extends Comp {
    // Vars
    /* ::
    _$el:?jQueryElement;
    _$els:{ [key: string]: ?jQueryElement };
    */

    // Constructor
    constructor($el/* :: :?jQueryElement */, data/* :: :CompData */ = {}) {
        const $els = data.els || {};
        const nativeEls = getNativeEls($els);
        const nativeEl = getNativeEl($el);

        super(nativeEl, {
            els: nativeEls,
            tmpl: data.tmpl,
            noRender: data.noRender,
            comps: data.comps,
            state: data.state
        });

        // Lets cache the base element
        this._$el = $el;
        this._$els = $els;
    }
}
export { Component };
