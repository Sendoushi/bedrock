/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs');
const path = require('path');
const files = require(path.join(__dirname, 'utils/files.js'));
const getModule = files.getModule;

// Get modules
const Promise = getModule('bluebird', true);
const SVGO = getModule('svgo', true);

const svgo = new SVGO({
    plugins: [
        { removeViewBox: true },
        { removeUselessStrokeAndFill: true },
        { removeEmptyAttrs: true },
        { collapseGroups: true },
        { minifyStyles: true },
        { removeMetadata: true },
        { removeTitle: true },
        { removeUnkownsAndDefaults: true },
        { removeUselessDefs: true },
        { removeUselessStrokeAndFill: true }
    ]
});

// Export
module.exports = (filesSrc) => {
    const filesParsed = files.getFiles(filesSrc);
    let promises;

    // TODO: Don't know if it is working

    // Set the promises for each file
    promises = filesParsed.map(val => {
        // Render sass
        return (new Promise((resolve, reject) => {
            // Read the file
            fs.readFile(val.src, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }))
        .then(data => {
            return (new Promise((resolve, reject) => {
                svgo.optimize(data, (result) => {
                    if (result.error) {
                        reject(result.error);
                    } else {
                        resolve(result.data);
                    }
                });
            }));
        })
        .then(data => {
            // Write the file
            fs.writeFileSync(val.dest, data);
        });
    });

    return Promise.all(promises);
};
