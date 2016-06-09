'use strict';

// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Takes care of a request
 * @param  {object} obj
 * @return {promise}
 */
var request = function (obj) {
    var store = obj.store;
    var requestMade = obj.request;
    var action = obj.action;
    var middleware = obj.middleware;
    var lastStep = 'then';
    var promise;

    // Set loading
    store.dispatch({
        type: action + '_LOADING',
        loading: true
    });

    // Make the request
    promise = requestMade()
    .then(function (data) {
        return !!middleware ? middleware(data) : data;
    })
    .then(function (data) {
        // Dispatch data
        store.dispatch({ type: action, data });
    })
    .catch(function (err) {
        // Dispatch the error
        store.dispatch({ type: action + '_ERR', err });
    });

    // Check for the last step
    if (promise.hasOwnProperty('finally')) {
        lastStep = 'finally';
    }

    // Now set the last step
    promise[lastStep](function () {
        // Remove loading
        store.dispatch({
            type: action + '_LOADING',
            loading: false
        });
    });

    return promise;
};

// -----------------------------------------
// EXPORT

module.exports = { request: request };
