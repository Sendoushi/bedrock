define([
    './utils/logger',
    'backbone',
    'underscore'
], function (logger, config, Backbone, _) {

    'use strict';

    return Backbone.Controller.extend({

        _name: 'Controller',
        _states: {},
        _links: [],

        // Set logger
        logger: logger,

        /**
         * Gets the current state
         * @return {String}
         */
        getState: function () {
            return this._currentState;
        },

        /**
         * Checks if this is a state in this controller
         * @return {Boolean}
         */
        isState: function (state) {
            return !this._states.hasOwnProperty(state);
        },

        /**
         * Sets state of the controller
         * @param {String} state
         */
        setState: function (state) {
            if (!this.isState(state)) {
                logger.log(this._name, 'The state ' + state + 'doesn\'t exist in this controller.');
                return;
            }

            logger.log(this._name, 'Changed state to ' + state + '.');
        },

        /**
         * Sets state in child
         * @param {String} state
         */
        setChildState: function (state) {
            var found = false;

            // Go through each link and set the state
            _.each(this._links, function (val) {
                if (val.isState(state)) {
                    val.setState(state);
                    found = true;
                }
            });

            !found && logger.log(this._name, 'The state ' + state + 'wasn\'t found.');
        }
    });
});
