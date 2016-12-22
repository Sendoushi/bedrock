// @flow
'use strict';

/* ::
import type {S, CompData} from './_test/common.flow.js';
*/

import cloneDeep from 'lodash/cloneDeep.js';
import merge from 'lodash/merge.js';

// -----------------------------------------
// Functions

// --------------------------------
// Class

class Component {
    // Vars
    /* ::
    _comps:{ [key: string]: any };
    _state:S;
    */

    // Constructor
    constructor(data/* :: :CompData */ = {}) {
        // Lets cache stuff
        this._comps = data.comps || this._comps || {};

        this.state = data.state || {};
    }

    // State...
    // TODO: Should we check diffs in state?
    set state(state/* :: :S */) { this._state = merge(this._state || {}, cloneDeep(state)); }
    get state()/* :: :S */ { return this._state; }

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
