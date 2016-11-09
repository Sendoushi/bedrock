/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

// -----------------------------------------
// VARS

var merge = require('deepmerge');

// -----------------------------------------
// FUNCTIONS

/**
 * Sets crumb in breadcrumb
 * @param  {array} breadcrumb
 * @param  {object} crumb
 * @return {array}
 */
var pushCrumb = function (breadcrumb, crumb) {
    var params = crumb && crumb.params;
    var type = crumb && crumb.type;
    var name = crumb && crumb.name;

    breadcrumb = breadcrumb || [];

    // Add the type without parentType
    if (!!type && !!name) {
        breadcrumb.push({ name, routeType: type, params });
    }

    return breadcrumb;
};

/**
 * Set content related
 * @param  {object} action
 * @param  {object} schema
 * @return {array}
 */
var setContent = function (action, schema) {
    var params = action.content.params;
    var breadcrumb = [];
    var type = action.content.type;
    var breadcrumbType = schema[type] || {};

    // Loop to get all breadcrumbs with parent
    while (breadcrumbType.hasOwnProperty('parentType')) {
        // Set a new breadcrumb
        breadcrumb = pushCrumb(breadcrumb, {
            name: breadcrumbType && breadcrumbType.name,
            type: type,
            params: params
        });

        // Set the new breadcrumb for the parent
        type = breadcrumbType.parentType;
        breadcrumbType = schema[type];

        if (!breadcrumbType) {
            break;
        }
    }

    // Add the type without parentType
    breadcrumb = pushCrumb(breadcrumb, {
        name: breadcrumbType && breadcrumbType.name,
        type: type,
        params: params
    });

    // Finally inform of the breadcrumb
    return breadcrumb.reverse();
};

/**
 * Loading reducer maker
 * @param  {array}  INITIAL_STATE
 * @param  {object} BREADCRUMB_SCHEMA
 * @return {function}
 */
var reducer = function (INITIAL_STATE, BREADCRUMB_SCHEMA) {
    INITIAL_STATE = INITIAL_STATE || [];
    BREADCRUMB_SCHEMA = BREADCRUMB_SCHEMA || {};

    // Finally return the reducer
    return function (state, action) {
        state = state || INITIAL_STATE;
        action = action || {};

        switch (action.type) {
        case 'SET_CONTENT':
            return setContent(action, BREADCRUMB_SCHEMA);
        default:
            return merge([], state, { clone: true });
        }
    };
};

// -----------------------------------------
// EXPORT

module.exports = reducer;
