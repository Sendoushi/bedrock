/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const path = require('path');
const files = require(path.join(__dirname, 'utils/files.js'));
const getModule = files.getModule;

// Get modules
const fs = getModule('fs-extra', true);
const Promise = getModule('bluebird', true);
const ensureFilePromise = Promise.promisify(fs.ensureFile);
const copyPromise = Promise.promisify(fs.copy);

// ---------------------------------------------
// Vars

// ---------------------------------------------
// Functions

// ---------------------------------------------
// Task

/**
 * The task method that will be exported
 * @param  {array} filesSrc
 * @param  {string} buildPath
 * @return {promise}
 */
const task = (filesSrc, buildPath) => {
    const filesParsed = files.getFiles(filesSrc.concat([{
        cwd: getModule('outdated-browser'),
        src: 'outdatedbrowser/lang/en.html',
        dest: buildPath
    }]));
    const promises = [];

    // Set the promises
    filesParsed.forEach(val => {
        let promise;

        // Copy the files
        if (fs.lstatSync(val.src).isDirectory()) {
            return;
        }

        promise = ensureFilePromise(val.dest)
        .then(() => copyPromise(val.src, val.dest));

        // Add the promise to be set
        promises.push(promise);
    });

    return Promise.all(promises);
};

// ---------------------------------------------
// Export

module.exports = task;
