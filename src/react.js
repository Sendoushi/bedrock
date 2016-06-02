// -----------------------------------------
// IMPORTS

var deepMixIn = require('mout/object/deepMixIn.js');
var React = require('react');

// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Middleware for create element
 * @param  {string} el
 * @param  {object} data
 * @param  {array} children
 * @return {React}
 */
var cE = function (el, data, children) {
    data = data || {};
    children = children || [];

    // Initialize vars
    var classList;
    var elChilds;
    var obj;

    // Take care of children
    elChilds = data.elChilds || [];
    if (children && children.length) {
        elChilds = elChilds.concat(children);
    }

    if (typeof el === 'string') {
        // Set class names
        classList = el.split('.');
        el = classList.shift(); // Removes element
    }

    obj = deepMixIn({}, data, {
        className: classList && classList.join(' '),
        elChilds: null
    })

    // TODO: What about elChilds spread into ES5?
    return React.createElement(el, obj, ...elChilds);
};

/**
 * Templates a string into react
 * @param  {string} template
 * @param  {object} data
 * @return {React}
 */
var tmpl = function (template, data) {
    // TODO: Parser!
    // return cE();
};

// -----------------------------------------
// EXPORT

module.exports = { cE, tmpl };
