define([
    'backbone',
    'underscore',
    './Rock'
], function (Backbone, _, Rock) {

    'use strict';

    /**
     * Bedrock BigRock
     * @class BigRock
     * @extends [Rock, Backbone.Events]
     * @constructor
     * @return {this}
     */
    var BigRock = function () {
        return this.initialize.apply(this, arguments);
    };

    _.extend(BigRock.prototype, Rock, Backbone.Events, {
        /**
         * Extends backbone from
         * @type {Object}
         */
        _extendBackbone: Backbone.Events,

        /**
         * Class name
         * @type {String}
         * @private
         */
        _name: 'BigRock',

        /**
         * Unique id for the BigRock instance
         * @type {String}
         */
        cid: _.uniqueId('big-rock'),

        /**
         * Initialize
         * @method initialize
         * @return {this}
         */
        initialize: function () {
            return this;
        }
    });

    /**
     * Set the extend function
     * @type {Function}
     */
    BigRock.extend = BigRock.prototype.extend;

    return BigRock;
});
