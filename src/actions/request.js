/* eslint-disable strict */'use strict';/* eslint-enable strict */

// -----------------------------------------
// Functions

/**
 * Takes care of a request
 * @param  {object} obj
 * @return {promise}
 */
function action(obj) {
    var store = obj.store;
    var requestMade = obj.request;
    var actionType = obj.action;
    var middleware = obj.middleware;
    var lastStep = 'then';
    var promise;

    // Set loading
    store.dispatch({ type: actionType + '_LOADING', loading: true });

    // Make the request
    promise = requestMade()
    .then(function (data) {
        return !!middleware ? middleware(data) : data;
    })
    .then(function (data) {
        // Dispatch data
        store.dispatch({ type: actionType, data });
        return data;
    })
    .catch(function (err) {
        // Dispatch the error
        store.dispatch({ type: actionType + '_ERR', err });
    });

    // Check for the last step
    if (promise.hasOwnProperty('finally')) {
        lastStep = 'finally';
    }

    // Now set the last step
    promise[lastStep](function (data) {
        // Remove loading
        store.dispatch({ type: actionType + '_LOADING', loading: false });

        return data;
    });

    return promise;
}

// --------------------------------
// Export

module.exports = action;
