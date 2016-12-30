'use strict';

import { compileSchema, getSchema } from 'bedrock-utils/src/validate.js';

// -----------------------------------------
// Functions

/**
 * Error reducer maker
 * @param  {*}  INITIAL_STATE
 * @return {function}
 */
const reducerValidate = compileSchema(getSchema([
    { title: 'INITIAL_STATE', type: 'boolean', required: true }
]));
const reducer = (INITIAL_STATE = false) => {
    reducerValidate([INITIAL_STATE]);

    return (state = INITIAL_STATE, action = {}) => {
        const type = action.type;
        const diff = type.replace('_ERR', '') !== type;

        return diff ? action.err : state;
    };
};

// -----------------------------------------
// Export

export default reducer;
