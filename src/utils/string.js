'use strict';

// -----------------------------------------
// VARS

// -----------------------------------------
// PRIVATE FUNCTIONS

/**
 * Redo string and makes sure is a string
 * @param   {string} str
 * @return  {string}
 */
var normalize = function (str) {
    str = !!str ? ('' + str).trim() : null;

    if (!str || !str.replace(/ /g, '').length) {
        return;
    }

    return str;
};

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Dashizes string
 * @param   {string} str
 * @return  {string}
 */
var dashize = function (str) {
    str = normalize(str);

    if (!str) {
        return str;
    }

    return str.toLowerCase().replace(/ /g, '-');
};

/**
 * Camel case a string
 * @param  {string} str
 * @param  {boolean} alsoFirst
 * @param  {boolean} dontJoin
 * @return {string}
 */
var camelcase = function (str, alsoFirst, dontJoin) {
    str = normalize(str);

    if (!str) {
        return str;
    }

    // Lower everything and remove hiphenization, underscores and /
    str = str.toLowerCase().replace(/-/g, ' ').replace(/_/g, ' ').replace(/\//g, ' ');

    // Uppercase all
    str = str.replace(/(^|\s)([a-z])/g, (m, p1, p2) => {
        return p1 + p2.toUpperCase();
    });

    // Remove spaces
    if (!dontJoin) {
        str = str.replace(/ /g, '');
    }

    // First shouldn't be camel case
    if (!alsoFirst) {
        str = str[0].toLowerCase() + str.slice(1, str.length);
    }

    // Finally the str
    return str;
};

// -----------------------------------------
// EXPORT

module.exports = {
    normalize: normalize,
    dashize: dashize,
    camelcase: camelcase
};
