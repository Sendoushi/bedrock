/* @flow *//* :: import type {Routes, Route, AddRoute, FnAdd, FnCbRoute, FnStart} from './_test/router.flow.js'; */
'use strict';

import page from 'page';
import mailbox from './mailbox.js';

const routes/* :: :Routes */ = [];
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
const cbRoute/* :: :FnCbRoute */ = (route, ctx, next) => {
    for (let c = 0; c < route.cbs.length; c += 1) {
        route.cbs[c](ctx, next);
    }
};

/**
 * Adds a route
 * @param {string} route
 * @param {function} cb
 */
const add/* :: :FnAdd */ = (route, cb) => {
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
const start/* :: :FnStart */ = (opts) => {
    if (!routes.length) {
        return;
    }

    // Lets add all routers to the right places
    for (let i = 0; i < routes.length; i += 1) {
        const route/* :: :Route */ = routes[i];

        // Lets finally set it in the "page"
        page(route.route, cbRoute.bind(null, route));
    }

    // Finally starting the routes
    page.start(opts);
};

// --------------------------------
// Runtime

mailbox.on(DEFAULTS.events.start, start);
mailbox.on(DEFAULTS.events.add, (data/* :: :AddRoute */) => add(data.route, data.cb));

// --------------------------------
// Export

export default { start, add, page };
