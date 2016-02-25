import { initStore } from 'sdsFrontend/store';

// -----------------------------------------
// VARS

const BREADCRUMB_SCHEMA = {
    'INDEX': { name: 'Dashboard' },
    'ADD': { name: 'Adicionar', parentType: 'INDEX' }
};

const INITIAL_STATE = {
    modules: [
        { name: 'Dashboard', routeType: 'INDEX' }
    ],
    breadcrumb: [],
    modal: {
        type: null,
        params: {}
    },
    data: {
        content: {
            type: '',
            params: {}
        }
    }
};

// -----------------------------------------
// FUNCTIONS

/**
 * Builds breadcrumb
 * @param  {string} contentType
 * @param  {string} contentParams
 * @return {object}
 */
const buildBreadcrumb = (contentType, contentParams) => {
    const params = contentParams;
    const breadcrumb = [];
    let type = contentType;
    let breadcrumbType = BREADCRUMB_SCHEMA[type];

    // Loop to get all breadcrumbs with parent
    while (breadcrumbType.hasOwnProperty('parentType')) {
        // Set a new breadcrumb
        breadcrumb.push({
            name: breadcrumbType.name,
            routeType: type,
            params
        });

        // Set the new breadcrumb for the parent
        type = breadcrumbType.parentType;
        breadcrumbType = BREADCRUMB_SCHEMA[type];
    }

    // Add the type without parentType
    breadcrumb.push({
        name: breadcrumbType.name,
        routeType: type,
        params
    });

    // Finally inform of the breadcrumb
    return breadcrumb.reverse();
};

/**
 * Sets content
 * @param  {object}  state
 * @param  {object}  action
 * @return {object}
 */
const setContent = (state, action) => {
    const content = action.content;

    // Modify needed
    state.data.content = content;
    state.breadcrumb = buildBreadcrumb(content.type, content.params);

    return state;
};

// -----------------------------------------
// EXPORT

export default initStore(INITIAL_STATE, {
    'SET_CONTENT': setContent
});
