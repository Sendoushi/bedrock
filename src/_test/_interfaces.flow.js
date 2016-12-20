// @flow

declare type jQueryElement = {
    context: Object,
    length: number,
    prevObject: Object,
    selector: string,
    [int: number]: Object
};

declare module "jQuery" {
    declare function $(element: Element | string): jQueryElement;
}

declare module "jquery" {
    declare function $(element: Element | string): jQueryElement;
}

declare module 'lodash/cloneDeep.js' {
    declare function exports<T>(value: T): T;
}

declare module 'lodash/merge.js' {
    declare function exports(object?: ?Object, ...sources?: Array<?Object>): Object;
}
