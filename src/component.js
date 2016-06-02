// -----------------------------------------
// IMPORTS

var deepMixIn = require('mout/object/deepMixIn.js');
var React = require('react');

// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Get closest DOM element up the tree that contains a class, ID, or data attribute
 * @param  {Node} elem The base element
 * @param  {String} selector The class, id, data attribute, or tag to look for
 * @return {Node} Null if no match
 */
var getClosest = function (el, selector) {
    var firstChar = selector.charAt(0);

    // Get closest match
    for ( ; el && el !== document; el = el.parentNode) {
        // If selector is a class
        if (firstChar === '.') {
            if (el.classList.contains(selector.substr(1))) {
                return el;
            }
        }

        // If selector is an ID
        if (firstChar === '#') {
            if (el.id === selector.substr(1)) {
                return el;
            }
        }

        // If selector is a data attribute
        if (firstChar === '[') {
            if (el.hasAttribute(selector.substr(1, selector.length - 2))) {
                return el;
            }
        }

        // If selector is a tag
        if (el.tagName.toLowerCase() === selector) {
            return el;
        }
    }
};

/**
 * Connect store to component
 * @param  {tag} self
 * @param  {object} actions
 * @param  {function} cb
 */
var connect = function (self, actions, cb) {
    // Add for the actions update
    self._unsubscribe = actions.subscribe(function () {
        if (!self._unsubscribe) {
            return;
        }

        // Inform of changes
        cb(actions.getState());
    });
};

/**
 * Disconnect the store from the component
 * @param  {tag} self
 */
var disconnect = function (self) {
    // Unsubscribe
    self._unsubscribe && self._unsubscribe();
    self._unsubscribe = null;
};

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

module.exports = { getClosest, connect, disconnect, cE, tmpl };
