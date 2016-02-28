const path = require('path');
const deepMixIn = require('mout/object/deepMixIn.js');
const env = process.argv[2];

const prodMapping = env === 'prod' ? {
    'react': 'node_modules/react/dist/react.min.js',
    'react-dom': 'node_modules/react-dom/dist/react-dom.min.js'
} : null;

module.exports = deepMixIn({
    'react': 'node_modules/react',
    'react-dom': 'node_modules/react-dom',
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
}, prodMapping);
