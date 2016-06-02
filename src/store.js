// -----------------------------------------
// IMPORTS

var deepClone = require('mout/lang/deepClone');

// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Breadcrumb reducer maker
 * @param  {array}  INITIAL_STATE
 * @param  {object}  BREADCRUMB_SCHEMA
 * @return {function}
 */
var breadcrumbReducer = function (INITIAL_STATE, BREADCRUMB_SCHEMA) {
    INITIAL_STATE = INITIAL_STATE || [];
    BREADCRUMB_SCHEMA = BREADCRUMB_SCHEMA || {};

    /**
     * Sets crumb in breadcrumb
     * @param  {array} breadcrumb
     * @param  {object} crumb
     * @return {array}
     */
    var pushCrumb = function (breadcrumb, crumb) {
        breadcrumb = breadcrumb || [];
        crumb = crumb || {};

        var type = crumb.type;
        var name = crumb.name;
        var params = crumb.params;

        // Add the type without parentType
        if (!!type && !!name) {
            breadcrumb.push({
                name, routeType: type, params
            });
        }

        return breadcrumb;
    };

    /**
     * Breadcrumb reducer
     * @param  {object}  state
     * @param  {object}  action
     * @return {object}
     */
    var reducer = function (state, action) {
        state = state || INITIAL_STATE;
        action = action || {};

        switch (action.type) {
        case 'SET_CONTENT':
            var params = action.content.params;
            var breadcrumb = [];
            var type = action.content.type;
            var breadcrumbType = BREADCRUMB_SCHEMA[type] || {};

            // Loop to get all breadcrumbs with parent
            while (breadcrumbType.hasOwnProperty('parentType')) {
                // Set a new breadcrumb
                breadcrumb = pushCrumb(breadcrumb, {
                    name: breadcrumbType && breadcrumbType.name,
                    type,
                    params
                });

                // Set the new breadcrumb for the parent
                type = breadcrumbType.parentType;
                breadcrumbType = BREADCRUMB_SCHEMA[type];

                if (!breadcrumbType) {
                    break;
                }
            }

            // Add the type without parentType
            breadcrumb = pushCrumb(breadcrumb, {
                name: breadcrumbType && breadcrumbType.name,
                type,
                params
            });

            // Finally inform of the breadcrumb
            return breadcrumb.reverse();
        default:
            return deepClone(state);
        }
    };

    // Finally return the reducer
    return reducer;
};

/**
 * Loading reducer maker
 * @param  {boolean}  INITIAL_STATE
 * @return {function}
 */
var loadingReducer = function (INITIAL_STATE) {
    INITIAL_STATE = INITIAL_STATE || false;

    /**
     * Loading reducer
     * @param  {object}  state
     * @param  {object}  action
     * @return {object}
     */
    var reducer = function (state, action) {
        state = state || INITIAL_STATE;
        action = action || {};

        var type = action.type;
        var diff = type.replace('_LOADING', '') !== type;

        return diff ? action.loading : state;
    };

    // Finally return the reducer
    return reducer;
};

/**
 * Error reducer maker
 * @param  {*}  INITIAL_STATE
 * @return {function}
 */
var errReducer = function (INITIAL_STATE) {
    INITIAL_STATE = INITIAL_STATE || null;

    /**
     * Error reducer
     * @param  {object}  state
     * @param  {object}  action
     * @return {object}
     */
    var reducer = function (state, action) {
        state = state || INITIAL_STATE;
        action = action || {};

        var type = action.type;
        var diff = type.replace('_ERR', '') !== type;

        return diff ? action.err : state;
    };

    // Finally return the reducer
    return reducer;
};

// -----------------------------------------
// EXPORT

module.exports = {
    breadcrumbReducer: breadcrumbReducer,
    loadingReducer: loadingReducer,
    errReducer: errReducer
};
