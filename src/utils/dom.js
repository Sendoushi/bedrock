/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// -----------------------------------------
// VARS / IMPORTS

var $ = window.jQuery || window.$ || window.jquery;

// -----------------------------------------
// PRIVATE FUNCTIONS

/**
 * Get jquery element if it isn't
 * @param  {element} el
 * @return {element}
 */
var get$ = function (el) {
    return !!el.jquery ? el : $(el);
};

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
 * @return {element|jQuery}
 */
var children = function (parent) {
    if (!parent) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(parent).children();
    }

    return parent.children;
};

/**
 * Find element
 * @param  {element} parent
 * @param  {string} selector
 * @return {element|jQuery}
 */
var find = function (parent, selector) {
    if (!parent) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(parent).find(selector);
    }

    return parent.querySelectorAll(selector) || [];
};

/**
 * Closest element
 * @param  {element} el
 * @param  {string} selector
 * @return {element|jQuery}
 */
var closest = function (el, selector) {
    var isDataAttr = isSelectorDataAttr(selector);
    var isClass = isSelectorClass(selector);
    var isId = isSelectorId(selector);

    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).closest(selector);
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
 * @return {string}
 */
var html = function (el, tmpl) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).html(tmpl);
    }

    if (!tmpl) {
        return el.innerHTML;
    }

    el.innerHTML = tmpl;
};

/**
 * Empties element
 * @param  {element} el
 * @return {string}
 */
var empty = function (el) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).empty();
    }

    el.innerHTML = '';
};

/**
 * Sets text in element
 * @param  {element} el
 * @param  {string} tmpl
 * @return {string}
 */
var text = function (el, tmpl) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).text(tmpl);
    }

    if (!tmpl) {
        return el.innerText || el.textContent;
    }

    el.innerText = tmpl;
    el.textContent = tmpl;
};

/**
 * Sets attribute in element
 * @param  {element} el
 * @param  {string} attribute
 * @param  {string} value
 * @return {string}
 */
var attr = function (el, attribute, value) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).attr(attribute, value);
    }

    if (!value) {
        return el.getAttribute(attribute);
    }

    el.setAttribute(attribute, value);
};

/**
 * Find if element has class
 * @param  {element} el
 * @param  {string} selector
 * @return {Boolean}
 */
var hasClass = function (el, selector) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).hasClass(selector);
    }

    return el.classList.contains(selector);
};

/**
 * Filters elements per selector
 * @param  {element} el
 * @param  {string} selector
 * @return {element|jQuery}
 */
var filter = function (el, selector) {
    var items = [];
    var item;
    var i;

    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).filter(selector);
    }

    for (i = 0; i < el.length; i += 1) {
        item = el[i];

        if (item.hasClass(selector)) {
            items.push(item);
        }
    }

    return items;
};

/**
 * Gets parent
 * @param  {element} el
 * @return {element}
 */
var parent = function (el) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).parent();
    }

    return el.parentNode;
};

/**
 * Appends element
 * @param  {element} parentEl
 * @param  {element} el
 */
var append = function (parentEl, el) {
    if (!parentEl) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(parentEl).append(el);
    }

    return parentEl.appendChild(el);
};

/**
 * Adds class
 * @param {element} el
 * @param {string} selector
 */
var addClass = function (el, selector) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).addClass(selector);
    }

    if (el.classList) {
        el.classList.add(selector);
    } else {
        el.className += ' ' + selector;
    }

    return el;
};

/**
 * Removes class
 * @param {element} el
 * @param {string} selector
 */
var removeClass = function (el, selector) {
    var reg;

    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).removeClass(selector);
    }

    if (el.classList) {
        el.classList.remove(selector);
    } else {
        reg = new RegExp('(^|\\b)' + selector.split(' ').join('|') + '(\\b|$)', 'gi');
        el.className = el.className.replace(reg, ' ');
    }

    return el;
};

/**
 * Sets value
 * @param  {element} el
 * @param  {*} value
 * @return {element}
 */
var val = function (el, value) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).val(value);
    }

    // TODO: Not supported yet...
};

/**
 * Wraps
 * @param  {element} el
 * @param  {string} selector
 * @return {element}
 */
var wrap = function (el, selector) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).wrap(selector);
    }

    // TODO: Not supported yet...
};

/**
 * UnWraps
 * @param  {element} el
 * @param  {string} selector
 * @return {element}
 */
var unwrap = function (el, selector) {
    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).unwrap(selector);
    }

    // TODO: Not supported yet...
};

/**
 * Trigger event
 * @param  {element} el
 * @param  {string} event
 * @param  {*} data
 * @return {element}
 */
var trigger = function (el, event, data) {
    var evt;

    if (!el) {
        return;
    }

    // Jquery is preferred
    if ($) {
        return get$(el).trigger(event, data);
    }

    if (window.CustomEvent) {
        evt = new CustomEvent(event, { detail: data });
    } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, true, true, data);
    }

    el.dispatchEvent(evt);
};

// -----------------------------------------
// EXPORT

module.exports = {
    find: find,
    closest: closest,
    children: children,
    empty: empty,
    html: html,
    text: text,
    attr: attr,
    filter: filter,
    hasClass: hasClass,
    parent: parent,
    append: append,
    addClass: addClass,
    removeClass: removeClass,
    val: val,
    wrap: wrap,
    unwrap: unwrap,
    trigger: trigger
};
