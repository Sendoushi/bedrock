/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// --------------------------------
// Vars / Imports

var merge = require('deepmerge');
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

        comp.el.trigger('render', comp);
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

    comp.el.trigger('destroy', comp);
};

/**
 * Gets comp object
 * @param  {object} data
 * @param  {object} DEFAULTS
 * @return {object}
 */
var getComp = function (data, DEFAULTS_COMP) {
    return merge(DEFAULTS_COMP || {}, data || DEFAULTS_COMP, {
        clone: true
    });
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
