/* @flow *//* :: import type {Actions, FnInit} from './_test/actions.flow.js'; */
'use strict';

// -----------------------------------------
// Functions

/**
 * Initializes actions with a store
 * @param  {*} store
 * @param  {object} actions
 * @return {object}
 */
const init/* :: :FnInit */ = (store, actions) => {
    const keys/* :: :string[] */ = Object.keys(actions);
    const newActions/* :: :Actions */ = {};

    for (let i/* :: :number */ = 0; i < keys.length; i += 1) {
        newActions[keys[i]] = actions[keys[i]](store);
    }

    return newActions;
};

// --------------------------------
// Export

export default { init };
