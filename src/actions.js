'use strict';

// -----------------------------------------
// Functions

/**
 * Initializes actions with a store
 * @param  {*} store
 * @param  {object} actions
 * @return {object}
 */
// { title: 'store', properties: {}, required: true },
// { title: 'actions', properties: {}, required: true }
const init = (store, actions) => {
    const keys = Object.keys(actions);
    const newActions = {};

    for (let i = 0; i < keys.length; i += 1) {
        if (typeof actions[keys[i]] !== 'function') {
            throw new Error('Action needs to be a function');
        }

        newActions[keys[i]] = actions[keys[i]](store);
    }

    return newActions;
};

// --------------------------------
// Export

export default { init };
