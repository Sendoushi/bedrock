/* eslint-disable strict */'use strict';/* eslint-enable strict */

var handlers = {};

// --------------------------------
// Functions

/**
 * Listens and waits for messages
 * @param  {string} msg
 * @param  {string} id
 * @param  {function} cb
 * @return {string}
 */
function on(msg, id, cb) {
    if (typeof id === 'function') {
        cb = id;
        id = Math.random() * 100000;
    }

    if (!msg && typeof msg !== 'function') {
        throw new Error('A message handler is needed!');
    }

    if (!cb && typeof cb !== 'function') {
        throw new Error('A listener function is needed!');
    }

    // Lets see if the message is already defined
    if (!handlers[msg]) {
        handlers[msg] = [];
    }

    // Cache the callback for later use
    handlers[msg].push({ id: id, listener: cb });

    return id;
}

/**
 * Removes listener
 * @param  {string} msg
 * @param  {string} id
 */
function off(msg, id) {
    if (!msg || !handlers[msg]) {
        return;
    }

    if (!id) {
        // Lets remove all messages
        handlers[msg] = null;
        return;
    }

    handlers[msg] = handlers[msg].filter(function (val) {
        return val.id !== id;
    });
}

/**
 * Sends message
 * @param  {string} msg
 * @param  {object} data
 */
function send(msg, data) {
    var handler = handlers[msg];
    var i;

    if (!handler) {
        return;
    }

    for (i = 0; i < handler.length; i += 1) {
        handler[i].listener(data);
    }
}

/**
 * Resets all listeners
 */
function reset() {
    handlers = {};
}

// --------------------------------
// Export

module.exports = { on: on, off: off, send: send, reset: reset };
