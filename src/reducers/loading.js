/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Loading reducer maker
 * @param  {boolean}  INITIAL_STATE
 * @return {function}
 */
var reducer = function (INITIAL_STATE) {
    INITIAL_STATE = INITIAL_STATE || false;

    // Finally return the reducer
    return function (state, action) {
        var type;
        var diff;

        state = state || INITIAL_STATE;
        action = action || {};

        type = action.type;
        diff = type.replace('_LOADING', '') !== type;

        return diff ? action.loading : state;
    };
};

// -----------------------------------------
// EXPORT

module.exports = reducer;
