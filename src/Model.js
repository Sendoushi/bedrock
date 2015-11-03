'use strict';
import deepMixIn from 'mout/object/deepMixIn.js';
import Backbone from 'backbone';
import Rock from './Rock.js';

// -----------------------------------------
// VARS
let modelConfig = {
    name: 'Model'
};

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Initialize
 * @param  {object} options
 * @return {view}
 */
let initialize = function (options = {}) {
    Rock.prototype.initialize.call(this, options);

    // Set keys to be bind with self
    this.bindToSelf(['destroy']);

    return this;
};

/**
 * Destroys the rock
 * @param  {*} self
 * @param  {*} arg It will be passed to backbone
 */
let destroy = (self, arg) => {
    // TODO: There may be problems with these destroys!
    // Call the parent destroy
    Rock.prototype.destroy.call(self, arg);
    let proto = Backbone.Model.prototype;
    if (proto && proto.destroy) {
        proto.destroy.call(self, arg);
    }
};

// -----------------------------------------
// PRIVATE FUNCTIONS


// -----------------------------------------
// EXPORT

export default Backbone.Model.extend(deepMixIn({}, Rock.prototype, modelConfig, {
    initialize, destroy
}));
