const path = require('path');
const files = require(path.join(__dirname, 'files.js'));
const getModule = files.getModule;

// Get modules
const core = getModule('babel-core', true);
const tR = getModule('babel-plugin-transform-runtime');

// Setup babel
core.transform('code', { plugins: [tR] });

module.exports = true;
