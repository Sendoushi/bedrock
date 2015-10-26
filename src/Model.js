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


// -----------------------------------------
// PRIVATE FUNCTIONS


// -----------------------------------------
// EXPORT

export default Backbone.Model.extend(deepMixIn({}, Rock.prototype, modelConfig, {

}));
