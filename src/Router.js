'use strict';
import mixIn from 'mout/object/mixIn.js';
import deepMixIn from 'mout/object/deepMixIn.js';
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
let constructor = function (states = {}, options = {}) {
    // Build routes
    this.routesOriginal = mixIn(this.routesOriginal, states);

    for (let key of Object.keys(this.routesOriginal)) {
        let val = this.routesOriginal[key];
        this.routes[key] = function () {
            // Don't touch this, webpack is weird with these
            // values comming from the arguments
            let values = [];

            // Go through all the value arguments
            for (let i = 0; i < arguments.length; i += 1) {
                values.push(arguments[i]);
            }

            stateManager(this, val, key, values);
        }.bind(this);
    }

    // Run the backbone constructor
    extendBackbone.prototype.constructor.call(this, options);

    // Set vars
    this.options = this.options || options;
};

/**
 * Initialize this
 * @param  {object} options
 * @return {this}
 */
let initialize = function (options = {}) {
    extendBackbone.prototype.initialize.apply(this, arguments);
    Rock.prototype.initialize.call(this, options);

    // Set keys to be bind with self
    this.bindToSelf(['start']);

    // Listen for events of navigation
    this.on('bedrockrouter:navigate', route => {
        this.navigate(route, { trigger: options.trigger });
    });

    return this;
};

/**
 * Starts the routing
 * @param {*} self
 * @param {object} config
 */
let start = (self, config) => {
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
 * @param   {*} self
 * @param   {string} state State to go to
 * @param   {string} route Route used for the state
 * @param   {array} values Values to the route
 */
stateManager = (self, state, route, values) => {
    // TODO: Support * and ? in the routes
    // TODO: This needs to be reviewed!!!
    var routeArr = route !== '' ? route.split('/') : [''];
    var params = getParams(routeArr, values);
    var routeAdded = [];
    var stateParsed;

    // Build the routes added
    routeArr.forEach((val, i) => {
        routeAdded.push((i !== 0 && (routeAdded[i - 1] + '/') || '') + routeArr[i]);
    });

    // Go through each from the child
    routeAdded.reverse().forEach((routeUrl, i) => {
        stateParsed = parseRoute(self, params, stateParsed, routeUrl, i);
    });


    // Inform the change
    self.trigger('router#change', stateParsed);
};

/**
 * Get params from route
 * @param  {array} routeArr
 * @param  {array} valuesArr
 * @return {array}
 */
getParams = function (routeArr, valuesArr) {
    // Don't touch this, webpack is weird with these
    // values comming from the arguments
    let realValue;
    let arr = routeArr.map(val => {
        // Check if there is a param in the route bit
        if (val.replace(':', '') === val) {
            return;
        }

        realValue = valuesArr[0];
        valuesArr.splice(0, 1);
        return { param: val.replace(':', ''), value: realValue };
    }).filter(val => !!val);

    return arr;
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
        return child;
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
