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

    /**
     * Bedrock logger util
     * @class Logger
     */

    return {
        /**
         * Logs to wherever
         * @method log
         * @param  {String} module Module from where it came
         * @param  {String} msg Message to log
         */
        log: function (module, msg) {
            if (config.debug) {
                if (module) {
                    msg = '[Bedrock][' + module + '] ' + msg;
                }

                console.log(msg);
            }
        },

        /**
         * Warns to wherever
         * @method warn
         * @param  {String} module Module from where it came
         * @param  {String} msg Message to warn
         */
        warn: function (module, msg) {
            if (config.debug) {
                if (module) {
                    msg = '[Bedrock][' + module + '] ' + msg;
                }

                console.warn(msg);
            }
        },

        /**
         * Errors to wherever
         * @method error
         * @param  {String} module Module from where it came
         * @param  {String} msg Message to error
         */
        error: function (module, msg) {
            if (config.debug) {
                if (module) {
                    msg = '[Bedrock][' + module + '] ' + msg;
                }

                console.error(msg);
            }
        }
    };
});
