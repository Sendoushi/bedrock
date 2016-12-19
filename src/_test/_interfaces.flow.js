// @flow

declare module 'jquery' {
    declare function exports(args: any): any;
}

declare module 'jQuery' {
    declare function exports(args: any): any;
}

declare module 'lodash/cloneDeep.js' {
    declare function exports<T>(value: T): T;
}

declare module 'lodash/merge.js' {
    declare function exports(object?: ?Object, ...sources?: Array<?Object>): Object;
}
