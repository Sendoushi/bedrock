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
const styleTask = require(path.join(__dirname, 'style.js'));

// ---------------------------------------------
// Vars

// ---------------------------------------------
// Functions

/**
 * Create the tmp style
 * @param  {[type]} pathFolder [description]
 * @param  {Function} cb [description]
 * @return {[type]} [description]
 */
const tmpStyleFn = (pathFolder, globalFile, cb) => {
    let data = `@import ${globalFile}`;
    let tmpFile;

    // It may be a less file
    if (globalFile.replace('.less', '') !== '') {
        tmpFile = path.join(pathFolder, 'tmp.less');
    } else {
        tmpFile = path.join(pathFolder, 'tmp.scss');
    }

    console.log("TMPFILE", tmpFile, globalFile);

    // Lets save the file now
    fs.writeFile(tmpFile, data, 'utf8', (err) => {
        cb(err, tmpFile);
    });
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
        return (new Promise((resolve, reject) => {
            // Callback for any kind of css file
            const cb = (err, data) => {
                if (err) {
                    return reject(err);
                }

                resolve(data);
            };

            // Lets first create a tmp style file
            tmpStyleFn(val.path, val.global, cb);
        }))
        .then((tmpStyleFile) => {
            const files = [{
                src: tmpStyleFile,
                dest: path.join(file.path, 'main.css')
            }];

            return styleTask(files)
            .then(() => {
                return (new Promise((resolve, reject) => {
                    // Callback for any kind of css file
                    const cb = (err, data) => {
                        if (err) {
                            return reject(err);
                        }

                        resolve(data);
                    };

                    // Remove the tmpStyle file
                    fs.unlink(tmpStyleFile, cb);
                }));
            })
        });
    });

    return Promise.all(promises);
};

// ---------------------------------------------
// Export

module.exports = task;
