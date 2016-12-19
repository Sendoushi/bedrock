// @flow

export type S = any; // State

export type GetState = () => S;
export type GetInitial = () => S;
export type StoreReducers = { [key: string]:any };

// From Redux!
// TODO: Declare module instead...
export type Store = {
    dispatch: (any) => any;
    getState: GetState;
    getInitial: GetInitial; // This is added to the general store
    subscribe(listener: () => void): () => void;
    replaceReducer(nextReducer: any): void
};

export type Connect = (store: Store) => (any) => any;
export type Init = (storeReducers: StoreReducers, INITIAL_STATE: S) => Store;
