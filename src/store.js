import { createStore, compose } from 'redux';
import deepClone from 'mout/lang/deepClone.js';

// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Updates views
 */
const updateViews = (self) => {
    const state = self.getState();

    // Update views with state
    self.views.forEach(view => view.update(state));
};

/**
 * Adds view to the store
 * @param  {tag} view
 */
const addView = (self, view) => {
    const state = self.getState();

    // Add the view future updates
    self.views.push(view);

    // Update the view with the actual state
    view.update(state);
};

/**
 * Removes view from the store
 * @param  {tag} view
 */
const removeView = (self, view) => {
    let i;

    for (i = 0; i < self.views.length; i += 1) {
        if (self.views[i] === view) {
            self.views.splice(i, 1);
            break;
        }
    }
};

/**
 * Create a reducer function
 * @param  {object} INITIAL_STATE
 * @param  {object} reducers
 * @return {function}
 */
const reducer = (INITIAL_STATE, reducers) => {
    return (state, action) => {
        const newState = deepClone(state || INITIAL_STATE);
        let typeFn;

        // Reset errors
        newState.err = INITIAL_STATE.err;

        // Get the right reducer for the type
        typeFn = reducers[action.type];

        return typeFn ? typeFn(newState, action) : newState;
    };
};

// -----------------------------------------
// INIT FUNCTION

/**
 * Initialize the store
 * @param  {object} INITIAL_STATE
 * @param  {object} reducers
 * @param  {array} middlewares
 * @return {object}
 */
const initStore = (INITIAL_STATE, reducers, middlewares) => {
    let store;

    // Take care of middlewares
    if (middlewares && middlewares.length) {
        store = compose(...middlewares)(createStore);
    } else {
        store = createStore;
    }

    // Finally create the store
    store = store(reducer(INITIAL_STATE, reducers));

    // Set the views and the subscription
    store.views = []; // Used to update when store changes
    store.subscribe(() => updateViews(store));

    // Export that will be used by actions
    return {
        dispatchAction: (action) => store.dispatch(action),
        addView: (view) => addView(store, view),
        removeView: (view) => removeView(store, view),
        getInitial: () => INITIAL_STATE,
        getState: store.getState
    };
};

// -----------------------------------------
// EXPORT

export { initStore };
