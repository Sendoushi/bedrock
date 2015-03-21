define([
    'config'
], function (config) {

    'use strict';

    var loggerName = 'Bedrock',
        emptyFunc,
        parseMsg,
        keys,
        i;

    // Build empty console
    if (typeof window.console === 'undefined' || !config.debug) {
        emptyFunc = function () {};
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
        ];
        i;

        window.console = {};
        for (i = keys.length - 1; i >= 0; i -= 1) {
            window.console[keys[i]] = emptyFunc;
        }
    }

    /**
     * Parses the msg
     * @method  _parseMsg
     * @param   {String} module
     * @param   {String} msg
     * @return  {String}
     * @private
     */
    parseMsg = function (module, msg) {
        var logMsg = '[' + loggerName + ']';

        msg = msg || module;
        module = module !== msg && module;

        logMsg += module && '[' + module + ']' || '';
        logMsg += ' ' + msg;

        return logMsg;
    };

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
            config.debug && console.log(parseMsg(module, msg));
        },

        /**
         * Warns to wherever
         * @method warn
         * @param  {String} module Module from where it came
         * @param  {String} msg Message to warn
         */
        warn: function (module, msg) {
            config.debug && console.warn(parseMsg(module, msg));
        },

        /**
         * Errors to wherever
         * @method error
         * @param  {String} module Module from where it came
         * @param  {String} msg Message to error
         */
        error: function (module, msg) {
            config.debug && console.error(parseMsg(module, msg));
        }
    };
});
