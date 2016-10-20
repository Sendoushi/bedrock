/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// -----------------------------------------
// VARS / IMPORTS

var $ = window.jQuery || window.$ || window.jquery;

// -----------------------------------------
// PRIVATE FUNCTIONS

/**
 * Is the selector provided an id
 * @param  {string} selector
 * @return {Boolean}
 */
var isSelectorId = function (selector) {
    var firstChar = selector.charAt(0);
    return firstChar === '#';
};

/**
 * Is the selector provided a class
 * @param  {string} selector
 * @return {Boolean}
 */
var isSelectorClass = function (selector) {
    var firstChar = selector.charAt(0);
    return firstChar === '.';
};

/**
 * Is the selector provided a data attribute
 * @param  {string} selector
 * @return {Boolean}
 */
var isSelectorDataAttr = function (selector) {
    var firstChar = selector.charAt(0);
    return firstChar === '[';
};

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Get children
 * @param  {element} parent
 * @param  {boolean} forceNonJquery
 * @return {element|jQuery}
 */
var children = function (parent, forceNonJquery) {
    if (!parent) {
        return;
    }

    // Jquery is preferred
    if ($ && !forceNonJquery) {
        return !!parent.jquery ? parent.children() : $(parent).children();
    }

    return parent.children;
};

/**
 * Find element
 * @param  {element} parent
 * @param  {string} selector
 * @param  {boolean} forceNonJquery
 * @return {element|jQuery}
 */
var find = function (parent, selector, forceNonJquery) {
    if (!parent) {
        return;
    }

    // Jquery is preferred
    if ($ && !forceNonJquery) {
        return !!parent.jquery ? parent.find(selector) : $(parent).find(selector);
    }

    return parent.querySelectorAll(selector);
};

/**
 * Closest element
 * @param  {element} el
 * @param  {string} selector
 * @param  {boolean} forceNonJquery
 * @return {element|jQuery}
 */
var closest = function (el, selector, forceNonJquery) {
    var isDataAttr = isSelectorDataAttr(selector);
    var isClass = isSelectorClass(selector);
    var isId = isSelectorId(selector);

    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($ && !forceNonJquery) {
        return !!el.jquery ? el.closest(selector) : $(el).closest(selector);
    }

    // Get closest match
    for (; el && el !== document; el = el.parentNode) {
        if (isClass && el.classList.contains(selector.substr(1))) {
            // If selector is a class
            return el;
        } else if (isId && el.id === selector.substr(1)) {
            // If selector is an ID
            return el;
        } else if (isDataAttr && el.hasAttribute(selector.substr(1, selector.length - 2))) {
            // If selector is a data attribute
            return el;
        } else if (el.tagName.toLowerCase() === selector) {
            // If selector is a tag
            return el;
        }
    }
};

/**
 * Sets html in element
 * @param  {element} el
 * @param  {string} tmpl
 * @param  {boolean} forceNonJquery
 */
var html = function (el, tmpl, forceNonJquery) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($ && !forceNonJquery) {
        return !!el.jquery ? el.html(tmpl) : $(el).html(tmpl);
    }

    el.innerHTML = tmpl;
};

// -----------------------------------------
// EXPORT

module.exports = {
    find: find,
    closest: closest,
    children: children,
    html: html
};
