// -----------------------------------------
// IMPORTS

var redux = require('redux');
var appStore = require('./app/store.js');

// -----------------------------------------
// VARS

var INITIAL_STATE = {
    app: appStore.getInitial()
};

// -----------------------------------------
// Initialize

var reducers = redux.combineReducers({
    app: appStore.reducers
});

var isDev = process && process.env && process.env.NODE_ENV === 'development';
var devTools = window.devToolsExtension;
var finalCreateStore = redux.compose(
    (isDev && devTools) ? devTools() : function (f) { return f; }
)(redux.createStore);
var store = finalCreateStore(reducers);

// Register more methods
store.getInitial = function () {
    return INITIAL_STATE;
}

// -----------------------------------------
// EXPORT

module.exports = store;
