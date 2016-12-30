'use strict';

// -----------------------------------------
// Functions

/**
 * Loading reducer maker
 * @param  {boolean}  INITIAL_STATE
 * @return {function}
 */
// { title: 'INITIAL_STATE', type: 'boolean', default: false, required: true }
const reducer = (INITIAL_STATE = false) => (state = INITIAL_STATE, action = {}) => {
    const type = action.type;
    const diff = type.replace('_LOADING', '') !== type;

    return diff ? action.loading : state;
};

// -----------------------------------------
// Export

export default reducer;
