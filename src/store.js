// @flow
'use strict';

/* ::
import type {S, FnGetState, FnGetInitial, Store, FnConnect, FnInit} from './_test/store.flow.js';
*/

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
const connect/* :: :FnConnect */ = (store) => {
    const unsubscribe/* :: :Function */ = store.subscribe(() => {
        const state/* :: :S */ = store.getState();

        // Inform of changes
        mailbox.send(DEFAULTS.events.update, state);
    });

    // Set general events
    mailbox.on(DEFAULTS.events.initialReq, (cb) => {
        const stateFn/* :: :FnGetInitial|FnGetState */ = store.getInitial || store.getState;
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
const init/* :: :FnInit */ = (storeReducers, INITIAL_STATE = {}) => {
    const reducers/* :: :Function */ = redux.combineReducers(storeReducers);
    const isDev/* :: :boolean */ = process && process.env && process.env.NODE_ENV === 'development' || false;
    const devTools/* :: :?Function */ = window.devToolsExtension;
    const finalCreateStore/* :: :Function */ = redux.compose((isDev && devTools) ? devTools() : (f) => f)(redux.createStore);
    const store/* :: :Store */ = finalCreateStore(reducers);
    const initialFn/* :: :FnGetInitial */ = () => INITIAL_STATE;

    // Register more methods
    store.getInitial = initialFn;

    return store;
};

// --------------------------------
// Export

export default { init, connect };
