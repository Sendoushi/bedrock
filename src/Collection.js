define([
    'backbone',
    'underscore',
    './Rock'
], function (Backbone, _, Rock) {

    'use strict';

    /**
    * Bedrock Collection
    * @class Collection
    * @extends [Backbone.Collection, Rock]
    */

    return Backbone.Collection.extend(_.extend({}, Rock, {
        /**
         * Extends backbone from
         * @type {Object}
         */
        _extendBackbone: Backbone.Collection,

        /**
         * Class name
         * @type {String}
         * @private
         */
        _name: 'Collection',

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
