// @flow

export type S = { [key: any]: any };

export type FnGetNew = (oldState: S, newState: S) => {
    diff: Array<any> | boolean,
    state: S
};
