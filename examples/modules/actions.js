// -----------------------------------------
// IMPORTS

var deepMixIn = require('mout/object/deepMixIn.js');
var store = require('./store.js');
var appActionsFn = require('./app/actions.js');

// -----------------------------------------
// VARS

var appActions = appActionsFn(store);

// Add to the update pool
store.subscribe(function () {
    // TODO: Do you need to do anything at this stage?
});

// -----------------------------------------
// EXPORT

module.exports = deepMixIn({}, {
    subscribe: store.subscribe,
    getInitial: store.getInitial,
    getState: store.getState
}, appActions);
