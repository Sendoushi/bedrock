'use strict';

import { compileSchema, getSchema } from 'bedrock-utils/src/validate.js';

let handlers = {};

// --------------------------------
// Functions

/**
 * Listens and waits for messages
 * @param  {string} msg
 * @param  {string} id
 * @param  {function} cb
 * @return {string}
 */
const onValidate = compileSchema(getSchema([
    { title: 'msg', type: 'string', required: true },
    { title: 'id', type: 'string', required: false },
    // { title: 'cb' }
]));
const on = (msg, id, cb) => {
    onValidate([msg, id]);

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
const offValidate = compileSchema(getSchema([
    { title: 'msg', type: 'string', required: true },
    { title: 'id', type: 'string', required: false }
]));
const off = (msg, id) => {
    offValidate([msg, id]);

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
const sendValidate = compileSchema(getSchema([
    { title: 'msg', type: 'string', required: true }
    // { title: 'data' }
]));
const send = (msg, data) => {
    sendValidate([msg]);

    const handler = handlers[msg];

    if (!handler) {
        return;
    }

    for (let i = 0; i < handler.length; i += 1) {
        handler[i].listener(data);
    }
};

/**
 * Resets all listeners
 */
const reset = () => { handlers = {}; };

// --------------------------------
// Export

export default { on, off, send, reset };
