/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const path = require('path');
const glob = require('glob');

/**
 * Get files glob
 * @param  {array} files
 * @return {array}
 */
const getFiles = (files) => {
    // Get all files needed
    const newFiles = files.map(val => {
        const valCwd = val.cwd;
        const ignore = val.ignore;
        const pattern = val.src;
        const dest = val.dest;

        // Get files from pattern
        return glob.sync(pattern, { cwd: valCwd, ignore })
        .map(valGlob => {
            return {
                src: path.join(valCwd, valGlob),
                dest: path.join(dest, valGlob)
            };
        });
    })
    .reduce((val1, val2) => val1.concat(val2));

    return newFiles;
};

// Export
module.exports = { getFiles };
