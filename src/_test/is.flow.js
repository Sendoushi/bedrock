// @flow

export type Node = () => boolean;
export type Browser = () => boolean;
export type Ie = () => boolean;
export type Edge = () => boolean;
export type Ios = () => boolean;
export type Android = () => boolean;
export type Mobile = () => boolean;
export type Touch = () => boolean;
export type Media = (target: string) => boolean;
export type Url = (url: string) => boolean;
