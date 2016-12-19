// @flow

import type {Store} from './store.flow.js';

export type A = (any) => any; // Action
export type UnsetActions = { [key: string]: (any) => any };
export type Actions = { [key: string]: A };

export type Init = (
    store: Store,
    actions: UnsetActions
) => Actions;
