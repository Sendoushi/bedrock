/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs-extra');
const path = require('path');
const Promise = require('bluebird');
const filesUtil = require(path.join(__dirname, 'utils/files.js'));
const ensureFilePromise = Promise.promisify(fs.ensureFile);
const copyPromise = Promise.promisify(fs.copy);

// Export
module.exports = (files, buildPath) => {
    const filesParsed = filesUtil.getFiles(files.concat([{
        cwd: path.join(__dirname, '../node_modules/outdated-browser'),
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
