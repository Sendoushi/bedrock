// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Takes care of a request
 * @param  {object} obj
 * @return {promise}
 */
const request = (obj) => {
    const store = obj.store;
    const requestMade = obj.request;
    const action = obj.action;
    const middleware = obj.middleware;

    // Set loading
    store.dispatch({
        type: `${action}_LOADING`,
        loading: true
    });

    // Make the request
    return requestMade()
    .then((data) => {
        return !!middleware ? middleware(data) : data;
    })
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
