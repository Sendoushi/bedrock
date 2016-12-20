/* @flow */
/* :: import type {CompData, FnTmpl, FnGetTmplFn, FnRender, FnDestroy} from './_test/vanilla.flow.js' */
'use strict';

import { Component as Comp } from './common.js';

// -----------------------------------------
// Functions

/**
 * Gets template function
 *
 * @param {string|function} tmpl
 * @returns {function}
 */
const getTmplFn/* :: :FnGetTmplFn*/ = (tmpl) => {
    let tmplFn/* :: :FnTmpl */;

    if (typeof tmpl !== 'function') {
        tmplFn = () => typeof tmpl === 'string' ? tmpl : '';
    } else {
        tmplFn = tmpl;
    }

    return tmplFn;
};
export { getTmplFn };

/**
 * Renders
 * @param  {object} comp
 * @param  {object} state
 * @return {string}
 */
const render/* :: :FnRender*/ = (el, tmpl, state, renderedTmpl) => {
    const finalTmpl/* :: :string */ = tmpl(state);

    // Maybe there aren't changes
    if (finalTmpl !== renderedTmpl || el !== undefined) {
        return finalTmpl;
    }

    // Lets iterate per element
    if (el !== undefined) {
        for (let i = 0; i < el.length; i += 1) {
            el[i].innerHTML = finalTmpl;
        }
    }

    return finalTmpl;
};
export { render };

/**
 * Destroys component
 * @param  {element} el
 */
const destroy/* :: :FnDestroy */ = (el) => {
    // Check el data
    if (el !== undefined && el !== null) {
        // Lets remove the html!
        for (let i = 0; i < el.length; i += 1) {
            el[i].innerHTML = '';
        }
    }
};
export { destroy };

// --------------------------------
// Class

class Component extends Comp {
    // Vars
    /* ::
    _el:?Element[];
    _els:{ [key: string]: ?Element[] };
    _tmpl:FnTmpl;
    _renderedTmpl:?string;
    _render:boolean;
    */

    // Constructor
    constructor(el/* :: :?Element[] */, data/* :: :CompData */ = {}) {
        super({ comps: data.comps, state: data.state });

        // Lets cache stuff
        this._el = el;
        this._els = data.els || this._els || {};
        this._render = data.render || this._render || false;
        this._tmpl = getTmplFn(data.tmpl) || this._tmpl;
    }

    // Render
    render() {
        if (this._render === false) {
            return this;
        }

        // Cache the template
        this._renderedTmpl = render(this._el, this._tmpl, this.state, this._renderedTmpl);

        return this;
    }

    // Destroy
    destroy() {
        // Lets destroy components underneath
        const compsKeys = Object.keys(this._comps);
        for (let i = 0; i < compsKeys.length; i += 1) {
            this._comps[compsKeys[i]].destroy();
        }

        // Finally destroy this
        this._render && destroy(this._el);
        super.destroy();

        return this;
    }
}
export { Component };
