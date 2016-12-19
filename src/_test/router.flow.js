// @flow

export type Route = { route: string, cbs: Function[] };
export type Routes = Route[];
export type CbRoute = (route: Route, ctx: any, next: any) => void;

export type AddRoute = { route: string, cb: Function };
export type Add = (route: string, cb: Function) => ?void;

export type Start = (opts: { [key: string]: any }) => ?void;
