/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// Import packages
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var Joi = require('joi');
var doT = require('dot');

var OPTIONS_STRUCT = Joi.object().keys({
    layouts: Joi.object().min(2).required(),
    components: Joi.array().items(Joi.string()).required().default([]),
    generalLayout: Joi.string().required(),
    patternLayout: Joi.string().required()
});

var STRUCT = Joi.object().keys({
    src: Joi.string().required(),
    dest: Joi.string(),
    // ignore: Joi.string().default('').allow(''),
    // order: Joi.number().default(0),
    options: OPTIONS_STRUCT.required()
});

//-------------------------------------
// Functions

/**
 * Returns file in raw mode
 * @param  {string} pathSrc
 * @return {string}
 */
function readFile(pathSrc) {
    var filename = require.resolve(pathSrc);
    return fs.readFileSync(filename, 'utf8');
}

/**
 * Builds components
 * @param  {array} comps
 * @param  {object} layouts
 * @return {string}
 */
function buildComponents(comps, layouts) {
    var tmpl = '';
    var compTmpl;
    var comp;
    var i;

    // Lets go through each component
    for (i = 0; i < comps.length; i += 1) {
        comp = comps[i];

        // First the component template
        compTmpl = !!comp.template && doT.template(comp.template)({ modifiers: comp.modifiers });

        // Now under the pattern
        compTmpl = layouts[comp.patternLayout]({
            template: compTmpl,
            script: comp.script,
            style: comp.style,
            parentModifiers: comp.parentModifiers
        });

        tmpl += compTmpl;
    }

    return tmpl;
}

/**
 * Gets components available
 * @param  {object} task
 * @return {object}
 */
function getComponents(task) {
    var pathSrc = path.join(task.src, 'components');
    var components = [];

    // Lets require and template each in config now
    components = task.options.components.map(function (val) {
        var src = path.join(pathSrc, val);
        var base = path.dirname(src);
        var comp = require(src);

        // Lets build the final component
        comp = {
            template: !!comp.template && readFile(path.join(base, comp.template)),
            style: !!comp.style && readFile(path.join(base, comp.style)),
            script: !!comp.script && readFile(path.join(base, comp.script)),

            parentModifiers: comp.parentModifiers || [''],
            modifiers: comp.modifiers || [''],
            patternLayout: comp.patternLayout || task.patternLayout
        };

        return comp;
    });

    return components;
}

/**
 * Gets layouts available
 * @param  {object} task
 * @return {object}
 */
function getLayouts(task) {
    var pathSrc = path.join(task.src, 'layouts');
    var keys = Object.keys(task.options.layouts);
    var layouts = {};
    var src;
    var i;

    // Lets require and template each in config now
    for (i = 0; i < keys.length; i += 1) {
        src = path.join(pathSrc, task.options.layouts[keys[i]]);
        layouts[keys[i]] = doT.template(readFile(src));
    }

    return layouts;
}

/**
 * Initialize tasks
 * @param  {array} tasks
 */
function build(tasks) {
    tasks.forEach(function (task) {
        var buildSrc = path.join(task.dest, 'styleguide.html');
        var components = getComponents(task);
        var layouts = getLayouts(task);
        var tmpl = buildComponents(components, layouts, task);

        // We need to pass now the template to the right layout
        tmpl = layouts[task.options.generalLayout]({
            projectId: task.projectId,
            projectName: task.projectName,
            template: tmpl
        });

        return gulp.task('taskname', function (cb) {
            fs.writeFile(buildSrc, tmpl, cb);
        });
    });
}

// --------------------------------
// Export

module.exports = { STRUCT: STRUCT, build: build };
