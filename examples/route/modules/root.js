var actions = require('../../modules/actions.js');

// -----------------------------------------
// FUNCTIONS

/**
 * Index
 */
var index = {
    type: 'INDEX',
    url: '/',
    /**
     * Route handler
     * @param  {object} route
     * @param  {object} ctx
     * @param  {function} next
     */
    onRoute: function () {
        actions.setContent({
            type: 'SEARCH',
            params: {
                query: 'funny'
            }
        });
    }
};

/**
 * Search
 */
var search = {
    type: 'SEARCH',
    url: '/search/:query',
    /**
     * Url parsing
     * @param  {object} params
     * @return {string}
     */
    urlParse: function (params) {
        return '/search/' + params.query;
    },
    /**
     * Route handler
     * @param  {object} route
     * @param  {object} ctx
     * @param  {function} next
     */
    onRoute: function (route, ctx) {
        var params = ctx.params;
        var type = route.type;

        actions.setContent({ type, params });
    }
};

// -----------------------------------------
// EXPORT

module.exports = [index, search];
