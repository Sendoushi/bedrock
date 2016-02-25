import store from './store.js';

// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Sets content of app
 */
const setContent = (action) => {
    store.dispatchAction({ type: 'SET_CONTENT', content: action });
};

/**
 * Sets modal of app
 */
const setModal = (action) => {
    store.dispatchAction({ type: 'SET_MODAL', modal: action });
};

// -----------------------------------------
// EXPORT

export default {
    addView: (view) => store.addView(view),
    removeView: (view) => store.removeView(view),
    getInitial: store.getInitial,
    getState: store.getState,

    setContent, setModal
};
