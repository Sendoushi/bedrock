define([
    'config',
    'states',
    'backbone'
], function (config, states, Backbone) {

    'use strict';

    return Backbone.Router.extend({
        /**
         * Initializes the router
         */
        initialize: function () {
            this._isRouting = config.routing;


            return this;
        }
    });
});
