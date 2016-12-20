// @flow

export type S = any; // State

export type StoreReducers = { [key: string]:any };

// From Redux!
// TODO: Declare module instead...
export type Store = {
    dispatch: Function;
    getState: FnGetState;
    getInitial: FnGetInitial; // This is added to the general store
    subscribe(listener: () => void): () => void;
    replaceReducer(nextReducer: any): void
};

export type FnGetState = () => S;
export type FnGetInitial = () => S;
export type FnConnect = (store: Store) => Function;
export type FnInit = (storeReducers: StoreReducers, INITIAL_STATE: S) => Store;
