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
    projectId: 'foo',
    projectName: 'Foo',
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
        "type": "styleguide",
        "env": "*",
        "data": [
            "src": "./src/styleguide",
            "dest": "./build/styleguide",
            "options": {
                "layouts": {
                    "general": "general_layout.html",
                    "pattern": "pattern_layout.html",
                    "pattern2": "pattern_2_layout.html"
                },
                "components": [
                    "00_config/config.json",
                    "01_button/button.json"
                ],
                "generalLayout": "general",
                "patternLayout": "pattern"
            }
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
                    }]
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
                }, {
                    "name": "uglify",
                    "args": [{
                        "mangle": {
                            "except": ["$", "exports", "require"]
                        },
                        "compress": {
                            "warnings": false
                        },
                        "comments": false,
                        "sourceMap": false
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
var fs = require('fs');
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
    sprite: require('./modules/sprite.js'),
    styleguide: require('./modules/styleguide.js')
};
var tasks = {
    del: { STRUCT: modules.file.STRUCT, fn: modules.file.del },
    copy: { STRUCT: modules.file.STRUCT, fn: modules.file.copy },
    script: { STRUCT: modules.script.STRUCT, fn: modules.script.build },
    style: { STRUCT: modules.style.STRUCT, fn: modules.style.build },
    sprite: { STRUCT: modules.sprite.STRUCT, fn: modules.sprite.build },
    styleguide: { STRUCT: modules.styleguide.STRUCT, fn: modules.styleguide.build }
};

var STRUCT = Joi.object().keys({
    projectId: Joi.string().default('projectname'),
    projectName: Joi.string().default('Project Name'),
    tasks: Joi.array().items(Joi.object().keys({
        type: Joi.string().required(),
        env: Joi.string().default('*'),
        data: Joi.array().required()
    })).default([])
}).required();

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

        console.log("TASK TYPE", task.type);
        result = Joi.validate(task.args, tasks[task.type].STRUCT);
        result.error && errors.push(result.error);
        result.value && values.tasks.push(result.value);
    }

    return { error: errors, value: values };
}

/**
 * Gets tasks
 * @param  {object} config
 * @param  {type} type
 * @return {array}
 */
function getTasks(config, type) {
    var tasks = config.tasks;
    var projectName = config.projectName;
    var projectId = config.projectId;

    return tasks.filter(function (task) {
        var isType = task.type === type;
        var isEnv = task.env === '*' || !!argv.env === task.env;

        return isType && isEnv;
    }).map(function (task) {
        task = task.data;
        task.projectId = projectId;
        task.projectName = projectName;

        return task;
    });
}

/**
 * Initialize tasks
 * @param  {object} config
 */
function init(config) {
    var result = verify(JSON.parse(config));

    // Verify config
    if (result.error && result.error.length) {
        throw new Error(result.error);
    }

    // Set the right config
    config = result.value;

    gulp.task('project:clean', [], function (cb) {
        tasks['del'].fn(getTasks(config, 'copy'), cb);
    });

    gulp.task('project:styleguide', [], function () {
        tasks['styleguide'].fn(getTasks(config, 'styleguide'));
    });

    gulp.task('project:copy', [], function () {
        tasks['copy'].fn(getTasks(config, 'copy'));
    });

    gulp.task('project:sprite', [], function () {
        tasks['sprite'].fn(getTasks(config, 'sprite'));
    });

    gulp.task('project:css', ['project:sprite'], function () {
        tasks['style'].fn(getTasks(config, 'style'));
    });

    // Prepare build for dev
    gulp.task('project:build', ['project:clean', 'project:copy', 'project:css'], function () {
        tasks['script'].fn(getTasks(config, 'script'));
    });
}

//-------------------------------------
// Runtime

// Force dir to be the right one
process.chdir(process.env.PWD);

// Initialize
init(readFile(path.join(process.env.PWD, argv.config)));
