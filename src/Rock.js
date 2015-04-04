define([
    'logger',
    'backbone',
    'underscore',
    'config'
], function (logger, Backbone, _, config) {

    'use strict';

    /**
    * Base for all Bedrock instances
    * @class Rock
    */

    return {
        /**
         * Class name
         * @type {String}
         * @private
         */
        _name: 'Rock',

        /**
         * Unique id for the Rock instance
         * @type {String}
         */
        cid: null,

        /**
         * Bedrock logger util module
         * @method _logger
         * @private
         */
        _logger: logger('Bedrock', config),

        /**
         * Backbone extend function
         * @method extend
         * @extends {Backbone.Model}
         */
        extend: Backbone.Model.extend,

        /**
         * Initialize
         * @method initialize
         * @return {this}
         */
        initialize: function () {
            this.cid = _.uniqueId(this._name);

            return this;
        },

        /**
         * Check if instance is the same
         * @method is
         * @param  {String} str Value to check
         * @return {Boolean}
         */
        is: function (str) {
            return str === this._name;
        },

        /**
         * Announce to all family the event
         * @method announce
         * @param  {String} key Key to be listened by events
         * @param  {Object} options Optionals a 'go' key with 'down', 'up' or 'null' and a 'data' key
         */
        announce: function (key, options) {
            options = options || {};

            if (options.go === 'down') {
                this._announceDown(key, options.data);
            } else if (options.go === 'up') {
                this._announceUp(key, options.data);
            } else {
                this._announceEveryone(key, options.data);
            }
        },

        // --------------------------------------------------

        /**
         * Adopts the child
         * @method adopt
         * @param  {*} child Child inheriting Rock
         * @return {child} Child that came as parameter
         */
        adopt: function (child) {
            this._siblings = this._siblings || [];

            // Check if he is being double adopted
            if (child.getParent()) {
                this._logger.warn(this._name, 'Child already has a parent.');
                return child;
            }

            // Check if there is already and warn
            for (var i = 0; i < this._siblings.length; i += 1) {
                if (child.name === this._siblings[i].name && child.cid === this._siblings[i].cid) {
                    this._logger.warn(this._name, 'Child was already adopted by this.');
                    return child;
                }
            }

            this._siblings.push(child);

            // Child parent
            child.setParent(this);

            this._logger.log(this._name, 'Child was adopted.');
            return child;
        },

        /**
         * Unadopts the child
         * @method unadopt
         * @param  {*} child Child inheriting Rock
         * @return {child} Child that came as parameter
         */
        unadopt: function (child) {
            if (!this._siblings || !this._siblings.length) {
                this._logger.warn(this._name, 'There are no adopted.');
                return child;
            }

            for (var i = 0; i < this._siblings.length; i += 1) {
                if (child.name === this._siblings[i].name && child.cid === this._siblings[i].cid) {
                    this._siblings.splice(i, 1);
                    child.setParent();

                    this._logger.log(this._name, 'Child was unadopted.');
                    return child;
                }
            }

            this._logger.warn(this._name, 'Child wasn\'t adopted by this.');
            return child;
        },

        /**
         * Sets a parent to a child
         * @method setParent
         * @param  {*} parent Parent inheriting Rock
         * @return {this} This Rock instance
         */
        setParent: function (parent) {
            if (this._parent) {
                this._logger.warn(this._name, 'This already have a parent!');
                return this;
            }

            this._parent = parent;

            this._logger.log(this._name, 'Parent was set.');
            return this;
        },

        /**
         * Returns the parent
         * @method getParent
         * @return {*} This instance parent
         */
        getParent: function () {
            return this._parent;
        },

        /**
         * Destroys the rock siblings
         * @method destroySiblings
         */
        destroySiblings: function () {
            if (!this._siblings || !this._siblings.length) {
                return this;
            }

            // Go through each sible and destroy
            _.each(this._siblings, function (val) {
                val.destroySiblings();
                val.destroy();
            }.bind(this));

            // Reset siblings
            this._siblings = null;
        },

        /**
         * Destroys the rock
         * @method destroy
         */
        destroy: function (arg) {
            this.stopListening();
            this.destroySiblings();

            // Call the parent destroy
            if (this._extendBackbone && this._extendBackbone.prototype && this._extendBackbone.prototype.destroy) {
                this._extendBackbone.prototype.destroy.call(this, arg);
            }
        },

        // ------------------------------------------------------

        /**
         * Make the announcement to all relatives
         * @method _announceDown
         * @param  {String} key Key to be listened on the events
         * @param  {*} data Data to be passed to the listeners
         * @private
         */
        _announceDown: function (key, data) {
            // Go through each sible and announce
            _.each(this._siblings, function (val) {
                // Make child announce to his children
                val.announce(key, { go: 'down', data: data });

                // Trigger the event
                val.trigger(key, data);
            }.bind(this));
        },

        /**
         * Make the announcement to all parents
         * @method  _announceUp
         * @param   {String} key Key to be listened on the events
         * @param   {*} data Data to be passed to the listeners
         * @private
         */
        _announceUp: function (key, data) {
            // TODO: When caught it shouldn't go up
            if (this._parent) {
                // Make parent announce to his parents'
                this._parent.announce(key, { go: 'up', data: data });

                // Trigger the event in this
                this.trigger(key, data);
            }
        },

        /**
         * Announce to everyone
         * @method  _announceEveryone
         * @param   {String} key Key to be listened on the events
         * @param   {*} data Data to be passed to the listeners
         * @private
         */
        _announceEveryone: function (key, data) {
            // Lets find the top parent
            if (this._parent) {
                return this._parent.announce(key, { data: data });
            }

            // It is the top of the line, tell everyone
            this._announceDown(key, data);
        }
    };
});
