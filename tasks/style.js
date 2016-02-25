/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs');
const Promise = require('bluebird');
const postcss = require('postcss');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pixrem = require('pixrem');

const env = process.argv[2];

// Export
module.exports = (files) => {
    let promises;

    // Set the promises for each file
    promises = files.map(val => {
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
