define([
    'backbone',
    'underscore',
    './Rock'
], function (Backbone, _, Rock) {

    'use strict';

    /**
    * Bedrock Model
    * @class Model
    * @extends [Backbone.Model, Rock]
    */

    return Backbone.Model.extend(_.extend({}, Rock, {
        /**
         * Extends backbone from
         * @type {Object}
         */
        _extendBackbone: Backbone.Model,

        /**
         * Class name
         * @type {String}
         * @private
         */
        _name: 'Model',

        // --------------------------------

        /**
         * Bedrock model initialize
         * @method initialize
         * @return {this}
         */
        initialize: function () {
            Rock.initialize.call(this);

            return this;
        }
    }));
});
