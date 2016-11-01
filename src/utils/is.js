/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// -----------------------------------------
// VARS / IMPORTS

var dom = require('./dom.js');

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
    var isMediaMobile = dom.find(document.body, '.o-is-mobile').is(':visible');
    var isMediaTablet = dom.find(document.body, '.o-is-tablet').is(':visible');
    var isMediaOver = dom.find(document.body, '.o-is-over').is(':visible');
    var isMediaDesktop = !isMediaMobile && !isMediaTablet;

    if (target === 'mobile' && isMediaMobile) {
        return true;
    } else if (target === 'tablet' && isMediaTablet) {
        return true;
    } else if (target === 'desktop' && isMediaDesktop) {
        return true;
    } else if (target === 'over' && isMediaOver) {
        return true;
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
