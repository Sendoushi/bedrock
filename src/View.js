define([
    'backbone',
    'underscore',
    './Rock'
], function (Backbone, _, Rock) {

    'use strict';

    return Backbone.View.extend(_.extend({}, Rock, {
        cid: _.uniqueId('view'),

        _name: 'View'
    }));
});
