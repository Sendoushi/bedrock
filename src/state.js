'use strict';

import cloneDeep from 'lodash/cloneDeep.js';
import merge from 'lodash/merge.js';
import { diff } from 'deep-diff';
import { compileSchema, getSchema } from 'bedrock-utils/src/validate.js';

// -----------------------------------------
// Functions

/**
 * Gets new state
 * @param  {*} oldState
 * @param  {*} newState
 * @return {object}
 */
const getNewValidate = compileSchema(getSchema([
    { title: 'oldState', properties: {}, required: true },
    { title: 'newState', properties: {}, required: true }
]));
const getNew = (oldState = {}, newState = {}) => {
    getNewValidate([oldState, newState]);

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
