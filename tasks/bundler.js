/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const spawn = require('child_process').spawn;
const webpack = require('webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const cwd = process.cwd();
const env = process.argv[2];

let webpackConfig;
let progressFn;

// Set the webpack config
webpackConfig = {
    // webpack options
    output: { filename: 'app.js' },
    stats: {
        // Configure the console output
        colors: true, modules: true, reasons: true
    },
    target: 'web',
    module: {
        loaders: [{
            test: /\.js?$/, loader: 'babel', query: { presets: ['es2015'] },
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.json?$/, loader: 'json',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.html?$/, loader: 'raw',
            exclude: /(node_modules|bower_components)/
        }]
    },
    externals: {},
    // TODO: Source map not working as it should
    devtool: env !== 'prod' && 'source-map',
    cache: env === 'prod',
    watch: env !== 'prod',
    debug: env !== 'prod',
    plugins: env === 'prod' && [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ],
    bail: true
};

/**
 * Progress plugin function
 * @param  {number} percentage
 * @param  {string} msg
 */
progressFn = (percentage) => {
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

// Export
module.exports = (file) => {
    const buildPath = file[0].dest;

    // Set files
    webpackConfig.entry = file[0].src;
    webpackConfig.output.path = buildPath;
    webpackConfig.resolve = file[0].resolve;
    webpackConfig.resolveLoader = file[0].resolveLoader;

    // Set the promise
    const promise = new Promise((resolve, reject) => {
        let compiler;

        // Set the webpack
        compiler = webpack(webpackConfig);

        // Set plugins
        compiler.apply(new ProgressPlugin(progressFn));

        // Run now
        compiler.run(function (err, stats) {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    })
    .then(() => {
        const src = path.join(buildPath, 'app.js');
        let uglifyCommand;
        let uglifyPromise;
        let uglifyPath;

        // Shouldn't go further if not prod
        if (env !== 'prod') {
            return;
        }

        // Lets check the uglify path
        uglifyPath = path.join(__dirname, '../node_modules/uglify-js/bin/uglifyjs');

        if (!fs.existsSync(uglifyPath)) {
            uglifyPath = path.join(cwd, 'node_modules/uglify-js/bin/uglifyjs');
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
    });

    return promise;
};
