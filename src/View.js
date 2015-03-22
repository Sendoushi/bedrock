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

        /**
         * Unique id for the instance
         * @type {String}
         */
        cid: _.uniqueId('view'),

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

            this.$el.html(wrapper);
            this.$element = wrapper;

            this._hasRendered = true;

            return this;
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
