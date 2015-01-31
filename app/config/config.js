define([
    'json!./config.json'
], function (config) {
    'use strict';

    var env = config.env || 'dev',
        configObj = config[env];

    // Set the env
    configObj.env = env;

    return configObj;
});
