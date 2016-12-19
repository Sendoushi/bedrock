// @flow

export type Route = { route: string, cbs: ((any) => any)[] };
export type Routes = Route[];
export type CbRoute = (route: Route, ctx: any, next: any) => void;

export type AddRoute = { route: string, cb: (any) => any };
export type Add = (route: string, cb: (any) => any) => ?void;

export type Start = (opts: { [key: string]: any }) => ?void;
