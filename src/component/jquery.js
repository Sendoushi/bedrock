'use strict';

import common from './common.js';

const DEFAULTS = {
    el: null,
    tmpl: null
};

// -----------------------------------------
// Functions

/**
 * Renders
 * @param  {object} comp
 * @param  {object} state
 * @return {object}
 */
const render = (comp, state) => {
    const tmpl = common.render(comp.tmpl, state);

    // Maybe there weren't any changes
    if (!tmpl || typeof tmpl !== 'string') {
        return comp;
    }

    // Lets set now!
    comp.el && tmpl && comp.el.html(tmpl);

    return comp;
};

/**
 * Destroys component
 * @param  {object} comp
 * @returns {object}
 */
const destroy = (comp) => {
    common.destroy(comp);

    // Lets inform!
    comp.tmpl && comp.el && comp.el.empty();

    return comp;
};

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
    init: (el, data) => {
        let comp = common.getComp(data, DEFAULTS);
        comp = common.init(el, comp);

        return (!el || !el.length) ? comp : init(comp);
    },
    getComp: common.getComp,
    render, destroy
};
