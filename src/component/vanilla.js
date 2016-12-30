// 'use strict';

import { compileSchema, getSchema } from 'bedrock-utils/src/validate.js';
import { Component as Comp } from './common.js';

// // -----------------------------------------
// // Functions

/**
 * Gets template function
 *
 * @param {string|function} tmpl
 * @returns {function}
 */
// const getTmplFnValidate = compileSchema(getSchema([
//     { title: 'tmpl' }
// ]));
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
const renderValidate = compileSchema(getSchema([
    // { title: 'el' },
    // { title: 'tmpl' },
    { title: 'state', properties: {} },
    { title: 'renderedTmpl', type: 'string' }
]));
const render = (el, tmpl, state = {}, renderedTmpl) => {
    renderValidate([state, renderedTmpl]);

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
// const renderValidate = compileSchema(getSchema([
//     { title: 'el' }
// ]));
const destroy = (el) => {
    // destroyValidate([el]);

    // Check el data
    if (el !== undefined && el !== null) {
        // Lets remove the html!
        for (let i = 0; i < el.length; i += 1) {
            el[i].innerHTML = '';
        }
    }
};
export { destroy };

// // --------------------------------
// // Class

const constructorValidate = compileSchema(getSchema([
    // { title: 'el' },
    { title: 'data', properties: {
        els: { properties: {} },
        render: { type: 'boolean' }
    } }
]));
// const setTmplValidate = compileSchema(getSchema([
//     { title: 'tmpl' }
// ]));

class Component extends Comp {
    // Constructor
    constructor(el, data = {}) {
        constructorValidate([data]);

        super({ comps: data.comps, state: data.state });

        // Lets cache stuff
        this._el = el;
        this._els = data.els || this._els || {};
        this._render = data.render || this._render || false;

        this.tmpl = data.tmpl;
    }

    // Template...
    set tmpl(tmpl) {
        // setTmplValidate([tmpl]);
        this._tmpl = getTmplFn(tmpl);
    }

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
