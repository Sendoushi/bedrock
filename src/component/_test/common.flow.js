// @flow

import type {S} from '../../_test/state.flow.js';

export type Tmpl = string|FnTmpl|void;
export type NativeEl = HTMLElement[]|void;
export type NativeEls = { [key: string]: NativeEl };
export type Comp = {
    el: NativeEl,
    els: NativeEls,
    comps: {
        [key: string]: Comp
    },
    noRender: boolean,
    state: S,
    tmpl: Tmpl
};

export type FnTmpl = (comp: Comp, data: Object|void) => string;
export type FnGetComp = (data: Object, DEFAULTS_COMP: Comp|void) => Comp;
export type FnRender = (comp: Comp, state: S) => Comp;
export type FnDestroy = (comp: Comp) => Comp;
export type FnInit = (comp: Comp) => Comp;
