'use strict';

import merge from 'lodash/merge.js';

// -----------------------------------------
// Functions

/**
 * Sets crumb in breadcrumb
 * @param  {array} breadcrumb
 * @param  {object} crumb
 * @return {array}
 */
// { title: 'breadcrumb', type: 'array', default: [] },
// { title: 'crumb', properties: {
//     params: {},
//     type: { type: 'string' },
//     name: { type: 'string' }
// }, default: {} }
const pushCrumb = (breadcrumb = [], crumb = {}) => {
    const params = crumb.params;
    const type = crumb.type;
    const name = crumb.name;

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
// { title: 'action', properties: {
//     content: { properties: {
//         params: {},
//         type: { type: 'string' }
//     } }
// }, required: true },
// { title: 'schema', properties: {}, required: true }
const setContent = (action, schema) => {
    const params = action.content.params;
    let breadcrumb = [];
    let type = action.content.type;
    let breadcrumbType = schema[type] || {};

    // Loop to get all breadcrumbs with parent
    while (breadcrumbType.hasOwnProperty('parentType')) {
        // Set a new breadcrumb
        breadcrumb = pushCrumb(breadcrumb, { name: breadcrumbType && breadcrumbType.name, type, params });

        // Set the new breadcrumb for the parent
        type = breadcrumbType.parentType;
        breadcrumbType = schema[type];

        if (!breadcrumbType) {
            break;
        }
    }

    // Add the type without parentType
    breadcrumb = pushCrumb(breadcrumb, { name: breadcrumbType && breadcrumbType.name, type, params });

    // Finally inform of the breadcrumb
    return breadcrumb.reverse();
};

/**
 * Loading reducer maker
 * @param  {array}  INITIAL_STATE
 * @param  {object} BREADCRUMB_SCHEMA
 * @return {function}
 */
// { title: 'INITIAL_STATE', type: 'array', default: [] },
// { title: 'BREADCRUMB_SCHEMA', properties: {}, default: [] }
const reducer = (INITIAL_STATE = [], BREADCRUMB_SCHEMA = {}) => (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
    case 'SET_CONTENT':
        return setContent(action, BREADCRUMB_SCHEMA);
    default:
        return merge([], state);
    }
};

// -----------------------------------------
// Export

export default reducer;
