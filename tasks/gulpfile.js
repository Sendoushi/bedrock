/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// Import packages
var path = require('path');
var gulp = require('gulp');
var util = require('gulp-util');
var del = require('del');
var Joi = require('joi');

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
    var results = [];
    var task;
    var i;

    // General config
    results.push(Joi.validate(config, STRUCT));

    // Now the tasks
    for (i = 0; i < config.tasks.length; i += 1) {
        task = config.tasks[i];
        results.push(Joi.validate(task.args, tasks[task.type].STRUCT));
    }

    // Lets parse the results
    results = results.map(function (val) {
        return val.error;
    }).filter(function (val) {
        return !!val;
    });

    return (results.length) ? results : false;
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
        var isEnv = task.env === '*' || !!util.env[task.env];

        return isType && isEnv;
    }));
}

/**
 * Initialize tasks
 * @param  {object} config
 */
function init(config) {
    var isOk = verify(config);

    // Verify config
    if (!isOk) {
        throw new Error(isOk);
    }

    gulp.task('dist:clean', [], function (cb) {
        if (util.env.production || util.env.prod) {
            del([path.join(config.srcPath, '*')])
            .then(cb.bind(null, null, null));
        } else {
            cb();
        }
    });

    gulp.task('dist:copy', [], function () {
        tasks['copy'].fn(getTasks(config.tasks, 'copy'));
    });

    gulp.task('dist:sprite', [], function () {
        tasks['sprite'].fn(getTasks(config.tasks, 'sprite'));
    });

    gulp.task('dist:css', ['dist:sprite'], function () {
        tasks['style'].fn(getTasks(config.tasks, 'style'));
    });

    // Prepare build for dev
    gulp.task('dist:build', ['dist:clean', 'dist:copy', 'dist:css'], function () {
        tasks['script'].fn(getTasks(config.tasks, 'script'));
    });
}

/**
 * Example of usage
 *
 var config = {
    projectName: 'foo',
    tasks: [{
        "type": "copy",
        "env": "*",
        "args": [
            { "src": "./src/imgs/**\/*", "dest": "./build/imgs" },
            { "src": "./src/**\/*.php", "dest": "./build" }
        ]
    }, {
        "type": "style",
        "env": "dev",
        "args": [
            {
                "src": "./src/css/main.scss",
                "dest": "./build/style.css",
                "options": {
                    "sourceMap": true,
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
        "args": [{
            "src": "$SOURCE/css/main.scss",
            "dest": "$BUILD/style.css",
            "options": {
                "minify": true,
                "autoprefixer": [
                    "last 2 versions",
                    "iOS >= 7",
                    "Android >= 5",
                    "IE >= 11"
                ],
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
        "args": [{
            "src": "./src/script/main.js",
            "dest": "./build/app.js",
            "options": {
                "output": {
                    "filename": "app.js",
                },
                "target": "web",
                "externals": { "jquery": "jQuery" },
                "devtool": "source-map",
                "bail": true,
                "debug": true,
                "resolve": {
                    "extensions": ["", ".js"],
                    "modulesDirectories": ["./node_modules", "./src/script"]
                },
                "module": {
                    "loaders": [{
                        "test": "/\\.json?$/",
                        "loader": "json-loader",
                        "exclude": "/(node_modules|bower_components)/"
                    }]
                },
                "plugins": [{
                    "name": "define",
                    "args": [{
                        "IS_BROWSER": true
                    }]
                }]
            },
        }]
    }], {
        "type": "script",
        "env": "prod",
        "args": [{
            "src": "./src/script/main.js",
            "dest": "./build/app.js",
            "options": {
                "output": {
                    "filename": "app.js",
                },
                "target": "web",
                "externals": { "jquery": "jQuery" },
                "cache": true,
                "bail": true,
                "debug": true,
                "resolve": {
                    "extensions": ["", ".js"],
                    "modulesDirectories": ["./node_modules", "./src/script"]
                },
                "module": {
                    "loaders": [{
                        "test": "/\\.json?$/",
                        "loader": "json-loader",
                        "exclude": "/(node_modules|bower_components)/"
                    }]
                },
                "plugins": [{
                    "name": "define",
                    "args": [{
                        "IS_BROWSER": true
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
