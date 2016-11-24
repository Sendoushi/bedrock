/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// --------------------------------
// Vars / Imports

var deepMixIn = require('mout/object/deepMixIn.js');
var DEFAULTS = {
    el: null,
    parent: null,
    els: {},
    comps: {},
    tmpl: null
};

// -----------------------------------------
// PRIVATE FUNCTIONS

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Renders
 * @param  {object} comp
 * @param  {object} data
 * @return {object}
 */
var render = function (comp, data) {
    var tmpl = comp.tmpl;

    // Cache the data
    comp.renderedData = data || comp.renderedData;

    if (tmpl && typeof tmpl === 'function') {
        tmpl = tmpl(comp, comp.renderedData);
    }

    if (!tmpl || typeof tmpl !== 'string') {
        return comp;
    }

    // Lets set now!
    if (comp.el) {
        if (tmpl !== comp.renderedTmpl) {
            comp.el.html(tmpl);
        }
    }

    // Lets cache tmpl for future usage...
    comp.renderedTmpl = tmpl;

    return comp;
};

/**
 * Destroys component
 * @param  {object} comp
 */
var destroy = function (comp) {
    if (!comp.el) {
        return comp;
    }

    // Lets inform!
    if (comp.tmpl) {
        comp.el.empty();
    }
};

/**
 * Gets comp object
 * @param  {object} data
 * @param  {object} DEFAULTS
 * @return {object}
 */
var getComp = function (data, DEFAULTS_COMP) {
    return deepMixIn({}, DEFAULTS_COMP || {}, data || DEFAULTS_COMP);
};

/**
 * Initializes
 * @param  {object} comp
 * @return {object}
 */
var init = function (comp) {
    return comp;
};

// --------------------------------
// Export

module.exports = {
    init: function (el, data) {
        var comp = getComp(data, DEFAULTS);

        // Merge will mess with elements
        comp.el = el;

        return init(comp);
    },
    getComp: getComp,
    render: render,
    destroy: destroy
};
