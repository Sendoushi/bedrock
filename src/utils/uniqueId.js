'use strict';

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Creates a unique id
 * @param  {string} prefix
 * @return {string}
 */
let uniqueId = (prefix) => {
    return prefix + (Date.now() + Math.random() * 10000);
};

export default uniqueId;
