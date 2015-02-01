define([
    'config',
    'states',
    'backbone',
    'underscore'
], function (config, states, Backbone, _) {

    'use strict';

    return Backbone.Router.extend({
        routes: {
            '404': 'notFound'
        },

        /**
         * Foundation router constructor
         */
        constructor: function (options) {
            // Build routes (default)
            _.each(this.routes, function (val, key) {
                this.routes[key] = this._stateManager.bind(this, val, key);
            }.bind(this));

            // Build routes (states)
            _.each(states, function (val, key) {
                this.routes[key] = this._stateManager.bind(this, val, key);
            }.bind(this));

            // Run the backbone constructor
            Backbone.Router.prototype.constructor.call(this, options);
        },

        /**
         * Starts the router
         */
        start: function () {
            // Listens for the changes
            var historyStart = Backbone.history.start({ pushState: true });

            // No history is 404
            !historyStart && this.navigate('404', { trigger: true });
        },

        // -----------------------------------

        /**
         * Manages the states of the routes
         */
        _stateManager: function (state, route) {
            // TODO: Don't forget to do child states
            this.trigger('statechange', {
                name: state,
                route: route,
                params: arguments
            });
        }
    });
});
