"use strict";

// State

/*:: export type S = any;*/


// From Redux!
// TODO: Declare module instead...
/*:: export type StoreReducers = { [key: string]:any };*/
/*:: export type Store = {
    dispatch: Function;
    getState: FnGetState;
    getInitial: FnGetInitial; // This is added to the general store
    subscribe(listener: () => void): () => void;
    replaceReducer(nextReducer: any): void
};*/
/*:: export type FnGetState = () => S;*/
/*:: export type FnGetInitial = () => S;*/
/*:: export type FnConnect = (store: Store) => Function;*/
/*:: export type FnInit = (storeReducers: StoreReducers, INITIAL_STATE: S) => Store;*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fdGVzdC9zdG9yZS5mbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRXFCOzs7OztBQUlyQjtBQUNBIiwiZmlsZSI6InN0b3JlLmZsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5leHBvcnQgdHlwZSBTID0gYW55OyAvLyBTdGF0ZVxuXG5leHBvcnQgdHlwZSBTdG9yZVJlZHVjZXJzID0geyBba2V5OiBzdHJpbmddOmFueSB9O1xuXG4vLyBGcm9tIFJlZHV4IVxuLy8gVE9ETzogRGVjbGFyZSBtb2R1bGUgaW5zdGVhZC4uLlxuZXhwb3J0IHR5cGUgU3RvcmUgPSB7XG4gICAgZGlzcGF0Y2g6IEZ1bmN0aW9uO1xuICAgIGdldFN0YXRlOiBGbkdldFN0YXRlO1xuICAgIGdldEluaXRpYWw6IEZuR2V0SW5pdGlhbDsgLy8gVGhpcyBpcyBhZGRlZCB0byB0aGUgZ2VuZXJhbCBzdG9yZVxuICAgIHN1YnNjcmliZShsaXN0ZW5lcjogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQ7XG4gICAgcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXI6IGFueSk6IHZvaWRcbn07XG5cbmV4cG9ydCB0eXBlIEZuR2V0U3RhdGUgPSAoKSA9PiBTO1xuZXhwb3J0IHR5cGUgRm5HZXRJbml0aWFsID0gKCkgPT4gUztcbmV4cG9ydCB0eXBlIEZuQ29ubmVjdCA9IChzdG9yZTogU3RvcmUpID0+IEZ1bmN0aW9uO1xuZXhwb3J0IHR5cGUgRm5Jbml0ID0gKHN0b3JlUmVkdWNlcnM6IFN0b3JlUmVkdWNlcnMsIElOSVRJQUxfU1RBVEU6IFMpID0+IFN0b3JlO1xuIl19