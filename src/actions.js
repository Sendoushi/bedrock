// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Takes care of a request
 * @param  {store} store
 * @param  {function} req
 * @param  {string} action
 */
const actionRequest = (store, req, action) => {
    // Set loading
    store.dispatchAction({
        type: action,
        loading: true,
        err: null,
        data: null
    });

    // Make the request
    req()
    .then((data) => {
        store.dispatchAction({
            type: action,
            loading: false,
            err: null,
            data
        });
    })
    .catch((err) => {
        // Dispatch the error
        store.dispatchAction({
            type: action,
            loading: false,
            err,
            data: null
        });
    });
};

// -----------------------------------------
// EXPORT

export { actionRequest };
