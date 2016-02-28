import store from './store.js';

// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Sets content of app
 */
const setContent = (action) => {
    store.dispatch({ type: 'SET_CONTENT', content: action });
};

/**
 * Sets modal of app
 */
const setModal = (action) => {
    store.dispatch({ type: 'SET_MODAL', modal: action });
};

// -----------------------------------------
// EXPORT

export default {
    subscribe: store.subscribe,
    getInitial: store.getInitial,
    getState: store.getState,

    setContent, setModal
};
