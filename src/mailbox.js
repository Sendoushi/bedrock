/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// --------------------------------
// Vars / Imports

var handlers = {};

// --------------------------------
// Functions

/**
 * Listens and waits for messages
 * @param  {string} msg
 * @param  {function} cb
 */
var on = function (msg, cb) {
    var handler = handlers[msg];

    // Lets see if the message is already defined
    if (!handler) {
        handlers[msg] = [];
        handler = handlers[msg];
    }

    // Cache the callback for later use
    handler.push(cb);
};

/**
 * Removes listener
 * @param  {string} msg
 * @param  {function} cb
 */
var off = function (msg, cb) {
    var handler;
    var i;

    if (!msg) {
        return;
    }

    // Cache handler
    handler = handlers[msg];

    if (cb && handler.length) {
        // Lets try and find the same callback
        i = handler.indexOf(cb);
        if (i > -1) {
            handler.splice(i, 1);
        }
    } else {
        // Lets remove all messages
        handlers[msg] = null;
    }
};

/**
 * Sends message
 * @param  {string} msg
 * @param  {object} data
 */
var send = function (msg, data) {
    var handler = handlers[msg];
    var i;

    if (!handler) {
        return;
    }

    for (i = 0; i < handler.length; i += 1) {
        handler[i](data);
    }
};

// --------------------------------
// Export

module.exports = { on: on, off: off, send: send };
