'use strict';

import cloneDeep from 'lodash/cloneDeep.js';
import merge from 'lodash/merge.js';

const DEFAULTS = {
    el: null,
    els: {},
    comps: {},
    state: {},
    tmpl: null
};

// -----------------------------------------
// Functions

/**
 * Renders
 * @param  {object} comp
 * @param  {object} state
 * @return {string}
 */
const render = (comp, state) => {
    let tmpl = comp.tmpl;

    // Cache the data
    // TODO: Should we check diffs in state?
    comp.state = state || comp.state;

    if (tmpl && typeof tmpl === 'function') {
        tmpl = tmpl(comp, comp.state);
    }

    if (!tmpl || typeof tmpl !== 'string') {
        return null;
    }

    // Maybe there aren't changes
    if (tmpl !== comp.renderedTmpl) {
        // Lets cache tmpl for future usage...
        comp.renderedTmpl = tmpl;

        return tmpl;
    }

    return null;
};

/**
 * Gets comp object
 * @param  {object} data
 * @param  {object} DEFAULTS
 * @return {object}
 */
const getComp = (data = {}, DEFAULTS_COMP = {}) => {
    const defaults = cloneDeep(DEFAULTS_COMP);
    const compData = cloneDeep(data);

    return merge({}, defaults, compData);
};

/**
 * Destroys component
 * @param  {object} comp
 */
const destroy = (comp) => comp;

/**
 * Initializes
 *
 * @param {object} comp
 * @returns {object}
 */
const init = (comp) => comp;

// --------------------------------
// Export

export default {
    init: (el, data = {}) => {
        const comp = getComp(data, DEFAULTS);

        // Merge will mess with elements
        comp.el = el;
        comp.els = data.els || comp.els;
        comp.comps = data.comps || comp.comps;

        return (!el) ? comp : init(comp);
    },
    getComp, render, destroy
};
