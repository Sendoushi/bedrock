'use strict';

import page from 'page';
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
// { title: 'route', properties: { route: { type: 'string' }, cbs: [] }, required: true }
// { title: 'ctx', type: 'function' },
// { title: 'next', type: 'function' }
const cbRoute = (route, ctx, next) => {
    for (let c = 0; c < route.cbs.length; c += 1) {
        route.cbs[c](ctx, next);
    }
};

/**
 * Adds a route
 * @param {string} route
 * @param {function} cb
 */
// { title: 'route', type: 'string', required: true }
// { title: 'cb', type: 'function' }
const add = (route, cb) => {
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
// { title: 'opts', properties: {} }
const start = (opts) => {
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
