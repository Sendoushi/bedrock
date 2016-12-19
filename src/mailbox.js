/* @flow *//* :: import type {Handlers, Handler, On, Off, Send, Reset} from './_test/mailbox.flow.js'; */
'use strict';

let handlers/* :: :Handlers */ = {};

// --------------------------------
// Functions

/**
 * Listens and waits for messages
 * @param  {string} msg
 * @param  {string} id
 * @param  {function} cb
 * @return {string}
 */
const on/* :: :On */ = (msg, id, cb) => {
    if (typeof id === 'function') {
        cb = id;
        id = `${Math.random() * 100000}`;
    }

    if (!msg && typeof msg !== 'function') {
        throw new Error('A message handler is needed!');
    }

    if (!cb && typeof cb !== 'function') {
        throw new Error('A listener function is needed!');
    }

    // Lets see if the message is already defined and cache it
    const msgHandler/* :: :Handler[] */ = handlers[msg] || [];

    // Now lets cache it
    msgHandler.push({ id, listener: cb });
    handlers[msg] = msgHandler;

    return id;
};

/**
 * Removes listener
 * @param  {string} msg
 * @param  {string} id
 */
const off/* :: :Off */ = (msg, id) => {
    if (!msg || !handlers[msg]) {
        return;
    }

    if (!id) {
        // Lets remove all messages
        handlers[msg] = undefined;
        return;
    }

    handlers[msg] = handlers[msg].filter((val) => val.id !== id);
};

/**
 * Sends message
 * @param  {string} msg
 * @param  {object} data
 */
const send/* :: :Send */ = (msg, data) => {
    const handler = handlers[msg];

    if (!handler) {
        return;
    }

    for (let i/* :: :number */ = 0; i < handler.length; i += 1) {
        handler[i].listener(data);
    }
};

/**
 * Resets all listeners
 */
const reset/* :: :Reset */ = () => { handlers = {}; };

// --------------------------------
// Export

export default { on, off, send, reset };
