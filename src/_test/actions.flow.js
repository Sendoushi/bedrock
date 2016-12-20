// @flow

import type {Store} from './store.flow.js';

export type A = Function; // Action
export type UnsetActions = { [key: string]: Function };
export type Actions = { [key: string]: A };

export type FnInit = (store: Store, actions: UnsetActions) => Actions;
