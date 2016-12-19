// @flow

export type Handler = { id: string, listener: Function };
export type Handlers =  { [key: string]: ?Handler[] };

export type OnCb = Function;
export type On = (msg: string, id: string | OnCb, cb: OnCb | void) => string;

export type Off = (msg: ?string, id: string) => ?void;

export type Send = (msg: string, data: any) => ?void;

export type Reset = () => void;
