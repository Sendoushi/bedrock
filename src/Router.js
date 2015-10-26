'use strict';
import mixIn from 'mout/object/mixIn';
import deepMixIn from 'mout/object/deepMixIn';
import Backbone from 'backbone';
import Rock from './Rock.js';

// -----------------------------------------
// VARS
let routerConfig = {
    name: 'Router',
    routesOriginal: {
        '404': 'notFound'
    },
    routes: {}
};

// Functions to be defined later
let stateManager, getParams, parseRoute;

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Backbone extend function
 */
let extendBackbone = Backbone.Router;

/**
 * Router constructor
 * @param {object} states
 * @param {object} options Options to be passed to the Backbone router
 */
let constructor = function (states, options = {}) {
    // Build routes
    this.routesOriginal = mixIn(this.routesOriginal, states);

    for (let key of Object.keys(this.routesOriginal)) {
        let val = this.routesOriginal[key];
        this.routes[key] = stateManager.bind(null, this, val, key);
    }

    // Run the backbone constructor
    extendBackbone.prototype.constructor.call(this, options);

    // Set vars
    this.options = this.options || options;
};

/**
 * Bedrock router initialize
 * @param  {object} options
 * @return {this}
 */
let initialize = function (options = {}) {
    extendBackbone.prototype.initialize.apply(this, arguments);
    Rock.prototype.initialize.call(this, options);

    // Set keys to be bind with self
    this.bindToSelf(['start']);

    // Listen for events of navigation
    this.on('bedrockrouter:navigate', route => this.navigate(route));

    return this;
};

/**
 * Starts the routing
 * @param {*} self
 * @param {object} config
 */
let start = function (self, config) {
    // Listens for the changes
    let root = config.baseUrl && '/' + config.baseUrl + '/';
    let historyObj = { pushState: true };
    let historyStart;

    if (root) { historyObj.root = root; }

    historyStart = Backbone.history.start(historyObj);

    // Maybe there is an option to override the history
    // No history means it is a 404
    if (self.options.noHistory || !historyStart) {
        self.navigate(self.options.noHistory ? '' : '404', { trigger: true });
    }
};

// -----------------------------------------
// PRIVATE FUNCTIONS

/**
 * Manages the states of the routes
 * @param   {rock} self
 * @param   {string} state State to go to
 * @param   {string} route Route used for the state
 */
stateManager = (self, state, route) => {
    // TODO: Support * and ? in the routes
    // TODO: This needs to be reviewed!!!

    let routeArr = route !== '' ? route.split('/') : [];
    let params = getParams(routeArr, arguments);
    let routeAdded = [];
    let stateParsed;

    // Build the routes added
    routeArr.forEach((val, i) => {
        routeAdded.push((i !== 0 && (routeAdded[i - 1] + '/') || '') + routeArr[i]);
    });

    // Go through each from the child
    routeAdded.reverse().forEach((routeUrl, i) => {
        stateParsed = parseRoute(self, params, stateParsed, routeUrl, i);
    });

    // Add the index and handle state
    self.trigger('router#change', {
        name: self.routesOriginal[''],
        route: '',
        child: stateParsed
    });
};

/**
 * Get params from route
 * @param  {array} routeArr
 * @param  {array} args
 * @return {array}
 */
getParams = (routeArr, args) => {
    let i = 1;

    return routeArr.map(val => {
        // Check if there is a param in the route bit
        if (val.replace(':', '') === val) {
            return;
        }

        i += 1;

        return { param: val.replace(':', ''), value: args[i] };
    }).filter(val => !!val);
};

/**
 * Parse route
 * @param  {rock} self
 * @param  {object} params
 * @param  {object} child
 * @param  {string} route
 * @param  {int} i
 * @return {object}
 */
parseRoute = (self, params, child, route, i) => {
    // State may not exist
    if (!self.routesOriginal[route]) {
        return;
    }

    // Map to the right params
    let paramsObj = {};
    let hasParams = params.map(val => {
        // Check if there is a param in the route
        if (route.replace(':' + val.param, '') === route) {
            return false;
        }

        // Add the param
        paramsObj[val.param] = val.value;

        // Used later to see if there are params in the route
        return true;
    }).filter(val => !!val).length;

    // Build the state object
    return {
        name: self.routesOriginal[route],
        params: hasParams && paramsObj || null,
        route,
        child
    };
};

// -----------------------------------------
// EXPORT

export default Backbone.Router.extend(deepMixIn({}, Rock.prototype, routerConfig, {
    extendBackbone, constructor, initialize, start
}));
