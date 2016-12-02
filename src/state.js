/* eslint-disable strict */'use strict';/* eslint-enable strict */

var deepClone = require('mout/lang/deepClone.js');
var deepMixIn = require('mout/object/deepMixIn.js');
var diff = require('deep-diff').diff;

// -----------------------------------------
// Functions

/**
 * Gets new state
 * @param  {*} oldState
 * @param  {*} newState
 * @return {object}
 */
function getNew(oldState, newState) {
    var newData = deepMixIn({}, deepClone(oldState), deepClone(newState));
    var isDiff = diff(oldState, newData);

    // Update data
    return {
        diff: !!isDiff ? isDiff : false,
        state: newData
    };
}

// --------------------------------
// Export

module.exports = {
    getNew: getNew
};
