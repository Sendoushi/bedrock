const path = require('path');
const modules = path.join(__dirname, '../../node_modules');

// Setup babel
require(path.join(modules, 'babel-core')).transform('code', {
    plugins: [
        path.join(modules, 'babel-plugin-transform-runtime')
    ]
});

module.exports = true;
