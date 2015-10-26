'use strict';
import deepMixIn from 'mout/object/deepMixIn.js';
import Rock from './Rock.js';

// -----------------------------------------
// VARS
let controllerConfig = {
    name: 'Controller',
    states: {}
};

// Functions to be defined later
let isState, setChildState;

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Initialize
 * @param  {object} options
 * @return {this}
 */
let initialize = function (options) {
    Rock.prototype.initialize.call(this, options);

    // Set keys to be bind with self
    this.bindToSelf(['getState', 'setState']);

    return this;
};

/**
 * Returns the current state
 * @param  {*} self
 * @return {object} The current state
 */
let getState = (self) => self.currentState;

/**
 * Sets state of the controller
 * @param  {*} self
 * @param  {string} state Key to set the state
 */
let setState = (self, state) => {
    // It may be a state object
    let stateName = state && state.name || state;

    // State exists in the controller so...
    if (state.child && isState(self, state.child)) {
        return setState(self, state.child);
    }

    if (stateName === getState(self)) {
        return;
    }

    if (!isState(self, state)) {
        return console.warn('[' + self.name + '] The state "' + stateName + '" doesn\'t exist in this controller.');
    }

    // Set the state
    self[self.states[stateName]](state);
    self.currentState = stateName;
    console.log('[' + self.name + '] Changed state to "' + stateName + '".');

    // Set child state
    state.child && setChildState(self, state.child);
};

// -----------------------------------------
// PRIVATE FUNCTIONS

/**
 * Checks if this is a state in this instance
 * @param  {rock} self
 * @param  {string} state Key to check in the states
 * @return {boolean}
 */
isState = (self, state) => {
    // It may be a state object
    let stateName = state && state.name || state;
    return self.states.hasOwnProperty(stateName);
};

/**
 * Sets state in child
 * @param  {rock} self
 * @param  {string} state Key to be set in the child
 */
setChildState = (self, state) => {
    var found = false;

    // Go through each sible and set the state
    self.siblings.forEach(val => {
        if (val.isState && val.isState(state)) {
            setState(val, state);
            found = true;
        }
    });

    !found && console.warn('[' + self.name + '] The state "' + state.name + '" wasn\'t found.');
};

// -----------------------------------------
// EXPORT

export default Rock.extend(deepMixIn(controllerConfig, {
    initialize, getState, setState
}));
