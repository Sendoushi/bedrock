// @flow

export type Handler = { id: string, listener: Function };
export type Handlers =  { [key: string]: ?Handler[] };

export type FnOnCb = Function;
export type FnOn = (msg: string, id: string | FnOnCb, cb: FnOnCb | void) => string;
export type FnOff = (msg: ?string, id: string) => ?void;
export type FnSend = (msg: string, data: any) => ?void;
export type FnReset = () => void;
