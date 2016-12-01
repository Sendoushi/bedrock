/* eslint-disable strict */'use strict';/* eslint-enable strict */

// -----------------------------------------
// Functions

/**
 * Loading reducer maker
 * @param  {boolean}  INITIAL_STATE
 * @return {function}
 */
function reducer(INITIAL_STATE) {
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
}

// -----------------------------------------
// Export

module.exports = reducer;
