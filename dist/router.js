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
    for (var c /* :: :number */ = 0; c < route.cbs.length; c += 1) {
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
    for (var i /* :: :number */ = 0; i < routes.length; i += 1) {
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
    for (var i /* :: :number */ = 0; i < routes.length; i += 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXIuanMiXSwibmFtZXMiOlsicm91dGVzIiwiREVGQVVMVFMiLCJldmVudHMiLCJhZGQiLCJzdGFydCIsImNiUm91dGUiLCJyb3V0ZSIsImN0eCIsIm5leHQiLCJjIiwiY2JzIiwibGVuZ3RoIiwiY2IiLCJpIiwicHVzaCIsIm9wdHMiLCJiaW5kIiwib24iLCJkYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6IkFBQVc7QUFDWDs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTSxnQkFBTixHQUF5QixFQUEvQjtBQUNBLElBQU1DLFdBQVc7QUFDYkMsWUFBUTtBQUNKQyxhQUFLLFlBREQ7QUFFSkMsZUFBTztBQUZIO0FBREssQ0FBakI7O0FBT0E7QUFDQTs7QUFFQTs7Ozs7QUFLQSxJQUFNQyxRQUFPLG1CQUFQLEdBQTZCLFNBQTdCQSxPQUE2QixDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBYUMsSUFBYixFQUFzQjtBQUNyRCxTQUFLLElBQUlDLEVBQUMsZ0JBQUQsR0FBb0IsQ0FBN0IsRUFBZ0NBLElBQUlILE1BQU1JLEdBQU4sQ0FBVUMsTUFBOUMsRUFBc0RGLEtBQUssQ0FBM0QsRUFBOEQ7QUFDMURILGNBQU1JLEdBQU4sQ0FBVUQsQ0FBVixFQUFhRixHQUFiLEVBQWtCQyxJQUFsQjtBQUNIO0FBQ0osQ0FKRDs7QUFNQTs7Ozs7QUFLQSxJQUFNTCxJQUFHLGVBQUgsR0FBcUIsU0FBckJBLEdBQXFCLENBQUNHLEtBQUQsRUFBUU0sRUFBUixFQUFlO0FBQ3RDO0FBQ0EsU0FBSyxJQUFJQyxFQUFDLGdCQUFELEdBQW9CLENBQTdCLEVBQWdDQSxJQUFJYixPQUFPVyxNQUEzQyxFQUFtREUsS0FBSyxDQUF4RCxFQUEyRDtBQUN2RCxZQUFJYixPQUFPYSxDQUFQLEVBQVVQLEtBQVYsS0FBb0JBLEtBQXhCLEVBQStCO0FBQzNCTixtQkFBT2EsQ0FBUCxFQUFVSCxHQUFWLENBQWNJLElBQWQsQ0FBbUJGLEVBQW5CO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0FaLFdBQU9jLElBQVAsQ0FBWSxFQUFFUixZQUFGLEVBQVNJLEtBQUssQ0FBQ0UsRUFBRCxDQUFkLEVBQVo7QUFDSCxDQVhEOztBQWFBOzs7O0FBSUEsSUFBTVIsTUFBSyxpQkFBTCxHQUF5QixTQUF6QkEsS0FBeUIsQ0FBQ1csSUFBRCxFQUFVO0FBQ3JDLFFBQUksQ0FBQ2YsT0FBT1csTUFBWixFQUFvQjtBQUNoQjtBQUNIOztBQUVEO0FBQ0EsU0FBSyxJQUFJRSxFQUFDLGdCQUFELEdBQW9CLENBQTdCLEVBQWdDQSxJQUFJYixPQUFPVyxNQUEzQyxFQUFtREUsS0FBSyxDQUF4RCxFQUEyRDtBQUN2RCxZQUFNUCxNQUFLLGVBQUwsR0FBdUJOLE9BQU9hLENBQVAsQ0FBN0I7O0FBRUE7QUFDQSw0QkFBS1AsTUFBTUEsS0FBWCxFQUFrQkQsUUFBUVcsSUFBUixDQUFhLElBQWIsRUFBbUJWLEtBQW5CLENBQWxCO0FBQ0g7O0FBRUQ7QUFDQSxtQkFBS0YsS0FBTCxDQUFXVyxJQUFYO0FBQ0gsQ0FmRDs7QUFpQkE7QUFDQTs7QUFFQSxrQkFBUUUsRUFBUixDQUFXaEIsU0FBU0MsTUFBVCxDQUFnQkUsS0FBM0IsRUFBa0NBLEtBQWxDO0FBQ0Esa0JBQVFhLEVBQVIsQ0FBV2hCLFNBQVNDLE1BQVQsQ0FBZ0JDLEdBQTNCLEVBQWdDLFVBQUNlLElBQUQsQ0FBSyxrQkFBTDtBQUFBLFdBQTRCZixJQUFJZSxLQUFLWixLQUFULEVBQWdCWSxLQUFLTixFQUFyQixDQUE1QjtBQUFBLENBQWhDOztBQUVBO0FBQ0E7O2tCQUVlLEVBQUVSLFlBQUYsRUFBU0QsUUFBVCxFQUFjZ0Isb0JBQWQsRSIsImZpbGUiOiJyb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqLy8qIDo6IGltcG9ydCB0eXBlIHtSb3V0ZXMsIFJvdXRlLCBBZGRSb3V0ZSwgRm5BZGQsIEZuQ2JSb3V0ZSwgRm5TdGFydH0gZnJvbSAnLi9fdGVzdC9yb3V0ZXIuZmxvdy5qcyc7ICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBwYWdlIGZyb20gJ3BhZ2UnO1xuaW1wb3J0IG1haWxib3ggZnJvbSAnLi9tYWlsYm94LmpzJztcblxuY29uc3Qgcm91dGVzLyogOjogOlJvdXRlcyAqLyA9IFtdO1xuY29uc3QgREVGQVVMVFMgPSB7XG4gICAgZXZlbnRzOiB7XG4gICAgICAgIGFkZDogJ3JvdXRlci5hZGQnLFxuICAgICAgICBzdGFydDogJ3JvdXRlci5zdGFydCdcbiAgICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogQ2FsbGJhY2sgdGhlIHJvdXRlXG4gKiBAcGFyYW0gIHtvYmplY3R9IHJvdXRlXG4gKiBAcGFyYW0gIHtvYmplY3R9IGN0eFxuICovXG5jb25zdCBjYlJvdXRlLyogOjogOkZuQ2JSb3V0ZSAqLyA9IChyb3V0ZSwgY3R4LCBuZXh0KSA9PiB7XG4gICAgZm9yIChsZXQgYy8qIDo6IDpudW1iZXIgKi8gPSAwOyBjIDwgcm91dGUuY2JzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgICAgIHJvdXRlLmNic1tjXShjdHgsIG5leHQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQWRkcyBhIHJvdXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbmNvbnN0IGFkZC8qIDo6IDpGbkFkZCAqLyA9IChyb3V0ZSwgY2IpID0+IHtcbiAgICAvLyBMZXRzIHNlZSBpZiB0aGUgcm91dGUgaXMgYWxyZWFkeSBkZWZpbmVkXG4gICAgZm9yIChsZXQgaS8qIDo6IDpudW1iZXIgKi8gPSAwOyBpIDwgcm91dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChyb3V0ZXNbaV0ucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByb3V0ZXNbaV0uY2JzLnB1c2goY2IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2FjaGUgdGhlIGNhbGxiYWNrIGFuZCByb3V0ZSBmb3IgbGF0ZXIgdXNlXG4gICAgcm91dGVzLnB1c2goeyByb3V0ZSwgY2JzOiBbY2JdIH0pO1xufTtcblxuLyoqXG4gKiBTdGFydHMgdGhlIHJvdXRlclxuICogQHBhcmFtICB7b2JqZWN0fSBvcHRzXG4gKi9cbmNvbnN0IHN0YXJ0LyogOjogOkZuU3RhcnQgKi8gPSAob3B0cykgPT4ge1xuICAgIGlmICghcm91dGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTGV0cyBhZGQgYWxsIHJvdXRlcnMgdG8gdGhlIHJpZ2h0IHBsYWNlc1xuICAgIGZvciAobGV0IGkvKiA6OiA6bnVtYmVyICovID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByb3V0ZS8qIDo6IDpSb3V0ZSAqLyA9IHJvdXRlc1tpXTtcblxuICAgICAgICAvLyBMZXRzIGZpbmFsbHkgc2V0IGl0IGluIHRoZSBcInBhZ2VcIlxuICAgICAgICBwYWdlKHJvdXRlLnJvdXRlLCBjYlJvdXRlLmJpbmQobnVsbCwgcm91dGUpKTtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5IHN0YXJ0aW5nIHRoZSByb3V0ZXNcbiAgICBwYWdlLnN0YXJ0KG9wdHMpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJ1bnRpbWVcblxubWFpbGJveC5vbihERUZBVUxUUy5ldmVudHMuc3RhcnQsIHN0YXJ0KTtcbm1haWxib3gub24oREVGQVVMVFMuZXZlbnRzLmFkZCwgKGRhdGEvKiA6OiA6QWRkUm91dGUgKi8pID0+IGFkZChkYXRhLnJvdXRlLCBkYXRhLmNiKSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgeyBzdGFydCwgYWRkLCBwYWdlIH07XG4iXX0=