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
// { title: '$el', type: 'jQueryElement' }
const getNativeEl = ($el) => {
    const nativeEl = [];

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
// { title: '$els', type: 'array', items: 'jQueryElement' }
const getNativeEls = ($els) => {
    const nativeEls = {};
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
    // Constructor
    // { title: '$el' },
    // { title: 'data', properties: {} }
    constructor($el, data = {}) {
        const $els = data.els || {};
        const nativeEls = getNativeEls($els);
        const nativeEl = getNativeEl($el);

        super(nativeEl, {
            els: nativeEls,
            tmpl: data.tmpl,
            render: data.render,
            comps: data.comps,
            state: data.state
        });

        // Lets cache the base element
        this._$el = $el;
        this._$els = $els;
    }
}
export { Component };
