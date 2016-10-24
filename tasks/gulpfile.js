/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

//-------------------------------------
// Example of usage
/*
// CLI:
// node node_modules/gulp/bin/gulp.js project:build --gulpfile="node_modules/bedrock/tasks/gulpfile.js" --env=prod --config="CONFIG_SRC";

// CONFIG:
var config = {
    projectName: 'foo',
    tasks: [{
        "type": "del",
        "env": "prod",
        "data": [
            { "src": "./build/*" }
        ]
    }, {
        "type": "copy",
        "env": "*",
        "data": [
            { "src": "./src/imgs/**\/*", "dest": "./build/imgs" },
            { "src": "./src/**\/*.php", "dest": "./build" }
        ]
    }, {
        "type": "style",
        "env": "dev",
        "data": [
            {
                "src": "./src/main.scss",
                "dest": "./build/style.css",
                "options": {
                    "minify": false,
                    "sourceMap": true,
                    "autoprefixer": false,
                    "include": [
                        "imports", "blocks", "partials", "vendor",
                        "override", "module", "mixin", "layout",
                        "function", "core", "content"
                    ]
                }
            }
        ]
    }, {
        "type": "style",
        "env": "prod",
        "data": [{
            "src": "./src/main.scss",
            "dest": "./build/style.css",
            "options": {
                "include": [
                    "imports", "blocks", "partials", "vendor",
                    "override", "module", "mixin", "layout",
                    "function", "core", "content"
                ]
            }
        }]
    }, {
        "type": "script",
        "env": "dev",
        "data": [{
            "src": "./src/script/main.js",
            "dest": "./build",
            "options": {
                "externals": { "jquery": "jQuery" },
                "cache": false,
                "debug": true,
                "devtool": "source-map",
                "plugins": [{
                    "name": "define",
                    "args": [{
                        "IS_BROWSER": true
                    }, {
                    "name": "provide",
                    "args": [{
                        "$": "jquery",
                        "jQuery": "jquery",
                        "Promise": "imports?this=>global!exports?global.Promise!es6-promise"
                    }]
                }]
            },
        }]
    }], {
        "type": "script",
        "env": "prod",
        "data": [{
            "src": "./src/script/main.js",
            "dest": "./build",
            "options": {
                "externals": { "jquery": "jQuery" },
                "plugins": [{
                    "name": "define",
                    "args": [{
                        "IS_BROWSER": true
                    }]
                }, {
                    "name": "dedupe"
                }, {
                    "name": "provide",
                    "args": [{
                        "$": "jquery",
                        "jQuery": "jquery",
                        "Promise": "imports?this=>global!exports?global.Promise!es6-promise"
                    }]
                }, {
                    "name": "webpack-closure-compiler",
                    "args": [{
                        "compiler": {
                            "language_in": "ECMASCRIPT5",
                            "language_out": "ECMASCRIPT5",
                            "compilation_level": "ADVANCED"
                        },
                        "concurrency": 3,
                    }]
                }]
            },
        }]
    }]
};
*/

//-------------------------------------
// Vars / Imports

// Import packages
var path = require('path');
var argv = require('yargs').argv;
var del = require('del');
var Joi = require('joi');
var gulp = require('gulp');

// Import modules
var modules = {
    file: require('./modules/file.js'),
    script: require('./modules/script.js'),
    style: require('./modules/style.js'),
    sprite: require('./modules/sprite.js')
};
var tasks = {
    copy: { STRUCT: file.STRUCT, fn: file.copy },
    script: { STRUCT: script.STRUCT, fn: script.build },
    style: { STRUCT: style.STRUCT, fn: style.build },
    sprite: { STRUCT: sprite.STRUCT, fn: sprite.build }
};

var STRUCT = Joi.object().keys({
    projectName: Joi.string().default('projectname'),
    tasks: Joi.array().items(Joi.object().keys({
        type: Joi.string().required(),
        env: Joi.string().default('*'),
        args: Joi.array().required()
    })).default([])
}).required();

//-------------------------------------
// Functions

/**
 * Verify if config is right
 * @param  {object} config
 * @return {boolean}
 */
function verify(config) {
    var errors = [];
    var values;
    var result;
    var task;
    var i;

    // General config
    result = Joi.validate(config, STRUCT);
    result.error && errors.push(result.error);
    values = result.value;

    // Now the tasks
    values.tasks = [];
    for (i = 0; i < config.tasks.length; i += 1) {
        task = config.tasks[i];

        result = Joi.validate(task.args, tasks[task.type].STRUCT);
        result.error && errors.push(result.error);
        result.value && values.tasks.push(result.value);
    }

    return { error: errors, value: values };
}

/**
 * Gets tasks
 * @param  {array} tasks
 * @param  {type} type
 * @return {array}
 */
function getTasks(tasks, type) {
    return tasks.filter(function (task) {
        var isType = task.type === type;
        var isEnv = task.env === '*' || !!argv.env === task.env;

        return isType && isEnv;
    })).map(function (task) {
        return task.data;
    });
}

/**
 * Initialize tasks
 * @param  {object} config
 */
function init(config) {
    var result = verify(config);

    // Verify config
    if (result.error && result.error.length) {
        throw new Error(result.error);
    }

    // Set the right config
    config = result.value;

    gulp.task('project:clean', [], function (cb) {
        tasks['del'].fn(getTasks(config.tasks, 'copy'), cb);
    });

    gulp.task('project:copy', [], function () {
        tasks['copy'].fn(getTasks(config.tasks, 'copy'));
    });

    gulp.task('project:sprite', [], function () {
        tasks['sprite'].fn(getTasks(config.tasks, 'sprite'));
    });

    gulp.task('project:css', ['project:sprite'], function () {
        tasks['style'].fn(getTasks(config.tasks, 'style'));
    });

    // Prepare build for dev
    gulp.task('project:build', ['project:clean', 'project:copy', 'project:css'], function () {
        tasks['script'].fn(getTasks(config.tasks, 'script'));
    });
}

//-------------------------------------
// Runtime

init(require(argv.config));
