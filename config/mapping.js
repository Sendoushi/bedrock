const path = require('path');
const deepMixIn = require('mout/object/deepMixIn.js');
const files = require(path.join(__dirname, '../tasks/utils/files.js'));
const getModule = files.getModule;
const env = process.argv[2];

const prodMapping = env === 'prod' ? {
    'react': getModule('react/dist/react.min.js'),
    'react-dom': getModule('react-dom/dist/react-dom.min.js')
} : null;

module.exports = deepMixIn({
    'react': getModule('react'),
    'react-dom': getModule('react-dom'),
    'redux': getModule('redux'),
    'page/page.js': getModule('page/page.js'),

    'bedrock/icon': path.join(__dirname, '../src/icon/icon.js'),
    'bedrock/is': path.join(__dirname, '../src/utils/is.js'),
    'bedrock/string': path.join(__dirname, '../src/utils/string.js'),
    'bedrock/outdatedbrowser': path.join(__dirname, '../src/utils/outdatedbrowser.js'),

    'bedrock/actions': path.join(__dirname, '../src/actions.js'),
    'bedrock/router': path.join(__dirname, '../src/router.js'),
    'bedrock/store': path.join(__dirname, '../src/store.js'),
    'bedrock/component': path.join(__dirname, '../src/component.js')
}, prodMapping);
