// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Takes care of a request
 * @param  {store} store
 * @param  {function} requestMade
 * @param  {string} action
 */
const request = (store, requestMade, action) => {
    // Set loading
    store.dispatch({
        type: `${action}_LOADING`,
        loading: true
    });

    // Make the request
    requestMade()
    .then((data) => {
        // Dispatch data
        store.dispatch({ type: action, data });
    })
    .catch((err) => {
        // Dispatch the error
        store.dispatch({ type: `${action}_ERR`, err });
    })
    .finally(() => {
        // Remove loading
        store.dispatch({
            type: `${action}_LOADING`,
            loading: false
        });
    });
};

// -----------------------------------------
// EXPORT

export { request };
