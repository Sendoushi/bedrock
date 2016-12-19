"use strict";

// State

/*:: export type S = any;*/
/*:: export type GetState = () => S;*/
/*:: export type GetInitial = () => S;*/


// From Redux!
// TODO: Declare module instead...
/*:: export type StoreReducers = { [key: string]:any };*/
/*:: export type Store = {
    dispatch: Function;
    getState: GetState;
    getInitial: GetInitial; // This is added to the general store
    subscribe(listener: () => void): () => void;
    replaceReducer(nextReducer: any): void
};*/
/*:: export type Connect = (store: Store) => Function;*/
/*:: export type Init = (storeReducers: StoreReducers, INITIAL_STATE: S) => Store;*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fdGVzdC9zdG9yZS5mbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRXFCOzs7Ozs7O0FBTXJCO0FBQ0EiLCJmaWxlIjoic3RvcmUuZmxvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmV4cG9ydCB0eXBlIFMgPSBhbnk7IC8vIFN0YXRlXG5cbmV4cG9ydCB0eXBlIEdldFN0YXRlID0gKCkgPT4gUztcbmV4cG9ydCB0eXBlIEdldEluaXRpYWwgPSAoKSA9PiBTO1xuZXhwb3J0IHR5cGUgU3RvcmVSZWR1Y2VycyA9IHsgW2tleTogc3RyaW5nXTphbnkgfTtcblxuLy8gRnJvbSBSZWR1eCFcbi8vIFRPRE86IERlY2xhcmUgbW9kdWxlIGluc3RlYWQuLi5cbmV4cG9ydCB0eXBlIFN0b3JlID0ge1xuICAgIGRpc3BhdGNoOiBGdW5jdGlvbjtcbiAgICBnZXRTdGF0ZTogR2V0U3RhdGU7XG4gICAgZ2V0SW5pdGlhbDogR2V0SW5pdGlhbDsgLy8gVGhpcyBpcyBhZGRlZCB0byB0aGUgZ2VuZXJhbCBzdG9yZVxuICAgIHN1YnNjcmliZShsaXN0ZW5lcjogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQ7XG4gICAgcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXI6IGFueSk6IHZvaWRcbn07XG5cbmV4cG9ydCB0eXBlIENvbm5lY3QgPSAoc3RvcmU6IFN0b3JlKSA9PiBGdW5jdGlvbjtcbmV4cG9ydCB0eXBlIEluaXQgPSAoc3RvcmVSZWR1Y2VyczogU3RvcmVSZWR1Y2VycywgSU5JVElBTF9TVEFURTogUykgPT4gU3RvcmU7XG4iXX0=