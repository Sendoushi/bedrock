'use strict';

import cloneDeep from 'lodash/cloneDeep.js';
import merge from 'lodash/merge.js';

// -----------------------------------------
// Functions

// --------------------------------
// Class

class Component {
    // Constructor
    // { title: 'data', properties: {
    //     comps: { properties: {} },
    //     state: { properties: {} }
    // } }
    constructor(data = {}) {
        // Lets cache stuff
        this._comps = data.comps || this._comps || {};

        this.state = data.state || {};
    }

    // State...
    // TODO: Should we check diffs in state?
    // { title: 'state', properties: {} }
    set state(state) {
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
