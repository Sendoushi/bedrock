const path = require('path');

module.exports = {
    'redux': 'node_modules/redux',
    'riot': 'node_modules/riot',
    'page/page.js': 'node_modules/page/page.js',

    'bedrock/icon': path.join(__dirname, '../src/utils/icon.js'),
    'bedrock/iconReact': path.join(__dirname, '../src/utils/iconReact.jsx'),
    'bedrock/is': path.join(__dirname, '../src/utils/is.js'),
    'bedrock/outdatedbrowser': path.join(__dirname, '../src/utils/outdatedbrowser.js'),

    'bedrock/actions': path.join(__dirname, '../src/actions.js'),
    'bedrock/router': path.join(__dirname, '../src/router.js'),
    'bedrock/store': path.join(__dirname, '../src/store.js'),

    'bedrock/component': path.join(__dirname, '../src/component.js')
};
