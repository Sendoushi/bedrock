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

    // Set loading
    store.dispatch({
        type: action + '_LOADING',
        loading: true
    });

    // Make the request
    return requestMade()
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
    })
    .finally(function () {
        // Remove loading
        store.dispatch({
            type: action + '_LOADING',
            loading: false
        });
    });
};

// -----------------------------------------
// EXPORT

module.exports = { request: request };
