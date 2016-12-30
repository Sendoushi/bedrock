'use strict';
/* global $, window, document, module, process, navigator */
/* eslint-disable no-console */

const logger = { log: [], warn: [], error: [] };
const nativeLog = console.log;
const nativeWarn = console.warn;
const nativeError = console.error;
const windowNativeError = window.onerror;

// -----------------------------------------
// Functions

/**
 * Logs message
 *
 * @param {*} args
 */
const log = (...args) => {
    logger.log.push({ from: console.trace(), msg: args });
    nativeLog(...args);
};

/**
 * Warns message
 *
 * @param {*} args
 */
const warn = (...args) => {
    logger.warn.push({ from: console.trace(), msg: args });
    nativeWarn(...args);
};

/**
 * Errors message
 *
 * @param {*} args
 */
const error = (...args) => {
    logger.error.push({ from: console.trace(), msg: args });
    nativeError(...args);
};

// ------------------------------------
// Runtime

console.log = log;
console.warn = warn;
console.error = error;
window.logger = logger;

// Lets catch all errors
window.onerror = (...args) => {
    error('From window on error catcher', ...args);
    windowNativeError && windowNativeError(...args);
};
window.addEventListener('error', (evt) => {
    error('From window on error catcher', evt);
});

// ------------------------------------
// Export

export default { log, warn, error };
/* eslint-enable no-console */
