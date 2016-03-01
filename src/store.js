// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Loading reducer
 * @param  {object}  state
 * @param  {object}  action
 * @return {object}
 */
const loadingReducer = (state = false, action) => {
    const type = action.type;
    const diff = type.replace('_LOADING', '') !== type;

    return diff ? action.loading : state;
};

/**
 * Error reducer
 * @param  {object}  state
 * @param  {object}  action
 * @return {object}
 */
const errReducer = (state = null, action) => {
    const type = action.type;
    const diff = type.replace('_ERR', '') !== type;

    return diff ? action.err : state;
};

// -----------------------------------------
// EXPORT

export { loadingReducer, errReducer };
