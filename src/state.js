/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// --------------------------------
// Vars / Imports

var deepMixIn = require('mout/object/deepMixIn.js');
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
    var newData = deepMixIn({}, oldState, newState);
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
