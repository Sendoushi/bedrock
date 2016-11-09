/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// -----------------------------------------
// VARS / IMPORTS

var $ = require('jquery');

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Is it ie?
 * @return {boolean}
 */
var isIe = function () {
    if (navigator.userAgent.match(/Trident\/7\./)) {
        return true;
    }
};

/**
 * Is edge
 * @return {Boolean}
 */
var isEdge = function () {
    return /Edge\/\d./i.test(navigator.userAgent);
};

/**
 * Is it mobile?
 * @return {boolean}
 */
var isMobile = function () {
    /* eslint-disable max-len */
    if (/Android|Tablet PC|PalmOS|PalmSource|smartphone|GT-P1000|SGH-T849|SHW-M180S|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows CE|Windows Mobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    /* eslint-enable max-len */
};

/**
 * Check if media is...
 * @return {boolean}
 */
var mediaIs = function (target) {
    var body = $(document.body);

    if (target === 'mobile') {
        return body.find('.o-is-mobile').is(':visible');
    } else if (target === 'tablet') {
        return body.find('.o-is-tablet').is(':visible');
    } else if (target === 'desktop') {
        return !(body.find('.o-is-mobile').is(':visible')) &&
               !(body.find('.o-is-tablet').is(':visible'));
    } else if (target === 'over') {
        return body.find('.o-is-over').is(':visible');
    }
};

// -----------------------------------------
// PRIVATE FUNCTIONS

// -----------------------------------------
// EXPORT

module.exports = {
    isIe: isIe,
    isEdge: isEdge,
    isMobile: isMobile,
    mediaIs: mediaIs
};
