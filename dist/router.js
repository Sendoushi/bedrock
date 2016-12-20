/* :: import type {Routes, Route, AddRoute, FnAdd, FnCbRoute, FnStart} from './_test/router.flow.js'; */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _page = require('page');

var _page2 = _interopRequireDefault(_page);

var _mailbox = require('./mailbox.js');

var _mailbox2 = _interopRequireDefault(_mailbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes /* :: :Routes */ = [];
var DEFAULTS = {
    events: {
        add: 'router.add',
        start: 'router.start'
    }
};

// --------------------------------
// Functions

/**
 * Callback the route
 * @param  {object} route
 * @param  {object} ctx
 */
var cbRoute /* :: :FnCbRoute */ = function cbRoute(route, ctx, next) {
    for (var c = 0; c < route.cbs.length; c += 1) {
        route.cbs[c](ctx, next);
    }
};

/**
 * Adds a route
 * @param {string} route
 * @param {function} cb
 */
var add /* :: :FnAdd */ = function add(route, cb) {
    // Lets see if the route is already defined
    for (var i = 0; i < routes.length; i += 1) {
        if (routes[i].route === route) {
            routes[i].cbs.push(cb);
            return;
        }
    }

    // Cache the callback and route for later use
    routes.push({ route: route, cbs: [cb] });
};

/**
 * Starts the router
 * @param  {object} opts
 */
var start /* :: :FnStart */ = function start(opts) {
    if (!routes.length) {
        return;
    }

    // Lets add all routers to the right places
    for (var i = 0; i < routes.length; i += 1) {
        var route /* :: :Route */ = routes[i];

        // Lets finally set it in the "page"
        (0, _page2.default)(route.route, cbRoute.bind(null, route));
    }

    // Finally starting the routes
    _page2.default.start(opts);
};

// --------------------------------
// Runtime

_mailbox2.default.on(DEFAULTS.events.start, start);
_mailbox2.default.on(DEFAULTS.events.add, function (data /* :: :AddRoute */) {
    return add(data.route, data.cb);
});

// --------------------------------
// Export

exports.default = { start: start, add: add, page: _page2.default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXIuanMiXSwibmFtZXMiOlsicm91dGVzIiwiREVGQVVMVFMiLCJldmVudHMiLCJhZGQiLCJzdGFydCIsImNiUm91dGUiLCJyb3V0ZSIsImN0eCIsIm5leHQiLCJjIiwiY2JzIiwibGVuZ3RoIiwiY2IiLCJpIiwicHVzaCIsIm9wdHMiLCJiaW5kIiwib24iLCJkYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6IkFBQVc7QUFDWDs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTSxnQkFBTixHQUF5QixFQUEvQjtBQUNBLElBQU1DLFdBQVc7QUFDYkMsWUFBUTtBQUNKQyxhQUFLLFlBREQ7QUFFSkMsZUFBTztBQUZIO0FBREssQ0FBakI7O0FBT0E7QUFDQTs7QUFFQTs7Ozs7QUFLQSxJQUFNQyxRQUFPLG1CQUFQLEdBQTZCLFNBQTdCQSxPQUE2QixDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBYUMsSUFBYixFQUFzQjtBQUNyRCxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsTUFBTUksR0FBTixDQUFVQyxNQUE5QixFQUFzQ0YsS0FBSyxDQUEzQyxFQUE4QztBQUMxQ0gsY0FBTUksR0FBTixDQUFVRCxDQUFWLEVBQWFGLEdBQWIsRUFBa0JDLElBQWxCO0FBQ0g7QUFDSixDQUpEOztBQU1BOzs7OztBQUtBLElBQU1MLElBQUcsZUFBSCxHQUFxQixTQUFyQkEsR0FBcUIsQ0FBQ0csS0FBRCxFQUFRTSxFQUFSLEVBQWU7QUFDdEM7QUFDQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSWIsT0FBT1csTUFBM0IsRUFBbUNFLEtBQUssQ0FBeEMsRUFBMkM7QUFDdkMsWUFBSWIsT0FBT2EsQ0FBUCxFQUFVUCxLQUFWLEtBQW9CQSxLQUF4QixFQUErQjtBQUMzQk4sbUJBQU9hLENBQVAsRUFBVUgsR0FBVixDQUFjSSxJQUFkLENBQW1CRixFQUFuQjtBQUNBO0FBQ0g7QUFDSjs7QUFFRDtBQUNBWixXQUFPYyxJQUFQLENBQVksRUFBRVIsWUFBRixFQUFTSSxLQUFLLENBQUNFLEVBQUQsQ0FBZCxFQUFaO0FBQ0gsQ0FYRDs7QUFhQTs7OztBQUlBLElBQU1SLE1BQUssaUJBQUwsR0FBeUIsU0FBekJBLEtBQXlCLENBQUNXLElBQUQsRUFBVTtBQUNyQyxRQUFJLENBQUNmLE9BQU9XLE1BQVosRUFBb0I7QUFDaEI7QUFDSDs7QUFFRDtBQUNBLFNBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJYixPQUFPVyxNQUEzQixFQUFtQ0UsS0FBSyxDQUF4QyxFQUEyQztBQUN2QyxZQUFNUCxNQUFLLGVBQUwsR0FBdUJOLE9BQU9hLENBQVAsQ0FBN0I7O0FBRUE7QUFDQSw0QkFBS1AsTUFBTUEsS0FBWCxFQUFrQkQsUUFBUVcsSUFBUixDQUFhLElBQWIsRUFBbUJWLEtBQW5CLENBQWxCO0FBQ0g7O0FBRUQ7QUFDQSxtQkFBS0YsS0FBTCxDQUFXVyxJQUFYO0FBQ0gsQ0FmRDs7QUFpQkE7QUFDQTs7QUFFQSxrQkFBUUUsRUFBUixDQUFXaEIsU0FBU0MsTUFBVCxDQUFnQkUsS0FBM0IsRUFBa0NBLEtBQWxDO0FBQ0Esa0JBQVFhLEVBQVIsQ0FBV2hCLFNBQVNDLE1BQVQsQ0FBZ0JDLEdBQTNCLEVBQWdDLFVBQUNlLElBQUQsQ0FBSyxrQkFBTDtBQUFBLFdBQTRCZixJQUFJZSxLQUFLWixLQUFULEVBQWdCWSxLQUFLTixFQUFyQixDQUE1QjtBQUFBLENBQWhDOztBQUVBO0FBQ0E7O2tCQUVlLEVBQUVSLFlBQUYsRUFBU0QsUUFBVCxFQUFjZ0Isb0JBQWQsRSIsImZpbGUiOiJyb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqLy8qIDo6IGltcG9ydCB0eXBlIHtSb3V0ZXMsIFJvdXRlLCBBZGRSb3V0ZSwgRm5BZGQsIEZuQ2JSb3V0ZSwgRm5TdGFydH0gZnJvbSAnLi9fdGVzdC9yb3V0ZXIuZmxvdy5qcyc7ICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBwYWdlIGZyb20gJ3BhZ2UnO1xuaW1wb3J0IG1haWxib3ggZnJvbSAnLi9tYWlsYm94LmpzJztcblxuY29uc3Qgcm91dGVzLyogOjogOlJvdXRlcyAqLyA9IFtdO1xuY29uc3QgREVGQVVMVFMgPSB7XG4gICAgZXZlbnRzOiB7XG4gICAgICAgIGFkZDogJ3JvdXRlci5hZGQnLFxuICAgICAgICBzdGFydDogJ3JvdXRlci5zdGFydCdcbiAgICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogQ2FsbGJhY2sgdGhlIHJvdXRlXG4gKiBAcGFyYW0gIHtvYmplY3R9IHJvdXRlXG4gKiBAcGFyYW0gIHtvYmplY3R9IGN0eFxuICovXG5jb25zdCBjYlJvdXRlLyogOjogOkZuQ2JSb3V0ZSAqLyA9IChyb3V0ZSwgY3R4LCBuZXh0KSA9PiB7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCByb3V0ZS5jYnMubGVuZ3RoOyBjICs9IDEpIHtcbiAgICAgICAgcm91dGUuY2JzW2NdKGN0eCwgbmV4dCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBZGRzIGEgcm91dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2JcbiAqL1xuY29uc3QgYWRkLyogOjogOkZuQWRkICovID0gKHJvdXRlLCBjYikgPT4ge1xuICAgIC8vIExldHMgc2VlIGlmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IGRlZmluZWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAocm91dGVzW2ldLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcm91dGVzW2ldLmNicy5wdXNoKGNiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENhY2hlIHRoZSBjYWxsYmFjayBhbmQgcm91dGUgZm9yIGxhdGVyIHVzZVxuICAgIHJvdXRlcy5wdXNoKHsgcm91dGUsIGNiczogW2NiXSB9KTtcbn07XG5cbi8qKlxuICogU3RhcnRzIHRoZSByb3V0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gb3B0c1xuICovXG5jb25zdCBzdGFydC8qIDo6IDpGblN0YXJ0ICovID0gKG9wdHMpID0+IHtcbiAgICBpZiAoIXJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIExldHMgYWRkIGFsbCByb3V0ZXJzIHRvIHRoZSByaWdodCBwbGFjZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByb3V0ZS8qIDo6IDpSb3V0ZSAqLyA9IHJvdXRlc1tpXTtcblxuICAgICAgICAvLyBMZXRzIGZpbmFsbHkgc2V0IGl0IGluIHRoZSBcInBhZ2VcIlxuICAgICAgICBwYWdlKHJvdXRlLnJvdXRlLCBjYlJvdXRlLmJpbmQobnVsbCwgcm91dGUpKTtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5IHN0YXJ0aW5nIHRoZSByb3V0ZXNcbiAgICBwYWdlLnN0YXJ0KG9wdHMpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJ1bnRpbWVcblxubWFpbGJveC5vbihERUZBVUxUUy5ldmVudHMuc3RhcnQsIHN0YXJ0KTtcbm1haWxib3gub24oREVGQVVMVFMuZXZlbnRzLmFkZCwgKGRhdGEvKiA6OiA6QWRkUm91dGUgKi8pID0+IGFkZChkYXRhLnJvdXRlLCBkYXRhLmNiKSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgeyBzdGFydCwgYWRkLCBwYWdlIH07XG4iXX0=