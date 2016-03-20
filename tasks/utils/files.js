/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs');
const path = require('path');
const cwdModules = path.join(process.cwd(), 'node_modules');
const brModules = path.join(__dirname, '../../node_modules');

/**
 * Gets the right module
 * @param  {string} moduleSrc
 * @param  {boolean} setRequire
 * @return {object}
 */
const getModule = (moduleSrc, setRequire) => {
    const cwdModule = path.join(cwdModules, moduleSrc);
    let module = path.join(brModules, moduleSrc);

    // Lets require stuff...
    if (setRequire) {
        try {
            module = require(module);
        } catch (err) {
            module = require(cwdModule);
        }
    } else {
        module = !!fs.existsSync(module) ? module : cwdModule;
    }

    return module;
};

// Get modules
const glob = getModule('glob', true);

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
module.exports = { getFiles, getModule, cwdModules, brModules };
