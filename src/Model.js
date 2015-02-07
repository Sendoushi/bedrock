define([
    'backbone',
    'underscore',
    './Rock'
], function (Backbone, _, Rock) {

    'use strict';

    return Backbone.Model.extend(_.extend({}, Rock, {
        cid: _.uniqueId('model'),

        _name: 'Model'
    }));
});
