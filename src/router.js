var page = require('page/page.js');

// -----------------------------------------
// PRIVATE FUNCTIONS

/**
 * Find route from type
 * @param  {object} state
 * @param  {object} action
 */
var findRoute = (routes, type) {
    var route;
    var i;

    // Find the right route
    for (i = 0; i < routes.length; i += 1) {
        route = routes[i];
        route = (route.type === type) ? route : null;

        if (route) { break; }
    }

    return route;
};

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Update on action
 * @param  {object} state
 * @param  {object} action
 */
var updateOnAction = function (routes, state) {
    var urlParse;
    var params;
    var route;
    var url;

    if (!state || !state.content) { return; }

    route = findRoute(routes, state.content.type);
    if (!route) { return; }

    // Route to url
    urlParse = route.urlParse;
    params = state.content.params;
    url = !!urlParse ? urlParse(params) : route.url;

    // Navigate to the url
    if (url !== page.current) {
        page.show(url);
    }
};

/**
 * Sets routes
 * @param  {array} routes
 * @param  {string} base
 * @param  {string} type
 * @param  {object} params
 */
var setRoute = function (routes, route) {
    var routeFound = findRoute(routes, route.type);
    var urlParse;

    if (!routeFound) { return; }

    // Get the routeFound to url
    urlParse = routeFound.urlParse || function () {
        return routeFound.url;
    };

    return urlParse(route.params);
};

/**
 * Set routes
 * @param  {array} routes
 * @param  {string} base
 */
var init = function (routes) {
    var route;
    var fns;
    var i;

    // Set all routes
    for (i = 0; i < routes.length; i += 1) {
        route = routes[i];

        // Finally set the route
        page(route.url, function (r, fns, ctx, next) {
            var d;

            // Force the array to exist
            fns = (typeof fns === 'function') ? [fns] : fns;

            // Go through each function
            for (d = 0; d < fns.length; d += 1) {
                fns[d](route, ctx, next);
            }

        }.bind(null, route, route.onRoute));
    }

    // Start engines!
    page.start();
};

// -----------------------------------------
// EXPORT

module.exports = {
    updateOnAction: updateOnAction
    setRoute: setRoute,
    init: init
};
