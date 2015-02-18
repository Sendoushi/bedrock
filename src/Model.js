define([
    'backbone',
    'underscore',
    './Rock'
], function (Backbone, _, Rock) {

    'use strict';

    return Backbone.Model.extend(_.extend({}, Rock, {
        _name: 'Model',

        cid: _.uniqueId('model'),

        // --------------------------------

        /**
         * Model initialize
         * @param  {Obejct} options
         * @return {this}
         */
        initialize: function () {
            return this;
        }
    }));
});
