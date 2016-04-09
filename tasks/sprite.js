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
const less = getModule('less', true);
const autoprefixer = getModule('autoprefixer', true);
const cssnano = getModule('cssnano', true);
const pixrem = getModule('pixrem', true);

// ---------------------------------------------
// Vars

// ---------------------------------------------
// Functions

/**
 * Sprites png files
 * @param  {array} arr
 * @param  {function} cb
 */
const spritePng = (arr, cb) => {
    if (!arr.length) {
        return cb();
    }

    // Generate our spritesheet
    Spritesmith.run({
        src: arr.map(function (val) {
            return val.src;
        }),
        algorithm: 'binary-tree'
    }, function (err, result) {
        if (err) {
            return cb(err);
        }

        var coordinates;
        var str = '';
        var file;
        var i;

        // Set the basis for the sprite icon
        str += '.sprite {\n';
        str += '    display: inline-block;\n';
        str += '    vertical-align: middle;\n';
        str += '    background: url(\'../images/sprites/' + path.basename(arr[0].dest) + '\') no-repeat;\n';
        str += '    font-size: 0;\n';
        str += '}\n';

        for (i = 0; i < arr.length; i += 1) {
            file = arr[i];
            coordinates = result.coordinates[file.src];

            str += '.sprite-' + file.name + ' {\n';
            str += '    width: ' + coordinates.width + 'px;\n';
            str += '    height: ' + coordinates.height + 'px;\n';
            str += '    background-position: -' + coordinates.x + 'px -' + coordinates.y + 'px;\n';
            str += '}\n';
        }

        // Output the image
        fs.writeFileSync(arr[0].dest, result.image);
        fs.writeFileSync(arr[0].style, str, 'utf8');

        // Finally callback
        cb();
    });
};

/**
 * Sprites svg files
 * @param  {array} arr
 * @param  {function} cb
 */
const spriteSvg = (arr, cb) => {
    if (!arr.length) {
        return cb();
    }

    // TODO: ...
    cb();
};

/**
 * Sprites files
 * @param  {array} files
 */
const spriteFiles = (files, cb) => {
    const filesData = files.map(val => {
        let ext = val.replace('.png', '') && 'png';
        ext = val.replace('.svg', '') && 'svg' || ext;

        // Now build the right object
        return {
            name: val.replace('.' + ext, ''), ext,
            src: path.join(val.src, val),
            dest: val.dest,
            style: val.style
        };
    });

    // Now sprites...
    spriteSvg(filesData.filter(val => val.ext === 'svg'), cb);
    spritePng(filesData.filter(val => val.ext === 'png'), cb);
};

// ---------------------------------------------
// Task

/**
 * The task method that will be exported
 * @param  {array} filesSrc
 * @return {promise}
 */
const task = (filesSrc) => {
    let promises;

    // Set the promises for each file
    promises = filesSrc.map(val => {
        // Render sass
        return (new Promise((resolve, reject) => {
            // Remove if exist
            if (fs.existsSync(val.dest)) {
                fs.unlink(val.dest, (err) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve();
                });
            } else {
                resolve();
            }
        }))
        .then(() => {
            return (new Promise((resolve, reject) => {
                // Callback for any kind of css file
                const done = 0;
                const cb = (err, data) => {
                    if (err) {
                        return reject(err);
                    }

                    done += 1;
                    (done === 2) && resolve(data);
                };

                // Get all files inside
                fs.readdir(opts.src, (err, files) => {
                    if (err) {
                        return reject(err);
                    }

                    // Now lets sprite the files
                    spriteFiles(files, cb);
                });
            }));
        }));
    });

    return Promise.all(promises);
};

// ---------------------------------------------
// Export

module.exports = task;
