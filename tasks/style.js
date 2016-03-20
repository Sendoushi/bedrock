/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs');
const path = require('path');
const files = require(path.join(__dirname, 'utils/files.js'));
const getModule = files.getModule;
const env = process.argv[2];

// Get modules
const Promise = getModule('bluebird', true);
const postcss = getModule('postcss', true);
const sass = getModule('node-sass', true);
const autoprefixer = getModule('autoprefixer', true);
const cssnano = getModule('cssnano', true);
const pixrem = getModule('pixrem', true);

// Export
module.exports = (filesSrc) => {
    let promises;

    // Set the promises for each file
    promises = filesSrc.map(val => {
        // Render sass
        return (new Promise((resolve, reject) => {
            sass.render({
                file: val.src,
                // Needed for source map
                outFile: val.dest,
                sourceMap: env !== 'prod' // TODO: Not working!
            }, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // Resolve with the right css
                    resolve('' + result.css);
                }
            });
        }))
        .then(data => {
            const autoprefixerOpts = autoprefixer({ browsers: 'last 2 versions, IE 11' });
            const postcssPlugins = [pixrem, autoprefixerOpts, cssnano];

            // Next are only for prod
            if (env !== 'prod') {
                return data;
            }

            // Take care of postcss
            return postcss(postcssPlugins).process(data)
            .then((postData) => postData.css);
        })
        .then(data => {
            // Write the file
            fs.writeFileSync(val.dest, data);
        });
    });

    return Promise.all(promises);
};
