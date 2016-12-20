/* @flow */
/* :: import type {
    Comp, Tmpl, NativeEl,
    FnRender, FnDestroy, FnInit, FnGetComp
} from './_test/common.flow.js' */
'use strict';

import cloneDeep from 'lodash/cloneDeep.js';
import merge from 'lodash/merge.js';

const DEFAULTS = {
    el: undefined,
    els: {},
    comps: {},
    state: {},
    noRender: false,
    tmpl: undefined
};

// -----------------------------------------
// Functions

/**
 * Gets comp object
 * @param  {object} data
 * @param  {object} DEFAULTS
 * @return {object}
 */
const getComp/* :: :FnGetComp*/ = (data = {}, DEFAULTS_COMP = DEFAULTS) => {
    const compData = cloneDeep(data);

    // Remove, we'll add it later
    delete compData.els;
    delete compData.comps;

    const comp/* :: :Comp */ = merge({}, cloneDeep(DEFAULTS_COMP), compData);

    comp.els = data.els || comp.els;
    comp.comps = data.comps || comp.comps;

    return comp;
};

/**
 * Renders
 * @param  {object} comp
 * @param  {object} state
 * @return {string}
 */
const render/* :: :FnRender*/ = (comp, state) => {
    let tmpl/* :: :Tmpl */ = comp.tmpl;

    // Cache the data
    // TODO: Should we check diffs in state?
    comp.state = state || comp.state;

    if (tmpl !== undefined && typeof tmpl === 'function') {
        tmpl = tmpl(comp, comp.state);
    }

    // At this stage, the string is needed!
    if (!tmpl || tmpl === undefined || typeof tmpl !== 'string') {
        return comp;
    }

    // Maybe there aren't changes
    if (tmpl !== comp.renderedTmpl) {
        // Lets cache tmpl for future usage...
        comp.renderedTmpl = tmpl;

        // Lets iterate per element
        if (comp.el !== undefined) {
            for (let i = 0; i < comp.el.length; i += 1) {
                comp.el[i].innerHTML = tmpl;
            }
        }
    }

    return comp;
};

/**
 * Destroys component
 * @param  {object} comp
 */
const destroy/* :: :FnDestroy */ = (comp) => {
    // Check el data
    if (comp.el !== undefined && comp.tmpl !== undefined) {
        // Lets remove the html!
        for (let i = 0; i < comp.el.length; i += 1) {
            comp.el[i].innerHTML = '';
        }
    }

    return comp;
};

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
    init: (el/* :: :NativeEl */, data/* :: :Object */ = {}) => {
        const comp/* :: :Comp */ = getComp(data);
        comp.el = el;

        return (!el || !el.length) ? comp : init(comp);
    },
    getComp,
    render, destroy
};
