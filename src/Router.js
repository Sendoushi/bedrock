define([
    'config',
    'states',
    'backbone',
    './Rock',
    'underscore'
], function (config, states, Backbone, Rock, _) {

    'use strict';

    /**
    * Bedrock Router
    * @class Router
    * @extends [Backbone.Router, Rock]
    */

    return Backbone.Router.extend(_.extend({}, Rock, {
        /**
         * Extends backbone from
         * @type {Object}
         */
        _extendBackbone: Backbone.Router,

        /**
         * Class name
         * @type {String}
         * @private
         */
        _name: 'Router',

        /**
         * Unique id for the instance
         * @type {String}
         */
        cid: _.uniqueId('router'),

        /**
         * The original routes set by the user with a 404 default
         * @type {Object}
         */
        _routesOriginal: {
            '404': 'notFound'
        },

        /**
         * Routes to be populated and used by Backbone
         * @type {Object}
         */
        routes: {},

        /**
         * Router constructor
         * @constructor
         * @method constructor
         * @param {Object} options Options to be passed to the Backbone router
         */
        constructor: function (options) {
            // Build routes
            this._routesOriginal = _.extend(this._routesOriginal, states);
            _.each(this._routesOriginal, function (val, key) {
                this.routes[key] = this._stateManager.bind(this, val, key);
            }.bind(this));

            // Run the backbone constructor
            Backbone.Router.prototype.constructor.call(this, options);
        },

        /**
         * Bedrock router initialize
         * @method initialize
         * @return {this}
         */
        initialize: function () {
            Backbone.Router.prototype.initialize.apply(this, arguments);

            return this;
        },

        /**
         * Starts the routing
         * @method start
         */
        start: function () {
            !this._siblings.length && this._logger.warn(this._name, 'There are no siblings. State won\'t be handled.');

            // Listens for the changes
            var root = config.baseUrl && '/' + config.baseUrl + '/',
                historyObj = { pushState: true },
                historyStart;

            if (root) { historyObj.root = root; }

            historyStart = Backbone.history.start(historyObj);

            // No history is 404
            !historyStart && this.navigate('404', { trigger: true });
        },

        // -----------------------------------

        /**
         * Manages the states of the routes
         * @method  _stateManager
         * @param   {String} state State to go to
         * @param   {Route} route Route used for the state
         * @private
         */
        _stateManager: function (state, route) {
            var routeArr,
                routeAdded,
                args,
                params,
                stateParsed,
                hasParams,
                paramsObj,
                i;

            // TODO: Support * and ? in the routes

            // Take care of routes besides the index one
            if (route !== '') {
                routeArr = route.split('/');
                routeAdded = [];
                args = arguments;

                // Get all params
                i = 1;
                params = routeArr.map(function (val) {
                    // Check if there is a param in the route bit
                    if (val.replace(':', '') === val) {
                        return;
                    }

                    i += 1;
                    return {
                        param: val.replace(':', ''),
                        value: args[i]
                    };
                }).filter(function (val) { return !!val; });

                // Build the routes added
                _.each(routeArr, function (val, i) {
                    routeAdded.push((i !== 0 && (routeAdded[i - 1] + '/') || '') + routeArr[i]);
                });

                // Go through each from the child
                _.each(routeAdded.reverse(), function (routeUrl, i) {
                    // State may not exist
                    if (!this._routesOriginal[routeUrl]) {
                        return;
                    }

                    // Map to the right params
                    paramsObj = {};
                    hasParams = !!(params.map(function (val) {
                        // Check if there is a param in the route
                        if (routeUrl.replace(':' + val.param, '') === routeUrl) {
                            return false;
                        }

                        // Add the param
                        paramsObj[val.param] = val.value;

                        // Used later to see if there are params in the route
                        return true;
                    }).filter(function (val) { return val; }).length);

                    // Build the state object
                    stateParsed = {
                        name: this._routesOriginal[routeUrl],
                        route: routeUrl,
                        params: hasParams && paramsObj || undefined,
                        child: stateParsed
                    };
                }.bind(this));
            }

            // Add the index
            stateParsed = {
                name: this._routesOriginal[''],
                route: '',
                child: stateParsed
            };

            // Handle state
            this._handleState(stateParsed);
        },

        /**
         * Handles the state passed
         * @method  _handleState
         * @param   {Object} state State to be passed to the siblings
         * @private
         */
        _handleState: function (state) {
            !this._siblings.length && this._logger.warn(this._name, 'There are no siblings. State won\'t be handled.');

            _.each(this._siblings, function (child) {
                child.setState(state);
            });

            // Finally trigger the statechange
            this.trigger('statechange', state);
        }
    }));
});
