// @flow

export type GetNew = (oldState: { [key: any]: any }, newState: { [key: any]: any }) => {
    diff: Array<any> | boolean,
    state: { [key: any]: any }
};
