/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const path = require('path');
const files = require(path.join(__dirname, 'utils/files.js'));
const getModule = files.getModule;
const spawn = require('child_process').spawn;

// Get modules
const Promise = require(getModule('bluebird'));

// ---------------------------------------------
// Vars

// ---------------------------------------------
// Functions

// ---------------------------------------------
// Task

/**
 * The task method that will be exported
 * @param  {array} filesSrc
 * @return {promise}
 */
const task = (filesSrc) => {
    const jekyllPath = filesSrc[0].jekyll || 'jekyll';
    const src = filesSrc[0].src;
    const dest = filesSrc[0].dest;
    const config = filesSrc[0].config;
    let promise;

    // Set the promise
    promise = new Promise((resolve, reject) => {
        let commandParams;
        let command;

        // Proceed with command
        commandParams = ['-s', src, '-d', dest, '--config', config];
        command = spawn(jekyllPath, ['build'].concat(commandParams));

        // Listen for changes
        command.stdout.on('data', (data) => {
            /* eslint-disable no-console */
            console.log('' + data);
            /* eslint-enable no-console */
        });

        command.stderr.on('data', (data) => {
            reject(data);

            /* eslint-disable no-console */
            console.error('' + data);
            /* eslint-enable no-console */
        });

        command.on('close', (code) => {
            if (code !== 0) {
                reject();
            } else {
                resolve();
            }
        });
    });

    return promise;
};

// ---------------------------------------------
// Export

module.exports = task;
