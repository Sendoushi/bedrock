/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// --------------------------------
// Vars / Imports

var page = require('page');
var routes = [];

// --------------------------------
// Functions

/**
 * Callback the route
 * @param  {object} route
 * @param  {object} ctx
 */
var cbRoute = function (route, ctx, next) {
    var c;

    for (c = 0; c < route.cbs.length; c += 1) {
        route.cbs[c](ctx, next);
    }
};

/**
 * Adds a route
 * @param {string} route
 * @param {function} cb
 */
var add = function (route, cb) {
    var i;

    // Lets see if the route is already defined
    for (i = 0; i < routes.length; i += 1) {
        if (routes[i].route === route) {
            routes[i].cbs.push(cb);
            return;
        }
    }

    // Cache the callback and route for later use
    routes.push({ route: route, cbs: [cb] });
};

/**
 * Starts the router
 * @param  {object} opts
 */
var start = function (opts) {
    var route;
    var i;

    if (!routes.length) {
        return;
    }

    // Lets add all routers to the right places
    for (i = 0; i < routes.length; i += 1) {
        route = routes[i];

        // Lets finally set it in the "page"
        page(route.route, cbRoute.bind(null, route));
    }

    // Finally starting the routes
    page.start(opts);
};

// --------------------------------
// Export

module.exports = { start: start, add: add, page: page };
