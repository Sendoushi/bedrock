define([
    'config'
], function (config) {

    'use strict';

    // Build empty console
    if (typeof window.console === 'undefined' || !config.debug) {
        var emptyFunc = function () {},
            keys = [
                'log',
                'debug',
                'info',
                'warn',
                'error',
                'dir',
                'trace',
                'group',
                'groupCollapsed',
                'groupEnd',
                'time',
                'timeEnd'
            ],
            i;

        window.console = {};
        for (i = keys.length - 1; i >= 0; i -= 1) {
            window.console[keys[i]] = emptyFunc;
        }
    }

    return {
        /**
         * Logs to wherever
         * @return {String}
         */
        log: function (module, msg) {
            if (config.debug) {
                console.log('[foundation-bb][' + module + ']' + msg);
            }
        }
    };
});
