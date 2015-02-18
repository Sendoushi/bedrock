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
         * Class name
         * @type {String}
         * @private
         */
        _name: 'Model',

        /**
         * Unique id for the instance
         * @type {String}
         */
        cid: _.uniqueId('model'),

        // --------------------------------

        /**
         * Bedrock model initialize
         * @method initialize
         * @return {this}
         */
        initialize: function () {
            return this;
        }
    }));
});
