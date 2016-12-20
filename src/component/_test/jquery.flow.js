// @flow

import type {CompData as CommonCompData} from './vanilla.flow.js';

export type CompData = CommonCompData & {
    $els?: { [key: string]: ?jQueryElement }
};

export type FnGetNativeEl = ($el: ?jQueryElement) => ?Element[];
export type FnGetNativeEls = ($els: { [key: string]: ?jQueryElement }) => { [key: string]: ?Element[] };
