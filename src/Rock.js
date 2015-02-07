define([
    './utils/logger',
    'backbone',
    'underscore'
], function (logger, Backbone, _) {

    'use strict';

    return {
        cid: _.uniqueId('rock'),

        // Set logger
        _logger: logger,

        /**
         * Backbone extend function
         */
        extend: Backbone.Model.extend,

        /**
         * Announce to all application event
         * @param  {Object} options
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
         * Adopts the child to the router
         * @param  {*} child
         */
        adopt: function (child) {
            this._siblings = this._siblings || [];

            // Check if he is being double adopted
            if (child.getParent()) {
                this._logger.warn(this._name, 'Child already has a parent.');
                return this;
            }

            // Check if there is already and warn
            for (var i = 0; i < this._siblings.length; i += 1) {
                if (child.name === this._siblings[i].name && child.cid === this._siblings[i].cid) {
                    this._logger.warn(this._name, 'Child was already adopted by this.');
                    return this;
                }
            }

            this._siblings.push(child);

            // Child parent
            child.setParent(this);

            this._logger.log(this._name, 'Child was adopted.');
            return this;
        },

        /**
         * Unadopts the child to the router
         * @param  {*} child
         */
        unadopt: function (child) {
            if (!this._siblings || !this._siblings.length) {
                this._logger.warn(this._name, 'There are no adopted.');
                return this;
            }

            for (var i = 0; i < this._siblings.length; i += 1) {
                if (child.name === this._siblings[i].name && child.cid === this._siblings[i].cid) {
                    this._siblings.splice(i, 1);
                    child.setParent();

                    this._logger.log(this._name, 'Child was unadopted.');
                    return this;
                }
            }

            this._logger.warn(this._name, 'Child wasn\'t adopted by this.');
            return this;
        },

        /**
         * Sets a parent to a child
         * @param {*} parent
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
         * Gets the parent
         * @return {*}
         */
        getParent: function () {
            return this._parent;
        },

        /**
         * Destroys the controller siblings
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
         * Destroys the controller
         */
        destroy: function () {
            // TODO: this.prototype.destroy()
            this.stopListening();
            this.destroySiblings();
        },

        // ------------------------------------------------------

        /**
         * Make the announcement to all relatives
         * @param  {String} key
         * @param  {*} data
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
         * @param  {String} key
         * @param  {*} data
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
         * @param  {String} key
         * @param  {*} data
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
