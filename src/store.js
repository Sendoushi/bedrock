'use strict';

import { combineReducers, compose, createStore } from 'redux';
import mailbox from './mailbox.js';

const DEFAULTS = {
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
// { title: 'store', properties: {}, required: true }
const connect = (store) => {
    const unsubscribe = store.subscribe(() => {
        const state = store.getState();

        // Inform of changes
        mailbox.send(DEFAULTS.events.update, state);
    });

    // Set general events
    mailbox.on(DEFAULTS.events.initialReq, (cb) => {
        const stateFn = store.getInitial || store.getState;
        cb(stateFn());
    });
    mailbox.on(DEFAULTS.events.get, (cb) => cb(store.getState()));

    return unsubscribe;
};

/**
 * Initializes store
 * @param  {object} storeReducers
 * @param  {*} INITIAL_STATE
 * @return {object}
 */
// { title: 'storeReducers', properties: {}, required: true }
// { title: 'INITIAL_STATE', default: {} }
const init = (storeReducers, INITIAL_STATE = {}) => {
    const reducers = combineReducers(storeReducers);
    const isDev = process && process.env && process.env.NODE_ENV === 'development' || false;
    const devTools = window.devToolsExtension;
    const finalCreateStore = compose((isDev && devTools) ? devTools() : (f) => f)(createStore);
    const store = finalCreateStore(reducers);
    const initialFn = () => INITIAL_STATE;

    // Register more methods
    store.getInitial = initialFn;

    return store;
};

// --------------------------------
// Export

export default { init, connect };
