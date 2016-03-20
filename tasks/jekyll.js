/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const path = require('path');
const modules = path.join(__dirname, '../node_modules');
const Promise = require(path.join(modules, 'bluebird'));
const spawn = require('child_process').spawn;

// Export
module.exports = (files) => {
    const src = files[0].src;
    const dest = files[0].dest;
    const config = files[0].config;
    let promise;

    // Set the promise
    promise = new Promise((resolve, reject) => {
        let commandParams;
        let command;

        // Proceed with command
        commandParams = ['-s', src, '-d', dest, '--config', config];
        command = spawn('jekyll', ['build'].concat(commandParams));

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
