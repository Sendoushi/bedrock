'use strict';

import page from 'page';
import { compileSchema, getSchema } from 'bedrock-utils/src/validate.js';
import mailbox from './mailbox.js';

const routes = [];
const DEFAULTS = {
    events: {
        add: 'router.add',
        start: 'router.start'
    }
};

// --------------------------------
// Functions

/**
 * Callback the route
 * @param  {object} route
 * @param  {object} ctx
 */
const cbRouteValidate = compileSchema(getSchema([
    { title: 'route', properties: { route: { type: 'string' }, cbs: [] }, required: true }
    // { title: 'ctx' },
    // { title: 'next' }
]));
const cbRoute = (route, ctx, next) => {
    cbRouteValidate([route]);

    for (let c = 0; c < route.cbs.length; c += 1) {
        route.cbs[c](ctx, next);
    }
};

/**
 * Adds a route
 * @param {string} route
 * @param {function} cb
 */
const addValidate = compileSchema(getSchema([
    { title: 'route', type: 'string', required: true }
    // { title: 'cb' }
]));
const add = (route, cb) => {
    addValidate([route]);

    // Lets see if the route is already defined
    for (let i = 0; i < routes.length; i += 1) {
        if (routes[i].route === route) {
            routes[i].cbs.push(cb);
            return;
        }
    }

    // Cache the callback and route for later use
    routes.push({ route, cbs: [cb] });
};

/**
 * Starts the router
 * @param  {object} opts
 */
const startValidate = compileSchema(getSchema([
    { title: 'opts', properties: {} }
]));
const start = (opts) => {
    startValidate([opts]);

    if (!routes.length) {
        return;
    }

    // Lets add all routers to the right places
    for (let i = 0; i < routes.length; i += 1) {
        const route = routes[i];

        // Lets finally set it in the "page"
        page(route.route, cbRoute.bind(null, route));
    }

    // Finally starting the routes
    page.start(opts);
};

// --------------------------------
// Runtime

mailbox.on(DEFAULTS.events.start, start);
mailbox.on(DEFAULTS.events.add, (data) => add(data.route, data.cb));

// --------------------------------
// Export

export default { start, add, page };
