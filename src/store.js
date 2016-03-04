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
const breadcrumbReducer = (INITIAL_STATE = [], BREADCRUMB_SCHEMA = {}) => {
    /**
     * Sets crumb in breadcrumb
     * @param  {array} breadcrumb
     * @param  {object} crumb
     * @return {array}
     */
    const pushCrumb = (breadcrumb = [], crumb = {}) => {
        const type = crumb.type;
        const name = crumb.name;
        const params = crumb.params;

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
    const reducer = (state = INITIAL_STATE, action = {}) => {
        switch (action.type) {
        case 'SET_CONTENT':
            const params = action.content.params;
            let breadcrumb = [];
            let type = action.content.type;
            let breadcrumbType = BREADCRUMB_SCHEMA[type] || {};

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
            return [...state];
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
const loadingReducer = (INITIAL_STATE = false) => {
    /**
     * Loading reducer
     * @param  {object}  state
     * @param  {object}  action
     * @return {object}
     */
    const reducer = (state = INITIAL_STATE, action = {}) => {
        const type = action.type;
        const diff = type.replace('_LOADING', '') !== type;

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
const errReducer = (INITIAL_STATE = null) => {
    /**
     * Error reducer
     * @param  {object}  state
     * @param  {object}  action
     * @return {object}
     */
    const reducer = (state = INITIAL_STATE, action = {}) => {
        const type = action.type;
        const diff = type.replace('_ERR', '') !== type;

        return diff ? action.err : state;
    };

    // Finally return the reducer
    return reducer;
};

// -----------------------------------------
// EXPORT

export {
    breadcrumbReducer, loadingReducer, errReducer
};
