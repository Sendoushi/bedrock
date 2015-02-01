/*jshint node:true, es3:false, latedef:false*/
module.exports = function (grunt) {
    'use strict';

    var fs = require('fs'),
        path = require('path'),
        express   = require('express'),
        basePath = '../',
        webFolder = path.resolve(path.join(basePath, 'web/dev')),
        srcPath,
        dstPath;

    // Load all grunt tasks in node_modules
    grunt.file.expand(path.resolve(path.join(basePath, 'node_modules/grunt-*/tasks'))).forEach(grunt.loadTasks);

    // TODO: Set watcher because of pre processing and keeping alive
    // http://24ways.org/2013/grunt-is-not-weird-and-hard/

    grunt.initConfig({});

    // Set app
    grunt.registerTask('setapp', 'Sets app', function () {
        // TODO: This should copy
        // grunt.option('foo', 'bar');
        // grunt.task.run('copy');

        // TODO: Not working!
        // config
        // dstPath = path.resolve(path.join(basePath, 'app/config/config.json'));
        // if (!fs.existsSync(dstPath)) {
        //     srcPath = path.resolve(path.join(basePath, 'app/config/config.json.local'));
        //     fs.createReadStream(srcPath).pipe(fs.createWriteStream(dstPath));
        // }

        // app
        dstPath = path.resolve(path.join(webFolder, 'app'));
        try {
            fs.lstatSync(dstPath);
        } catch (err) {
            srcPath = path.resolve(path.join(basePath, 'app'));
            fs.symlinkSync(srcPath, dstPath);
        }

        // bower_components
        dstPath = path.resolve(path.join(webFolder, 'bower_components'));
        try {
            fs.lstatSync(dstPath);
        } catch (err) {
            srcPath = path.resolve(path.join(basePath, 'bower_components'));
            fs.symlinkSync(srcPath, dstPath);
        }
    });

    // Pre process sass
    grunt.registerTask('preprocess', 'Pre-process sass', function () {
        // TODO: Pre process less / sass
        // grunt.option('foo', 'bar');
        // grunt.task.run('sass');
        // Don't forget to check if there is need for this
    });

    // Create server
    grunt.registerTask('createserver', 'Creates server', function () {
        // Check if assets dir exists
        var site = express();

        // Serve utf-8 by default
        site.use(function (req, res, next) {
            res.charset = 'utf-8';
            next();
        });

        // Serve index
        site.get('/', function (req, res) {
            return res.sendFile(path.resolve(path.join(webFolder, 'index.html')));
        });

        // Serve files & folders
        site.get('/*', function (req, res) {
            // Get the requested file
            // If there are query parameters, remove them
            var file = path.resolve(path.join(webFolder, req.url.substr(1)));
            file = file.split('?')[0];

            fs.stat(file, function (err, stat) {
                // If file does not exists, serve 404 page
                if (err) {
                    if (err.code === 'ENOENT') {
                        // Backbone will take care of 404s
                        res.sendFile(path.resolve(path.join(webFolder, 'index.html')));
                    } else {
                        res.sendStatus(500);
                    }
                // If it exists and is a file, serve it
                } else if (stat.isFile()) {
                    res.sendFile(file);
                // Otherwise is a folder, so we deny the access
                } else {
                    res.sendStatus(403);
                }
            });
        });

        // Effectively listen
        site.listen(8000, 'localhost');
        console.log('Listening on http://localhost:8000 (dev environment)');
    });

    grunt.registerTask('server', ['setapp', 'preprocess', 'createserver', 'keepalive']);
};
