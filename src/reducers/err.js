'use strict';

// -----------------------------------------
// Functions

/**
 * Error reducer maker
 * @param  {*}  INITIAL_STATE
 * @return {function}
 */
const reducer = (INITIAL_STATE = false) => (state = INITIAL_STATE, action = {}) => {
    const type = action.type;
    const diff = type.replace('_ERR', '') !== type;

    return diff ? action.err : state;
};

// -----------------------------------------
// Export

export default reducer;
