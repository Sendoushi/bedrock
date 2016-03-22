/* eslint-disable no-var */
var path = require('path');

// Get modules
var files = require(path.join(__dirname, 'files.js'));
var getModule = files.getModule;
var core = getModule('babel-core/register', true);
var tR = getModule('babel-plugin-transform-runtime');

module.exports = core({
    presets: [
        require.resolve(getModule('babel-preset-stage-2')),
        require.resolve(getModule('babel-preset-es2015'))
    ],
    plugins: [tR]
});

/* eslint-enable no-var */
