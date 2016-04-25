/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const files = require(path.join(__dirname, 'utils/files.js'));
const getModule = files.getModule;
const env = process.argv[2];

// Get modules
const Promise = getModule('bluebird', true);
const webpack = getModule('webpack', true);
const ProgressPlugin = getModule('webpack/lib/ProgressPlugin', true);
const deepMixIn = getModule('mout/object/deepMixIn.js', true);
const uglifyPath = getModule('uglify-js/bin/uglifyjs');

// ---------------------------------------------
// Vars

// Set the webpack config
const webpackConfig = {
    // webpack options
    // TODO: Bootstrap this to have promises and polyfill
    // require('babel-runtime/core-js/promise').default = require('bluebird');
    output: { filename: 'app.js' },
    stats: {
        // Configure the console output
        colors: true, modules: true, reasons: true
    },
    target: 'web',
    resolveLoader: { root: files.brModules },
    // TODO: Resolve bluebird
    resolve: {
        root: path.resolve(process.cwd()),
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            'src',
            'node_modules/bedrock/node_modules',
            'node_modules',
            'bower_components',
            files.brModules.replace(process.cwd() + '/', '')
        ]
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: env !== 'prod',
                presets: [
                    require.resolve('babel-preset-stage-2'),
                    require.resolve('babel-preset-es2015')
                ]
            },
            include: /(src|bedrock)/
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: env !== 'prod',
                presets: [
                    require.resolve('babel-preset-react'),
                    require.resolve('babel-preset-stage-2'),
                    require.resolve('babel-preset-es2015')
                ]
            },
            include: /(src|bedrock)/
        }, {
            test: /\.json?$/,
            loader: 'json-loader',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.html?$/,
            loader: 'babel-raw',
            exclude: /(node_modules|bower_components)/
        }]
    },
    externals: {},
    // TODO: Source map not working as it should
    devtool: env !== 'prod' && 'source-map',
    cache: env !== 'prod',
    watch: env !== 'prod',
    debug: env !== 'prod',
    plugins: env === 'prod' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ] : [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
    bail: true
};

// ---------------------------------------------
// Functions

/**
 * Progress plugin function
 * @param  {number} percentage
 * @param  {string} msg
 */
const progressFn = (percentage) => {
    const newPercent = Math.floor(percentage * 100);
    const lineSize = 100 / 2;
    let newMsg = `${newPercent}% `;
    let done = 0;
    let valDone;

    // Now set the line progress
    done = 0;
    while (lineSize > done) {
        valDone = Math.floor(newPercent / 2);
        newMsg += (done <= valDone) ? '=' : '.';
        done += 1;
    }

    // Set the spacing depending on the percentage
    if (newPercent < 10) {
        newMsg = `  ${newMsg}`;
    } else if (newPercent < 100) {
        newMsg = ` ${newMsg}`;
    }

    // Now lets log the progress
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(newMsg);

    if (percentage >= 1) {
        process.stdout.write('\n');
    }
};

/**
 * Compiles js file
 * @param  {array} file
 * @return {promise}
 */
const compileJs = (file) => {
    const buildPath = file[0].output.path;
    let config = deepMixIn({}, webpackConfig);
    let appConfig;
    let src;

    // Change entry point to include bootstrap
    file[0].entry = {
        file: [
            path.join(__dirname, 'base/bootstrap.js')
        ].concat(file[0].entry)
    };

    // Save config file in the build folder
    if (file[0].appConfig) {
        appConfig = require(file[0].appConfig);
        src = path.join(buildPath, (new Date()).getTime() + '.json');
        fs.writeFileSync(src, JSON.stringify(appConfig, null, 4), 'utf-8');

        // Now add to the mapping
        config = deepMixIn(config, {
            resolve: {
                alias: {
                    config: src
                }
            }
        });

        delete file[0].appConfig;
    }

    // Finally the last config!
    config = deepMixIn(config, file[0]);

    // Set the promise
    const promise = new Promise((resolve, reject) => {
        let compiler;

        // Set the webpack
        compiler = webpack(config);

        // Set plugins
        compiler.apply(new ProgressPlugin(progressFn));

        // Run now
        compiler.run(function (err, stats) {
            if (err) {
                reject(err);
            } else {
                resolve(buildPath);
            }
        });
    });

    return promise;
};

/**
 * Uglifies file
 * @param  {string} buildPath
 * @return {promise}
 */
const uglifyFn = (buildPath) => {
    const src = path.join(buildPath, 'app.js');
    let uglifyCommand;
    let uglifyPromise;

    // Shouldn't go further if not prod
    if (env !== 'prod') {
        return;
    }

    // Proceed with command
    uglifyCommand = spawn(uglifyPath, [src, '-o', src]);

    // Set the promise
    uglifyPromise = new Promise((resolve, reject) => {
        uglifyCommand.stderr.on('data', (data) => {
            reject(data);

            /* eslint-disable no-console */
            console.error('' + data);
            /* eslint-enable no-console */
        });

        uglifyCommand.on('close', (code) => {
            if (code !== 0) {
                reject();
            } else {
                resolve();
            }
        });
    });

    return uglifyPromise;
};

// ---------------------------------------------
// Task

/**
 * The task method that will be exported
 * @param  {array} file
 * @return {promise}
 */
const task = (file) => {
    // Set the promise
    return compileJs(file)
    .then(uglifyFn);
};

// ---------------------------------------------
// Export

module.exports = task;
