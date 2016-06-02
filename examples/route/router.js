var router = require('../../src/router');
var actions = require('../modules/actions.js');
var rootRoutes = require('./modules/root.js');

// -----------------------------------------
// VARS

var content = actions.getState().app.content;
var allRoutes = [].concat(rootRoutes);

// -----------------------------------------
// INITIALIZE

// Wait for the store to initialize
router.init(allRoutes, content);

// Add to the update pool
actions.subscribe(function () {
    var state = actions.getState().app;
    router.updateOnAction(allRoutes, state);
});

// -----------------------------------------
// EXPORT

module.exports = function (route) {
    return router.setRoute(allRoutes, route);
}
