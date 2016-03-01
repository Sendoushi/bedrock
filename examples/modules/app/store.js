import { combineReducers } from 'redux';

// -----------------------------------------
// VARS

const BREADCRUMB_SCHEMA = {
    'INDEX': { name: 'Dashboard' },
    'ADD': { name: 'Adicionar', parentType: 'INDEX' }
};

const INITIAL_STATE = {
    breadcrumb: [],
    content: {
        type: '',
        params: {}
    },
    modal: {
        type: null,
        params: {}
    },
    modules: [
        { name: 'Dashboard', routeType: 'INDEX' }
    ]
};

// -----------------------------------------
// FUNCTIONS

/**
 * Breadcrumb reducer
 * @param  {object}  state
 * @param  {object}  action
 * @return {object}
 */
const breadcrumb = (state = INITIAL_STATE.breadcrumb, action) => {
    switch (action.type) {
    case 'SET_CONTENT':
        const params = action.content.params;
        const breadcrumbArr = [];
        let type = action.content.type;
        let breadcrumbType = BREADCRUMB_SCHEMA[type];

        // Loop to get all breadcrumbs with parent
        while (breadcrumbType.hasOwnProperty('parentType')) {
            // Set a new breadcrumb
            breadcrumbArr.push({
                name: breadcrumbType.name,
                routeType: type,
                params
            });

            // Set the new breadcrumb for the parent
            type = breadcrumbType.parentType;
            breadcrumbType = BREADCRUMB_SCHEMA[type];
        }

        // Add the type without parentType
        breadcrumbArr.push({
            name: breadcrumbType.name,
            routeType: type,
            params
        });

        // Finally inform of the breadcrumb
        return breadcrumbArr.reverse();
    default:
        return [...state];
    }
};

/**
 * Content reducer
 * @param  {object}  state
 * @param  {object}  action
 * @return {object}
 */
const content = (state = INITIAL_STATE.content, action) => {
    switch (action.type) {
    case 'SET_CONTENT':
        return { ...action.content };
    default:
        return { ...state };
    }
};

/**
 * Sets modal
 * @param  {object} state
 * @param  {object} action
 * @return {object}
 */
const modal = (state = INITIAL_STATE.modal, action) => {
    switch (action.type) {
    case 'SET_MODAL':
        return { ...action.modal };
    default:
        return { ...state };
    }
};

// -----------------------------------------
// EXPORT

export default {
    getInitial: () => INITIAL_STATE,
    reducers: combineReducers({ breadcrumb, modal, content })
};
