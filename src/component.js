/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// --------------------------------
// Vars / Imports

var merge = require('deepmerge');
var dom = require('./utils/dom.js');

var DEFAULTS = {
    el: null,
    parent: document.body,
    tmpl: null,

    // Set of callbacks
    init: function () {}
};

// -----------------------------------------
// PRIVATE FUNCTIONS

/**
 * Check if dom is ready
 * @param  {Function} cb
 */
var isDomReady = function (cb) {
    var isReady;

    // Wait for the document to be ready
    isReady = document.readyState === 'complete';
    isReady = isReady || (document.readyState !== 'loading' && !document.documentElement.doScroll);
    if (isReady) {
        cb();
    } else {
        document.addEventListener('DOMContentLoaded', cb);
    }
};

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Renders
 * @param  {object} comp
 * @param  {object} data
 */
var render = function (comp, data) {
    var tmpl = comp.tmpl;

    // Cache the data
    comp.data = data;

    if (tmpl && typeof tmpl === 'function') {
        tmpl = tmpl(comp, data);
    }

    if (!tmpl || typeof tmpl !== 'string') {
        return;
    }

    // Lets set now!
    dom.html(comp.el, tmpl);
};

/**
 * Initializes
 * @param  {object} comp
 */
var init = function (comp) {
    var parent = comp.parent;
    var classList = (parent === document.body) ? document.body.classList : null;

    // Remove class no-script
    classList && classList.remove('no-script');

    // Lets try and find the element
    if (typeof comp.el === 'string') {
        comp.selector = comp.el;
        comp.el = dom.find(parent, comp.selector);
    } else if (!!comp.el) {
        comp.selector = null; // TODO: Maybe get the attributes?
    }

    // Do after init
    comp.init(comp);
};

// --------------------------------
// Export

module.exports = {
    init: function (data) {
        var comp = merge(DEFAULTS, data, { clone: true });

        // Wait for document to be ready and go on!
        isDomReady(init.bind(null, comp));
    },
    render: render
};

/*
// Usage
var component = require('bedrock/component.js');
var doT = require('dot');
var tmpl = doT.template('<div></div>');
var compConfig = {
    el: '.foo', // Pass a parent if string (performance wise), otherwise pass just an element
    parent: document.body, // Default is this one. Needed to find el selector
    tmpl: function (comp, data) { return tmpl(data); }, // String accepted. It is optional
    init: function (comp) {
        // It won't happen if you don't use template ability
        component.render(comp);

        // Set components
        // Set events
    }
};
component.init(compConfig);
*/
