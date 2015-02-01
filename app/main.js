requirejs([
    'config',
    'backbone',
    'jquery',
    'Foundation/Router'
], function (config, Backbone, $, Router) {
    'use strict';

    var mainApp = {
        /**
         * Builds the router
         */
        buildRouter: function () {
            this._appRouter = new Router();
            this._appRouter.on('statechange', function (state) {
                console.log("state changed!!", state);

                // What about 404?
                state.name === 'notFound' && this._appRouter.navigate('', { trigger: true });
            }.bind(this));

            // Starts router
            this._appRouter.start();
        }
    };

    // Check if document is ready to proceed
    $(document.body).ready(function () {
        mainApp.buildRouter();

        // TODO...
    });
});
