define([
    'backbone',
    'underscore',
    './Rock'
], function (Backbone, _, Rock) {

    'use strict';

    // Change templating interpolate
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    /**
    * Bedrock View
    * @class View
    * @extends [Backbone.View, Rock]
    */

    return Backbone.View.extend(_.extend({}, Rock, {
        /**
         * Extends backbone from
         * @type {Object}
         */
        _extendBackbone: Backbone.View,

        /**
         * Class name
         * @type {String}
         * @private
         */
        _name: 'View',

        // --------------------------------

        /**
         * Initialize
         * @method initialize
         * @param  {Object} options
         * @return {this}
         */
        initialize: function (options) {
            Rock.initialize.call(this);

            // Set the element
            options && options.el && this.setElement(options.el);

            return this;
        },

        /**
         * Render
         * @method render
         * @param  {Object} data Object to be rendered
         * @return {this}
         */
        render: function (data) {
            if (!this.$el) {
                this._logger.error(this._name, 'You need to set the element first.');
                return this;
            }

            // Warn that this has been rendered
            this._hasRendered && this._logger.warn(this._name, 'This view has been rendered before. Are you sure?');

            var wrapper = this._createBasicElement();

            // Check if there is a template
            if (this._template) {
                wrapper.append(this._template(data));
            }

            this.$el.append(wrapper);
            this.$element = wrapper;

            this._hasRendered = true;

            return this;
        },

        /**
         * Method from backbone to remove events
         * @method undelegateEvents
         * @return {this}
         */
        undelegateEvents: function () {
            // TODO: Check why it doesn't have a $el
            if (!this.$el) {
                return this;
            }

            return this._extendBackbone.prototype.undelegateEvents.call(this);
        },

        // -------------------------------

        /**
         * Creates a basic element for the view
         * @method  _createBasicElement
         * @return  {jQuery} The jQuery result
         * @private
         */
        _createBasicElement: function () {
            var attrs = _.extend({}, _.result(this, 'attributes'));

            if (this.id) {
                attrs.id = _.result(this, 'id');
            }

            if (this.className) {
                attrs['class'] = _.result(this, 'className');
            }

            return Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        },

        // -------------------------------
        // Changes to backbone methods

        /**
         * Removes the _ensureElement from Backbone because we want to do it in the render
         * @method  _ensureElement
         * @private
         */
        _ensureElement: function () {
            // Removed all because i want to this in the render
        }
    }));
});
