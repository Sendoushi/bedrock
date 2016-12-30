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
// { title: 'tmpl', type: 'string|fn' }
const getTmplFn = (tmpl) => {
    let tmplFn;

    if (typeof tmpl === 'string') {
        tmplFn = () => typeof tmpl === 'string' ? tmpl : '';
    } else if (typeof tmpl === 'function') {
        tmplFn = tmpl;
    } else {
        throw new Error('Template needs to be a string or a function');
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
// { title: 'el' },
// { title: 'tmpl' },
// { title: 'state', properties: {}, default: {} },
// { title: 'renderedTmpl', type: 'string' }
const render = (el, tmpl, state = {}, renderedTmpl) => {
    const finalTmpl = tmpl(state);

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
// { title: 'el' }
const destroy = (el) => {
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
    // Constructor
    // { title: 'el' },
    // { title: 'data', properties: {
    //     els: { properties: {} },
    //     render: { type: 'boolean' }
    // } }
    constructor(el, data = {}) {
        super({ comps: data.comps, state: data.state });

        // Lets cache stuff
        this._el = el;
        this._els = data.els || this._els || {};
        this._render = data.render || this._render || false;

        this.tmpl = data.tmpl;
    }

    // Template...
    // { title: 'tmpl', type: 'string|fn' }
    set tmpl(tmpl) { this._tmpl = getTmplFn(tmpl); }
    get tmpl() { return this._tmpl; }

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
        // Finally destroy this
        this._render && destroy(this._el);
        super.destroy();

        return this;
    }
}
export { Component };
