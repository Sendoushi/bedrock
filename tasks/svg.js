/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const SVGO = require('svgo');
const filesUtil = require(path.join(__dirname, 'utils/files.js'));

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
module.exports = (files) => {
    const filesParsed = filesUtil.getFiles(files);
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
