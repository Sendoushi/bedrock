import appActions from '../../app/actions.js';

// -----------------------------------------
// FUNCTIONS

/**
 * Index
 */
const index = {
    type: 'INDEX',
    url: '/',
    onRoute: (route, ctx) => {
        const params = ctx.params;
        const type = route.type;

        appActions.setContent({ type, params });
    }
};

/**
 * Login
 */
const login = {
    type: 'LOGIN',
    url: '/login',
    onRoute: (route, ctx) => {
        const params = ctx.params;
        const type = route.type;

        appActions.setContent({ type, params });
    }
};

/**
 * Logout
 */
const logout = {
    type: 'LOGOUT',
    url: '/logout',
    onRoute: (route, ctx) => {
        const params = ctx.params;
        const type = route.type;

        appActions.setContent({ type, params });
    }
};

// -----------------------------------------
// EXPORT

export default [index, login, logout];
