// @flow

import type {S as State} from '../../_test/state.flow.js';

export type S = State;
export type CompData = {
    comps?: { [key: string]: any },
    state?: S,
    [key: string]: any
};
