/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// Import packages
var Joi = require('joi');

var OPTIONS_STRUCT = Joi.object().keys({
    // TODO: ...
}).default({
});

var STRUCT = Joi.object().keys({
    src: Joi.string().required(),
    dest: Joi.string().required(),
    // ignore: Joi.string().default('').allow(''),
    // order: Joi.number().default(0),
    options: OPTIONS_STRUCT
});

//-------------------------------------
// Functions

/**
 * Initialize tasks
 * @param  {object} task
 * @param  {function} cb
 */
function build(task, cb) {
    // TODO: ...
    cb();
}

// --------------------------------
// Export

module.exports = { STRUCT: STRUCT, build: build };
