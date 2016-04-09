/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs');
const path = require('path');
const files = require(path.join(__dirname, 'utils/files.js'));
const getModule = files.getModule;
const env = process.argv[2];

// Get modules
const Promise = getModule('bluebird', true);
const postcss = getModule('postcss', true);
const sass = getModule('node-sass', true);
const less = getModule('less', true);
const autoprefixer = getModule('autoprefixer', true);
const cssnano = getModule('cssnano', true);
const pixrem = getModule('pixrem', true);

// ---------------------------------------------
// Vars

// ---------------------------------------------
// Functions

/**
 * Gets scss from source
 * @param  {object} val
 * @param  {function} cb
 */
const getScss = (val, cb) => {
    sass.render({
        file: val.src,
        // Needed for source map
        outFile: val.dest,
        sourceMap: env !== 'prod' // TODO: Not working!
    }, (err, result) => {
        cb(err, !err && ('' + result.css));
    });
};

/**
 * Gets less from source
 * @param  {object} val
 * @param  {function} cb
 */
const getLess = (val, cb) => {
    fs.readFile(val.src, (err, data) => {
        if (err) {
            return cb(err);
        }

        // Compile the less files
        less.render(data.toString(), {
            // TODO: Check this!
            paths: val.paths, // Specify search paths for @import directives
            sourceMap: env !== 'prod' ? { sourceMapFileInline: true } : null,
            compress: env === 'prod'
        }, function (err, result) {
            cb(err, !err && ('' + result.css));
        });
    });
};

/**
 * Gets css from source
 * @param  {object} val
 * @param  {function} cb
 */
const getCss = (val, cb) => {
    fs.readFile(val.src, (err, result) => {
        cb(err, !err && ('' + result));
    });
};

/**
 * Post process the css
 * @param  {object} data
 * @return {promise}
 */
const postProcess = (data) => {
    const autoprefixerOpts = autoprefixer({ browsers: 'last 2 versions, IE 11' });
    const postcssPlugins = [pixrem, autoprefixerOpts, cssnano];

    // Next are only for prod
    if (env !== 'prod') {
        return data;
    }

    // Take care of postcss
    return postcss(postcssPlugins).process(data)
    .then((postData) => postData.css);
};

// ---------------------------------------------
// Task

/**
 * The task method that will be exported
 * @param  {array} filesSrc
 * @return {promise}
 */
const task = (filesSrc) => {
    let promises;

    // Set the promises for each file
    promises = filesSrc.map(val => {
        // Render sass
        return (new Promise((resolve, reject) => {
            // Remove if exist
            if (fs.existsSync(val.dest)) {
                fs.unlink(val.dest, (err) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve();
                });
            } else {
                resolve();
            }
        }))
        .then(() => {
            return (new Promise((resolve, reject) => {
                // Callback for any kind of css file
                const cb = (err, data) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(data);
                };

                if (val.src.replace('.scss', '') !== '' || val.src.replace('.sass', '') !== '') {
                    getScss(val, cb);
                } else if (val.src.replace('.less', '') !== '') {
                    getLess(val, cb);
                } else {
                    getCss(val, cb);
                }
            }));
        }))
        .then(postProcess)
        .then(data => {
            // Write the file
            fs.writeFileSync(val.dest, data);
        });
    });

    return Promise.all(promises);
};

// ---------------------------------------------
// Export

module.exports = task;
