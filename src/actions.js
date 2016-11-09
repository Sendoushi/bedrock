/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// --------------------------------
// Vars / Imports

// -----------------------------------------
// PRIVATE FUNCTIONS

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Initializes actions with a store
 * @param  {*} store
 * @param  {object} actions
 * @return {object}
 */
var init = function (store, actions) {
    var keys = Object.keys(actions);
    var newActions = {};
    var i;

    for (i = 0; i < keys.length; i += 1) {
        newActions[keys[i]] = actions[keys[i]](store);
    }

    return newActions;
};

// --------------------------------
// Export

module.exports = {
    init: init
};
