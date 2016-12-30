'use strict';

import merge from 'lodash/merge.js';
import { compileSchema, getSchema } from 'bedrock-utils/src/validate.js';

// -----------------------------------------
// Functions

/**
 * Sets crumb in breadcrumb
 * @param  {array} breadcrumb
 * @param  {object} crumb
 * @return {array}
 */
const pushCrumbValidate = compileSchema(getSchema([
    { title: 'breadcrumb', type: 'array', required: true },
    { title: 'crumb', properties: {
        // params: {},
        type: { type: 'string' },
        name: { type: 'string' }
    }, required: true }
]));
const pushCrumb = (breadcrumb = [], crumb = {}) => {
    pushCrumbValidate([breadcrumb, crumb]);

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
const setContentValidate = compileSchema(getSchema([
    { title: 'action', properties: {
        content: { properties: {
            params: {},
            type: { type: 'string' }
        } }
    }, required: true },
    { title: 'schema', properties: {}, required: true }
]));
const setContent = (action, schema) => {
    setContentValidate([action, schema]);

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
const reducerValidate = compileSchema(getSchema([
    { title: 'INITIAL_STATE', type: 'array', required: true },
    { title: 'BREADCRUMB_SCHEMA', properties: {}, required: true }
]));
const reducer = (INITIAL_STATE = [], BREADCRUMB_SCHEMA = {}) => {
    reducerValidate([INITIAL_STATE, BREADCRUMB_SCHEMA]);

    return (state = INITIAL_STATE, action = {}) => {
        switch (action.type) {
        case 'SET_CONTENT':
            return setContent(action, BREADCRUMB_SCHEMA);
        default:
            return merge([], state);
        }
    };
};

// -----------------------------------------
// Export

export default reducer;
