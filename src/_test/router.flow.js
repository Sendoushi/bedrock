// @flow

export type Route = { route: string, cbs: Function[] };
export type Routes = Route[];
export type AddRoute = { route: string, cb: Function };

export type FnCbRoute = (route: Route, ctx: any, next: any) => void;
export type FnAdd = (route: string, cb: Function) => ?void;
export type FnStart = (opts: { [key: string]: any }) => ?void;
