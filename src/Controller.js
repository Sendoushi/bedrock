define([
    'underscore',
    './BigRock'
], function (_, BigRock) {

    'use strict';

    /**
     * Bedrock Controller
     * @class Controller
     * @extends [BigRock]
     * @constructor
     * @return {this}
     */
    return BigRock.extend({
        /**
         * Class name
         * @type {String}
         * @private
         */
        _name: 'Controller',

        /**
         * States object of the instance
         * @type {Object}
         */
        _states: {},

        /**
         * Unique id for the instance
         * @type {String}
         */
        cid: _.uniqueId('controller'),

        // --------------------------------

        /**
         * Initialize
         * @method initialize
         * @return {this}
         */
        initialize: function () {
            return this;
        },

        /**
         * Returns the current state
         * @method getState
         * @return {Object} The current state
         */
        getState: function () {
            return this._currentState;
        },

        /**
         * Checks if this is a state in this instance
         * @method isState
         * @param  {String} state Key to check in the states
         * @return {Boolean}
         */
        isState: function (state) {
            return !this._states.hasOwnProperty(state);
        },

        /**
         * Sets state of the controller
         * @method setState
         * @param  {String} state Key to set the state
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
         * @method setChildState
         * @param  {String} state Key to be set in the child
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
});