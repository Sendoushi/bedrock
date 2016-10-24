/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// Import packages
var gulp = require('gulp');
var Joi = require('joi');

var STRUCT = Joi.object().keys({
    src: Joi.string().required(),
    dest: Joi.string()
    // ignore: Joi.string().default('').allow(''),
    // order: Joi.number().default(0),
});

//-------------------------------------
// Functions

function del(tasks, cb) {
    var srcs = tasks.map(function (task) {
        return task.src;
    });

    if (!srcs.length) {
        return cb();
    }

    // Lets delete files
    del(srcs).then(cb.bind(null, null, null));
}

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

module.exports = { STRUCT: STRUCT, copy: copy, del: del };
