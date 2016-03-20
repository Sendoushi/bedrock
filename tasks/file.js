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

// Export
module.exports = (filesSrc, buildPath) => {
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
        promise = ensureFilePromise(val.dest)
        .then(copyPromise.bind(null, val.src, val.dest));

        // Add the promise to be set
        promises.push(promise);
    });

    return Promise.all(promises);
};
