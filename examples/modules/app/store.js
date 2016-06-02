// -----------------------------------------
// IMPORTS

var deepClone = require('mout/lang/deepClone');
var { breadcrumbReducer } = require('../../../src/store');
var { combineReducers } = require('redux');

// -----------------------------------------
// VARS

var BREADCRUMB_SCHEMA = {
    'INDEX': { name: 'Dashboard' },
    'ADD': { name: 'Adicionar', parentType: 'INDEX' }
};

var INITIAL_STATE = {
    breadcrumb: [],
    content: {
        type: '',
        params: {}
    },
    modal: {
        type: null,
        params: {}
    },
    modules: [
        { name: 'Dashboard', routeType: 'INDEX' }
    ]
};

// -----------------------------------------
// FUNCTIONS

/**
 * Content reducer
 * @param  {object}  state
 * @param  {object}  action
 * @return {object}
 */
var content = function (state, action) {
    state = state || INITIAL_STATE.content;

    switch (action.type) {
    case 'SET_CONTENT':
        return deepClone(action.content);
    default:
        return deepClone(state);
    }
};

/**
 * Sets modal
 * @param  {object} state
 * @param  {object} action
 * @return {object}
 */
var modal = function (state, action) {
    state = state || INITIAL_STATE.modal;

    switch (action.type) {
    case 'SET_MODAL':
        return deepClone(action.modal);
    default:
        return deepClone(state)
    }
};

// -----------------------------------------
// EXPORT

module.exports = {
    getInitial: function () { return INITIAL_STATE; },
    reducers: combineReducers({
        breadcrumb: breadcrumbReducer(INITIAL_STATE.breadcrumb, BREADCRUMB_SCHEMA),
        modal: modal, content: content
    })
};
