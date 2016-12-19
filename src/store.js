/* @flow */
/* :: import type {S, GetState, GetInitial, Store, Connect, Init} from './_test/store.flow.js'; */
'use strict';

import redux from 'redux';
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
const connect/* :: :Connect */ = (store) => {
    const unsubscribe/* :: :function */ = store.subscribe(() => {
        const state/* :: :S */ = store.getState();

        // Inform of changes
        mailbox.send(DEFAULTS.events.update, state);
    });

    // Set general events
    mailbox.on(DEFAULTS.events.initialReq, (cb) => {
        const stateFn/* :: :GetInitial|GetState */ = store.getInitial || store.getState;
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
const init/* :: :Init */ = (storeReducers, INITIAL_STATE = {}) => {
    const reducers/* :: :function */ = redux.combineReducers(storeReducers);
    const isDev/* :: :boolean */ = process && process.env && process.env.NODE_ENV === 'development' || false;
    const devTools/* :: :?function */ = window.devToolsExtension;
    const finalCreateStore/* :: :function */ = redux.compose((isDev && devTools) ? devTools() : (f) => f)(redux.createStore);
    const store/* :: :Store */ = finalCreateStore(reducers);
    const initialFn/* :: :GetInitial */ = () => INITIAL_STATE;

    // Register more methods
    store.getInitial = initialFn;

    return store;
};

// --------------------------------
// Export

export default { init, connect };
