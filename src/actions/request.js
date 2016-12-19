'use strict';

// -----------------------------------------
// Functions

/**
 * Takes care of a request
 * @param  {object} obj
 * @return {promise}
 */
const action = (obj) => {
    const store = obj.store;
    const requestMade = obj.request;
    const actionType = obj.action;
    const middleware = obj.middleware;
    let lastStep = 'then';

    // Set loading
    store.dispatch({ type: `${actionType}_LOADING`, loading: true });

    // Make the request
    const promise = requestMade()
    .then((data) => !!middleware ? middleware(data) : data)
    .then((data) => {
        // Dispatch data
        store.dispatch({ type: actionType, data });
        return data;
    })
    .catch((err) => {
        // Dispatch the error
        store.dispatch({ type: `${actionType}_ERR`, err });
    });

    // Check for the last step
    if (promise.hasOwnProperty('finally')) {
        lastStep = 'finally';
    }

    // Now set the last step
    promise[lastStep]((data) => {
        // Remove loading
        store.dispatch({ type: `${actionType}_LOADING`, loading: false });

        return data;
    });

    return promise;
};

// --------------------------------
// Export

export default action;
