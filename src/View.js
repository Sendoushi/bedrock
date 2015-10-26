'use strict';
import deepMixIn from 'mout/object/deepMixIn';
import _ from 'underscore';
import Backbone from 'backbone';
import Rock from './Rock.js';

// Change templating interpolate
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

// -----------------------------------------
// VARS
let viewConfig = {
    name: 'View'
};

// Functions to be defined later
let createBasicElement;

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Backbone extend function
 */
let extendBackbone = Backbone.View;

/**
 * Initialize
 * @param  {object} options
 * @return {view}
 */
let initialize = function (options = {}) {
    Rock.prototype.initialize.call(this, options);

    // Set keys to be bind with self
    this.bindToSelf(['render']);

    // Set the element
    options.el && this.setElement(options.el);

    return this;
};

/**
 * Render
 * @param  {*} self
 * @param  {object} data Object to be rendered
 */
let render = (self, data) => {
    if (!self.$el) {
        console.error('[' + self.name + '] You need to set the element first.');
        return;
    }

    // Warn that this has been rendered
    self.hasRendered && console.warn('[' + self.name + '] This view has been rendered before. Are you sure?');

    let wrapper = createBasicElement(self);

    // Check if there is a template
    if (self.template) {
        wrapper.append(self.template(data));
    }

    self.$el.append(wrapper);
    self.$element = wrapper;

    self.hasRendered = true;
};

// -------------------------------
// Changes to backbone methods

/**
 * Removes the _ensureElement from Backbone because we want to do it in the render
 */
let ensureElement = () => {
    // Removed all because i want to this in the render
};

/**
 * Method from backbone to remove events
 * @return {this}
 */
let undelegateEvents = function () {
    // TODO: Check why it doesn't have a $el
    if (!this.$el) {
        return this;
    }

    return this.extendBackbone.prototype.undelegateEvents.call(this);
};

// -----------------------------------------
// PRIVATE FUNCTIONS
/**
 * Creates a basic element for the view
 * @param   {view} self
 * @return  {jquery} The jQuery result
 */
createBasicElement = self => {
    var attrs = deepMixIn({}, _.result(self, 'attributes'));

    if (self.id) {
        attrs.id = _.result(self, 'id');
    }

    if (self.className) {
        attrs['class'] = _.result(self, 'className');
    }

    return Backbone.$('<' + _.result(self, 'tagName') + '>').attr(attrs);
};

// -----------------------------------------
// EXPORT

export default Backbone.View.extend(deepMixIn({}, Rock.prototype, viewConfig, {
    initialize, render,
    undelegateEvents, ensureElement, extendBackbone
}));
