/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// Import packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var Joi = require('joi');

// TODO: Defaults not working!
var OPTIONS_STRUCT = Joi.object().keys({
    minify: Joi.boolean().default(true),
    autoprefixer: Joi.array().default(['last 2 versions']),
    sourceMap: Joi.boolean().default(false),
    include: Joi.array().items(Joi.string()).default([])
}).default({
    minify: true,
    autoprefixer: ['last 2 versions'],
    sourceMap: false,
    include: []
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
 * @param  {array} tasks
 * @param  {function} cb
 */
function build(tasks, cb) {
    tasks.forEach(function (task) {
        var gulpTask = gulp.src(task.src);
        var isSass = task.src.replace('.scss', '') !== task.src || task.src.replace('.sass', '') !== task.src;
        var isLess = task.src.replace('.less', '') !== task.src;

        if (isSass) {
            gulpTask = gulpTask.pipe(sass().on('error', sass.logError));
        } else if (isLess) {
            // Nothing to do here...
        } else {
            return;
        }

        if (task.options.sourceMap) {
            gulpTask = gulpTask.pipe(sourcemaps.init());
        }

        if (isSass) {
            gulpTask = gulpTask.pipe(sass({
                outputStyle: task.options.minify ? 'compressed' : 'expanded'
            }).on('error', sass.logError));
        } else if (isLess) {
            gulpTask = gulpTask.pipe(less());
        }

        if (task.options.sourceMap) {
            gulpTask = gulpTask.pipe(sourcemaps.write());
        }

        if (task.options.autoprefixer.length) {
            gulpTask = gulpTask.pipe(autoprefixer({
                browsers: task.options.autoprefixer,
                cascade: false
            }));
        }

        gulpTask.pipe(gulp.dest(task.dest))
        .on('end', function () { cb(); });
    });
}

// --------------------------------
// Export

module.exports = { STRUCT: STRUCT, build: build };
