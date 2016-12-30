'use strict';

import cloneDeep from 'lodash/cloneDeep.js';
import merge from 'lodash/merge.js';
import { compileSchema, getSchema } from 'bedrock-utils/src/validate.js';

// -----------------------------------------
// Functions

// --------------------------------
// Class

const constructorValidate = compileSchema(getSchema([
    { title: 'data', properties: {
        comps: { properties: {} },
        state: { properties: {} }
    } }
]));
const setStateValidate = compileSchema(getSchema([
    { title: 'state', properties: {} }
]));

class Component {
    // Constructor
    constructor(data = {}) {
        constructorValidate([data]);

        // Lets cache stuff
        this._comps = data.comps || this._comps || {};

        this.state = data.state || {};
    }

    // State...
    // TODO: Should we check diffs in state?
    set state(state) {
        setStateValidate([state]);

        this._state = merge(this._state || {}, cloneDeep(state));
    }
    get state() { return this._state; }

    // Destroy
    destroy() {
        // Lets destroy components underneath
        const compsKeys = Object.keys(this._comps);
        for (let i = 0; i < compsKeys.length; i += 1) {
            this._comps[compsKeys[i]].destroy();
            this._comps[compsKeys[i]] = null;
        }

        return this;
    }
}
export { Component };
