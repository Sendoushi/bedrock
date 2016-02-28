import deepMixIn from 'mout/object/deepMixIn.js';
import deepClone from 'mout/lang/deepClone.js';
import deepFillIn from 'mout/object/deepFillIn.js';
import deepEquals from 'mout/lang/deepEquals.js';

// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Updates state of component
 * @param  {object} stateToUpd
 * @param  {object} state
 * @param  {object} filler
 */
const updateState = (stateToUpd, state, filler) => {
    let newState = deepMixIn({}, deepClone(stateToUpd), deepClone(state));

    // Fill in with the filler
    newState = !!filler ? deepFillIn(newState, filler) : newState;

    return !deepEquals(stateToUpd, newState) ? newState : null;
};

// -----------------------------------------
// EXPORT

export { updateState };
