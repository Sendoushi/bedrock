define([
    'backbone',
    'underscore',
    './Rock'
], function (Backbone, _, Rock) {

    'use strict';

    /**
     * Constructor of controller
     */
    var Controller = function () {
        return this.initialize.apply(this, arguments);
    };

    _.extend(Controller.prototype, Rock, Backbone.Events, {
        _name: 'Controller',
        _states: {},

        cid: _.uniqueId('controller'),

        // --------------------------------

        /**
         * Controller initialize
         * @param  {Obejct} options
         * @return {this}
         */
        initialize: function () {
            return this;
        },

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
                return this._logger.warn(this._name, 'The state "' + state + '" doesn\'t exist in this controller.');
            }

            // Set the state
            this[this._states[state.name]](state);
            this._logger.log(this._name, 'Changed state to "' + state.name + '".');

            // Set child state
            state.child && this.setChildState(state.child);
        },

        /**
         * Sets state in child
         * @param {String} state
         */
        setChildState: function (state) {
            var found = false;

            // Go through each sible and set the state
            _.each(this._siblings, function (val) {
                if (val.isState(state)) {
                    val.setState(state);
                    found = true;
                }
            });

            !found && this._logger.warn(this._name, 'The state "' + state.name + '" wasn\'t found.');
        }
    });

    // Set the extend function
    Controller.extend = Controller.prototype.extend;

    return Controller;
});
