'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _page = require('page');

var _page2 = _interopRequireDefault(_page);

var _mailbox = require('./mailbox.js');

var _mailbox2 = _interopRequireDefault(_mailbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [];
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
var cbRouteValidate = void 0;
var cbRoute = function cbRoute(route, ctx, next) {
    cbRouteValidate([route]);

    for (var c = 0; c < route.cbs.length; c += 1) {
        route.cbs[c](ctx, next);
    }
};

/**
 * Adds a route
 * @param {string} route
 * @param {function} cb
 */
var addValidate = void 0;
var add = function add(route, cb) {
    addValidate([route]);

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
var startValidate = void 0;
var start = function start(opts) {
    startValidate([opts]);

    if (!routes.length) {
        return;
    }

    // Lets add all routers to the right places
    for (var i = 0; i < routes.length; i += 1) {
        var route = routes[i];

        // Lets finally set it in the "page"
        (0, _page2.default)(route.route, cbRoute.bind(null, route));
    }

    // Finally starting the routes
    _page2.default.start(opts);
};

// --------------------------------
// Runtime

_mailbox2.default.on(DEFAULTS.events.start, start);
_mailbox2.default.on(DEFAULTS.events.add, function (data) {
    return add(data.route, data.cb);
});

// --------------------------------
// Export

exports.default = { start: start, add: add, page: _page2.default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXIuanMiXSwibmFtZXMiOlsicm91dGVzIiwiREVGQVVMVFMiLCJldmVudHMiLCJhZGQiLCJzdGFydCIsImNiUm91dGVWYWxpZGF0ZSIsImNiUm91dGUiLCJyb3V0ZSIsImN0eCIsIm5leHQiLCJjIiwiY2JzIiwibGVuZ3RoIiwiYWRkVmFsaWRhdGUiLCJjYiIsImkiLCJwdXNoIiwic3RhcnRWYWxpZGF0ZSIsIm9wdHMiLCJiaW5kIiwib24iLCJkYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLFNBQVMsRUFBZjtBQUNBLElBQU1DLFdBQVc7QUFDYkMsWUFBUTtBQUNKQyxhQUFLLFlBREQ7QUFFSkMsZUFBTztBQUZIO0FBREssQ0FBakI7O0FBT0E7QUFDQTs7QUFFQTs7Ozs7QUFLQSxJQUFNQyx3QkFBTjtBQUtBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBYUMsSUFBYixFQUFzQjtBQUNsQ0osb0JBQWdCLENBQUNFLEtBQUQsQ0FBaEI7O0FBRUEsU0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILE1BQU1JLEdBQU4sQ0FBVUMsTUFBOUIsRUFBc0NGLEtBQUssQ0FBM0MsRUFBOEM7QUFDMUNILGNBQU1JLEdBQU4sQ0FBVUQsQ0FBVixFQUFhRixHQUFiLEVBQWtCQyxJQUFsQjtBQUNIO0FBQ0osQ0FORDs7QUFRQTs7Ozs7QUFLQSxJQUFNSSxvQkFBTjtBQUlBLElBQU1WLE1BQU0sU0FBTkEsR0FBTSxDQUFDSSxLQUFELEVBQVFPLEVBQVIsRUFBZTtBQUN2QkQsZ0JBQVksQ0FBQ04sS0FBRCxDQUFaOztBQUVBO0FBQ0EsU0FBSyxJQUFJUSxJQUFJLENBQWIsRUFBZ0JBLElBQUlmLE9BQU9ZLE1BQTNCLEVBQW1DRyxLQUFLLENBQXhDLEVBQTJDO0FBQ3ZDLFlBQUlmLE9BQU9lLENBQVAsRUFBVVIsS0FBVixLQUFvQkEsS0FBeEIsRUFBK0I7QUFDM0JQLG1CQUFPZSxDQUFQLEVBQVVKLEdBQVYsQ0FBY0ssSUFBZCxDQUFtQkYsRUFBbkI7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDQWQsV0FBT2dCLElBQVAsQ0FBWSxFQUFFVCxZQUFGLEVBQVNJLEtBQUssQ0FBQ0csRUFBRCxDQUFkLEVBQVo7QUFDSCxDQWJEOztBQWVBOzs7O0FBSUEsSUFBTUcsc0JBQU47QUFHQSxJQUFNYixRQUFRLFNBQVJBLEtBQVEsQ0FBQ2MsSUFBRCxFQUFVO0FBQ3BCRCxrQkFBYyxDQUFDQyxJQUFELENBQWQ7O0FBRUEsUUFBSSxDQUFDbEIsT0FBT1ksTUFBWixFQUFvQjtBQUNoQjtBQUNIOztBQUVEO0FBQ0EsU0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlmLE9BQU9ZLE1BQTNCLEVBQW1DRyxLQUFLLENBQXhDLEVBQTJDO0FBQ3ZDLFlBQU1SLFFBQVFQLE9BQU9lLENBQVAsQ0FBZDs7QUFFQTtBQUNBLDRCQUFLUixNQUFNQSxLQUFYLEVBQWtCRCxRQUFRYSxJQUFSLENBQWEsSUFBYixFQUFtQlosS0FBbkIsQ0FBbEI7QUFDSDs7QUFFRDtBQUNBLG1CQUFLSCxLQUFMLENBQVdjLElBQVg7QUFDSCxDQWpCRDs7QUFtQkE7QUFDQTs7QUFFQSxrQkFBUUUsRUFBUixDQUFXbkIsU0FBU0MsTUFBVCxDQUFnQkUsS0FBM0IsRUFBa0NBLEtBQWxDO0FBQ0Esa0JBQVFnQixFQUFSLENBQVduQixTQUFTQyxNQUFULENBQWdCQyxHQUEzQixFQUFnQyxVQUFDa0IsSUFBRDtBQUFBLFdBQVVsQixJQUFJa0IsS0FBS2QsS0FBVCxFQUFnQmMsS0FBS1AsRUFBckIsQ0FBVjtBQUFBLENBQWhDOztBQUVBO0FBQ0E7O2tCQUVlLEVBQUVWLFlBQUYsRUFBU0QsUUFBVCxFQUFjbUIsb0JBQWQsRSIsImZpbGUiOiJyb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBwYWdlIGZyb20gJ3BhZ2UnO1xuaW1wb3J0IHsgY29tcGlsZVNjaGVtYSwgZ2V0U2NoZW1hIH0gZnJvbSAnYmVkcm9jay11dGlscy9zcmMvdmFsaWRhdGUuanMnO1xuaW1wb3J0IG1haWxib3ggZnJvbSAnLi9tYWlsYm94LmpzJztcblxuY29uc3Qgcm91dGVzID0gW107XG5jb25zdCBERUZBVUxUUyA9IHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgYWRkOiAncm91dGVyLmFkZCcsXG4gICAgICAgIHN0YXJ0OiAncm91dGVyLnN0YXJ0J1xuICAgIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBDYWxsYmFjayB0aGUgcm91dGVcbiAqIEBwYXJhbSAge29iamVjdH0gcm91dGVcbiAqIEBwYXJhbSAge29iamVjdH0gY3R4XG4gKi9cbmNvbnN0IGNiUm91dGVWYWxpZGF0ZSA9IGNvbXBpbGVTY2hlbWEoZ2V0U2NoZW1hKFtcbiAgICB7IHRpdGxlOiAncm91dGUnLCBwcm9wZXJ0aWVzOiB7IHJvdXRlOiB7IHR5cGU6ICdzdHJpbmcnIH0sIGNiczogW10gfSwgcmVxdWlyZWQ6IHRydWUgfVxuICAgIC8vIHsgdGl0bGU6ICdjdHgnIH0sXG4gICAgLy8geyB0aXRsZTogJ25leHQnIH1cbl0pKTtcbmNvbnN0IGNiUm91dGUgPSAocm91dGUsIGN0eCwgbmV4dCkgPT4ge1xuICAgIGNiUm91dGVWYWxpZGF0ZShbcm91dGVdKTtcblxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcm91dGUuY2JzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgICAgIHJvdXRlLmNic1tjXShjdHgsIG5leHQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQWRkcyBhIHJvdXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbmNvbnN0IGFkZFZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuICAgIHsgdGl0bGU6ICdyb3V0ZScsIHR5cGU6ICdzdHJpbmcnLCByZXF1aXJlZDogdHJ1ZSB9XG4gICAgLy8geyB0aXRsZTogJ2NiJyB9XG5dKSk7XG5jb25zdCBhZGQgPSAocm91dGUsIGNiKSA9PiB7XG4gICAgYWRkVmFsaWRhdGUoW3JvdXRlXSk7XG5cbiAgICAvLyBMZXRzIHNlZSBpZiB0aGUgcm91dGUgaXMgYWxyZWFkeSBkZWZpbmVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHJvdXRlc1tpXS5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJvdXRlc1tpXS5jYnMucHVzaChjYik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYWNoZSB0aGUgY2FsbGJhY2sgYW5kIHJvdXRlIGZvciBsYXRlciB1c2VcbiAgICByb3V0ZXMucHVzaCh7IHJvdXRlLCBjYnM6IFtjYl0gfSk7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyB0aGUgcm91dGVyXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9wdHNcbiAqL1xuY29uc3Qgc3RhcnRWYWxpZGF0ZSA9IGNvbXBpbGVTY2hlbWEoZ2V0U2NoZW1hKFtcbiAgICB7IHRpdGxlOiAnb3B0cycsIHByb3BlcnRpZXM6IHt9IH1cbl0pKTtcbmNvbnN0IHN0YXJ0ID0gKG9wdHMpID0+IHtcbiAgICBzdGFydFZhbGlkYXRlKFtvcHRzXSk7XG5cbiAgICBpZiAoIXJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIExldHMgYWRkIGFsbCByb3V0ZXJzIHRvIHRoZSByaWdodCBwbGFjZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByb3V0ZSA9IHJvdXRlc1tpXTtcblxuICAgICAgICAvLyBMZXRzIGZpbmFsbHkgc2V0IGl0IGluIHRoZSBcInBhZ2VcIlxuICAgICAgICBwYWdlKHJvdXRlLnJvdXRlLCBjYlJvdXRlLmJpbmQobnVsbCwgcm91dGUpKTtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5IHN0YXJ0aW5nIHRoZSByb3V0ZXNcbiAgICBwYWdlLnN0YXJ0KG9wdHMpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJ1bnRpbWVcblxubWFpbGJveC5vbihERUZBVUxUUy5ldmVudHMuc3RhcnQsIHN0YXJ0KTtcbm1haWxib3gub24oREVGQVVMVFMuZXZlbnRzLmFkZCwgKGRhdGEpID0+IGFkZChkYXRhLnJvdXRlLCBkYXRhLmNiKSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgeyBzdGFydCwgYWRkLCBwYWdlIH07XG4iXX0=