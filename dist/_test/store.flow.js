"use strict";

// State

/*:: export type S = any;*/
/*:: export type GetState = () => S;*/
/*:: export type GetInitial = () => S;*/


// From Redux!
// TODO: Declare module instead...
/*:: export type StoreReducers = { [key: string]:any };*/
/*:: export type Store = {
    dispatch: (any) => any;
    getState: GetState;
    getInitial: GetInitial; // This is added to the general store
    subscribe(listener: () => void): () => void;
    replaceReducer(nextReducer: any): void
};*/
/*:: export type Connect = (store: Store) => (any) => any;*/
/*:: export type Init = (storeReducers: StoreReducers, INITIAL_STATE: S) => Store;*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fdGVzdC9zdG9yZS5mbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRXFCOzs7Ozs7O0FBTXJCO0FBQ0EiLCJmaWxlIjoic3RvcmUuZmxvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmV4cG9ydCB0eXBlIFMgPSBhbnk7IC8vIFN0YXRlXG5cbmV4cG9ydCB0eXBlIEdldFN0YXRlID0gKCkgPT4gUztcbmV4cG9ydCB0eXBlIEdldEluaXRpYWwgPSAoKSA9PiBTO1xuZXhwb3J0IHR5cGUgU3RvcmVSZWR1Y2VycyA9IHsgW2tleTogc3RyaW5nXTphbnkgfTtcblxuLy8gRnJvbSBSZWR1eCFcbi8vIFRPRE86IERlY2xhcmUgbW9kdWxlIGluc3RlYWQuLi5cbmV4cG9ydCB0eXBlIFN0b3JlID0ge1xuICAgIGRpc3BhdGNoOiAoYW55KSA9PiBhbnk7XG4gICAgZ2V0U3RhdGU6IEdldFN0YXRlO1xuICAgIGdldEluaXRpYWw6IEdldEluaXRpYWw7IC8vIFRoaXMgaXMgYWRkZWQgdG8gdGhlIGdlbmVyYWwgc3RvcmVcbiAgICBzdWJzY3JpYmUobGlzdGVuZXI6ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkO1xuICAgIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyOiBhbnkpOiB2b2lkXG59O1xuXG5leHBvcnQgdHlwZSBDb25uZWN0ID0gKHN0b3JlOiBTdG9yZSkgPT4gKGFueSkgPT4gYW55O1xuZXhwb3J0IHR5cGUgSW5pdCA9IChzdG9yZVJlZHVjZXJzOiBTdG9yZVJlZHVjZXJzLCBJTklUSUFMX1NUQVRFOiBTKSA9PiBTdG9yZTtcbiJdfQ==