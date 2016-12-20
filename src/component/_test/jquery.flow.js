// @flow

import type {S} from '../../_test/state.flow.js';
import type {Comp, NativeEl, NativeEls} from './common.flow.js'


export type jQueryEl = jQueryElement|void;
export type jQueryEls = { [key: string]: jQueryEl };
export type jQueryComp = {
    el: jQueryEl,
    els: jQueryEls,
    superComp: Comp
};

export type FnGetNativeEl = (el: jQueryElement) => NativeEl;
export type FnGetNativeEls = (els: jQueryEls) => NativeEls;
export type FnRender = (comp: jQueryComp, state: S) => jQueryComp;
export type FnDestroy = (comp: jQueryComp) => jQueryComp;
export type FnInit = (comp: jQueryComp) => jQueryComp;
