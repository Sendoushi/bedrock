/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// --------------------------------
// Vars / Imports

var merge = require('deepmerge');
var diff = require('deep-diff').diff;

// -----------------------------------------
// PRIVATE FUNCTIONS

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Gets new state
 * @param  {*} oldState
 * @param  {*} newState
 * @return {object}
 */
var getNew = function (oldState, newState) {
    var newData = merge(oldState, newState, { clone: true });
    var isDiff = diff(oldState, newData);

    if (!isDiff) { return; }

    // Update data
    return {
        diff: isDiff,
        state: newData
    };
};

// --------------------------------
// Export

module.exports = {
    getNew: getNew
};
