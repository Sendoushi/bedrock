'use strict';
import deepMixIn from 'mout/object/deepMixIn.js';
import Backbone from 'backbone';
import Rock from './Rock.js';

// -----------------------------------------
// VARS
let collectionConfig = {
    name: 'Collection'
};

// -----------------------------------------
// PUBLIC FUNCTIONS


// -----------------------------------------
// PRIVATE FUNCTIONS


// -----------------------------------------
// EXPORT

export default Backbone.Collection.extend(deepMixIn({}, Rock.prototype, collectionConfig, {

}));
