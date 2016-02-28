import { createStore, combineReducers } from 'redux';

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
        const breadcrumb = [];
        let type = action.content.type;
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
    default:
        return state;
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
        return action.content;
    default:
        return state;
    }
};

// -----------------------------------------
// Initialize

const reducers = combineReducers({ breadcrumb, content });
const store = createStore(reducers);

// Register more methods
store.getInitial = () => INITIAL_STATE;

// -----------------------------------------
// EXPORT

export default store;
