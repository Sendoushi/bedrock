requirejs.config({
    baseUrl: '/app',
    paths: {
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore',
        'jquery': '../bower_components/jquery/dist/jquery',
        'text': '../bower_components/requirejs-text/text',
        'json': '../bower_components/requirejs-plugins/src/json'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            deps: [],
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    },
    packages: [
        {
            name: 'config',
            location: '../app/config',
            main: 'config'
        }
    ]
});
