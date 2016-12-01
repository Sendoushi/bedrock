/* eslint-disable strict */'use strict';/* eslint-enable strict */

var redux = require('redux');
var mailbox = require('./mailbox.js');

var DEFAULTS = {
    events: {
        update: 'store.update',
        initialReq: 'store.initial.req',
        get: 'store.req'
    }
};

// -----------------------------------------
// Functions

/**
 * Connects store
 * @param  {redux} store
 * @return {function}
 */
function connect(store) {
    var unsubscribe = store.subscribe(function () {
        var state = store.getState();

        // Inform of changes
        mailbox.send(DEFAULTS.events.update, state);
    });

    // Set general events
    mailbox.on(DEFAULTS.events.initialReq, function (cb) {
        var stateFn = store.getInitial || store.getState;
        cb(stateFn());
    });
    mailbox.on(DEFAULTS.events.get, function (cb) {
        cb(store.getState());
    });

    return unsubscribe;
}

/**
 * Initializes store
 * @param  {object} storeReducers
 * @param  {*} INITIAL_STATE
 * @return {object}
 */
function init(storeReducers, INITIAL_STATE) {
    var reducers = redux.combineReducers(storeReducers);
    var isDev = process && process.env && process.env.NODE_ENV === 'development';
    var devTools = window.devToolsExtension;
    var finalCreateStore = redux.compose(
        (isDev && devTools) ? devTools() : function (f) { return f; }
    )(redux.createStore);
    var store = finalCreateStore(reducers);

    // Register more methods
    store.getInitial = function () { return INITIAL_STATE || {}; };

    return store;
}

// --------------------------------
// Export

module.exports = {
    init: init,
    connect: connect
};
