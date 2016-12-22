// @flow
'use strict';

/* ::
import type {FnGetNew} from './_test/state.flow.js';
*/

import cloneDeep from 'lodash/cloneDeep.js';
import merge from 'lodash/merge.js';
import { diff } from 'deep-diff';

// -----------------------------------------
// Functions

/**
 * Gets new state
 * @param  {*} oldState
 * @param  {*} newState
 * @return {object}
 */
const getNew/* :: :FnGetNew */ = (oldState = {}, newState = {}) => {
    const newData = merge({}, cloneDeep(oldState), cloneDeep(newState));
    const isDiff = diff(oldState, newData);

    // Update data
    return {
        diff: !!isDiff ? isDiff : false,
        state: newData
    };
};

// --------------------------------
// Export

export default { getNew };
