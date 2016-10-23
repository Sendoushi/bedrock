/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// Import packages
var gulp = require('gulp');
var Joi = require('joi');

var STRUCT = Joi.object().keys({
    src: Joi.string().required(),
    dest: Joi.string().required()
    // ignore: Joi.string().default('').allow(''),
    // order: Joi.number().default(0),
});

//-------------------------------------
// Functions

/**
 * Initialize tasks
 * @param  {array} tasks
 */
function copy(tasks) {
    tasks.forEach(function (task) {
        gulp.src(task.src).pipe(gulp.dest(task.dest));
    });
}

// --------------------------------
// Export

module.exports = { STRUCT: STRUCT, copy: copy };
