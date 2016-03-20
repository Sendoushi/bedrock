/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const fs = require('fs');
const path = require('path');
const modules = path.join(__dirname, '../node_modules');
const Promise = require(path.join(modules, 'bluebird'));
const postcss = require(path.join(modules, 'postcss'));
const sass = require(path.join(modules, 'node-sass'));
const autoprefixer = require(path.join(modules, 'autoprefixer'));
const cssnano = require(path.join(modules, 'cssnano'));
const pixrem = require(path.join(modules, 'pixrem'));

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
