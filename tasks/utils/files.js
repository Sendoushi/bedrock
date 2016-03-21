/* eslint-disable no-var */
var fs = require('fs');
var path = require('path');
var cwdModules = path.join(process.cwd(), 'node_modules');
var brModules = path.join(__dirname, '../../node_modules');

/**
 * Gets the right module
 * @param  {string} moduleSrc
 * @param  {boolean} setRequire
 * @return {object}
 */
var getModule = function (moduleSrc, setRequire) {
    var cwdModule = path.join(cwdModules, moduleSrc);
    var module = path.join(brModules, moduleSrc);

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
var glob = getModule('glob', true);

/**
 * Get files glob
 * @param  {array} files
 * @return {array}
 */
var getFiles = function (files) {
    // Get all files needed
    var newFiles = files.map(function (val) {
        var valCwd = val.cwd;
        var ignore = val.ignore;
        var pattern = val.src;
        var dest = val.dest;

        // Get files from pattern
        return glob.sync(pattern, { cwd: valCwd, ignore })
        .map(function (valGlob) {
            return {
                src: path.join(valCwd, valGlob),
                dest: path.join(dest, valGlob)
            };
        });
    })
    .reduce(function (val1, val2) {
        return val1.concat(val2);
    });

    return newFiles;
};

// Export
module.exports = { getFiles, getModule, cwdModules, brModules };
/* eslint-enable no-var */
