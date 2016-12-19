/* :: import type {Routes, Route, AddRoute, Add, CbRoute, Start} from './_test/router.flow.js'; */
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
var cbRoute /* :: :CbRoute */ = function cbRoute(route, ctx, next) {
    for (var c /* :: :number */ = 0; c < route.cbs.length; c += 1) {
        route.cbs[c](ctx, next);
    }
};

/**
 * Adds a route
 * @param {string} route
 * @param {function} cb
 */
var add /* :: :Add */ = function add(route, cb) {
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
var start /* :: :Start */ = function start(opts) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXIuanMiXSwibmFtZXMiOlsicm91dGVzIiwiREVGQVVMVFMiLCJldmVudHMiLCJhZGQiLCJzdGFydCIsImNiUm91dGUiLCJyb3V0ZSIsImN0eCIsIm5leHQiLCJjIiwiY2JzIiwibGVuZ3RoIiwiY2IiLCJpIiwicHVzaCIsIm9wdHMiLCJiaW5kIiwib24iLCJkYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6IkFBQVc7QUFDWDs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTSxnQkFBTixHQUF5QixFQUEvQjtBQUNBLElBQU1DLFdBQVc7QUFDYkMsWUFBUTtBQUNKQyxhQUFLLFlBREQ7QUFFSkMsZUFBTztBQUZIO0FBREssQ0FBakI7O0FBT0E7QUFDQTs7QUFFQTs7Ozs7QUFLQSxJQUFNQyxRQUFPLGlCQUFQLEdBQTJCLFNBQTNCQSxPQUEyQixDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBYUMsSUFBYixFQUFzQjtBQUNuRCxTQUFLLElBQUlDLEVBQUMsZ0JBQUQsR0FBb0IsQ0FBN0IsRUFBZ0NBLElBQUlILE1BQU1JLEdBQU4sQ0FBVUMsTUFBOUMsRUFBc0RGLEtBQUssQ0FBM0QsRUFBOEQ7QUFDMURILGNBQU1JLEdBQU4sQ0FBVUQsQ0FBVixFQUFhRixHQUFiLEVBQWtCQyxJQUFsQjtBQUNIO0FBQ0osQ0FKRDs7QUFNQTs7Ozs7QUFLQSxJQUFNTCxJQUFHLGFBQUgsR0FBbUIsU0FBbkJBLEdBQW1CLENBQUNHLEtBQUQsRUFBUU0sRUFBUixFQUFlO0FBQ3BDO0FBQ0EsU0FBSyxJQUFJQyxFQUFDLGdCQUFELEdBQW9CLENBQTdCLEVBQWdDQSxJQUFJYixPQUFPVyxNQUEzQyxFQUFtREUsS0FBSyxDQUF4RCxFQUEyRDtBQUN2RCxZQUFJYixPQUFPYSxDQUFQLEVBQVVQLEtBQVYsS0FBb0JBLEtBQXhCLEVBQStCO0FBQzNCTixtQkFBT2EsQ0FBUCxFQUFVSCxHQUFWLENBQWNJLElBQWQsQ0FBbUJGLEVBQW5CO0FBQ0E7QUFDSDtBQUNKOztBQUVEO0FBQ0FaLFdBQU9jLElBQVAsQ0FBWSxFQUFFUixZQUFGLEVBQVNJLEtBQUssQ0FBQ0UsRUFBRCxDQUFkLEVBQVo7QUFDSCxDQVhEOztBQWFBOzs7O0FBSUEsSUFBTVIsTUFBSyxlQUFMLEdBQXVCLFNBQXZCQSxLQUF1QixDQUFDVyxJQUFELEVBQVU7QUFDbkMsUUFBSSxDQUFDZixPQUFPVyxNQUFaLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBRUQ7QUFDQSxTQUFLLElBQUlFLEVBQUMsZ0JBQUQsR0FBb0IsQ0FBN0IsRUFBZ0NBLElBQUliLE9BQU9XLE1BQTNDLEVBQW1ERSxLQUFLLENBQXhELEVBQTJEO0FBQ3ZELFlBQU1QLE1BQUssZUFBTCxHQUF1Qk4sT0FBT2EsQ0FBUCxDQUE3Qjs7QUFFQTtBQUNBLDRCQUFLUCxNQUFNQSxLQUFYLEVBQWtCRCxRQUFRVyxJQUFSLENBQWEsSUFBYixFQUFtQlYsS0FBbkIsQ0FBbEI7QUFDSDs7QUFFRDtBQUNBLG1CQUFLRixLQUFMLENBQVdXLElBQVg7QUFDSCxDQWZEOztBQWlCQTtBQUNBOztBQUVBLGtCQUFRRSxFQUFSLENBQVdoQixTQUFTQyxNQUFULENBQWdCRSxLQUEzQixFQUFrQ0EsS0FBbEM7QUFDQSxrQkFBUWEsRUFBUixDQUFXaEIsU0FBU0MsTUFBVCxDQUFnQkMsR0FBM0IsRUFBZ0MsVUFBQ2UsSUFBRCxDQUFLLGtCQUFMO0FBQUEsV0FBNEJmLElBQUllLEtBQUtaLEtBQVQsRUFBZ0JZLEtBQUtOLEVBQXJCLENBQTVCO0FBQUEsQ0FBaEM7O0FBRUE7QUFDQTs7a0JBRWUsRUFBRVIsWUFBRixFQUFTRCxRQUFULEVBQWNnQixvQkFBZCxFIiwiZmlsZSI6InJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovLyogOjogaW1wb3J0IHR5cGUge1JvdXRlcywgUm91dGUsIEFkZFJvdXRlLCBBZGQsIENiUm91dGUsIFN0YXJ0fSBmcm9tICcuL190ZXN0L3JvdXRlci5mbG93LmpzJzsgKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHBhZ2UgZnJvbSAncGFnZSc7XG5pbXBvcnQgbWFpbGJveCBmcm9tICcuL21haWxib3guanMnO1xuXG5jb25zdCByb3V0ZXMvKiA6OiA6Um91dGVzICovID0gW107XG5jb25zdCBERUZBVUxUUyA9IHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgYWRkOiAncm91dGVyLmFkZCcsXG4gICAgICAgIHN0YXJ0OiAncm91dGVyLnN0YXJ0J1xuICAgIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBDYWxsYmFjayB0aGUgcm91dGVcbiAqIEBwYXJhbSAge29iamVjdH0gcm91dGVcbiAqIEBwYXJhbSAge29iamVjdH0gY3R4XG4gKi9cbmNvbnN0IGNiUm91dGUvKiA6OiA6Q2JSb3V0ZSAqLyA9IChyb3V0ZSwgY3R4LCBuZXh0KSA9PiB7XG4gICAgZm9yIChsZXQgYy8qIDo6IDpudW1iZXIgKi8gPSAwOyBjIDwgcm91dGUuY2JzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgICAgIHJvdXRlLmNic1tjXShjdHgsIG5leHQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQWRkcyBhIHJvdXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbmNvbnN0IGFkZC8qIDo6IDpBZGQgKi8gPSAocm91dGUsIGNiKSA9PiB7XG4gICAgLy8gTGV0cyBzZWUgaWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgZGVmaW5lZFxuICAgIGZvciAobGV0IGkvKiA6OiA6bnVtYmVyICovID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAocm91dGVzW2ldLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcm91dGVzW2ldLmNicy5wdXNoKGNiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENhY2hlIHRoZSBjYWxsYmFjayBhbmQgcm91dGUgZm9yIGxhdGVyIHVzZVxuICAgIHJvdXRlcy5wdXNoKHsgcm91dGUsIGNiczogW2NiXSB9KTtcbn07XG5cbi8qKlxuICogU3RhcnRzIHRoZSByb3V0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gb3B0c1xuICovXG5jb25zdCBzdGFydC8qIDo6IDpTdGFydCAqLyA9IChvcHRzKSA9PiB7XG4gICAgaWYgKCFyb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBMZXRzIGFkZCBhbGwgcm91dGVycyB0byB0aGUgcmlnaHQgcGxhY2VzXG4gICAgZm9yIChsZXQgaS8qIDo6IDpudW1iZXIgKi8gPSAwOyBpIDwgcm91dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlLyogOjogOlJvdXRlICovID0gcm91dGVzW2ldO1xuXG4gICAgICAgIC8vIExldHMgZmluYWxseSBzZXQgaXQgaW4gdGhlIFwicGFnZVwiXG4gICAgICAgIHBhZ2Uocm91dGUucm91dGUsIGNiUm91dGUuYmluZChudWxsLCByb3V0ZSkpO1xuICAgIH1cblxuICAgIC8vIEZpbmFsbHkgc3RhcnRpbmcgdGhlIHJvdXRlc1xuICAgIHBhZ2Uuc3RhcnQob3B0cyk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUnVudGltZVxuXG5tYWlsYm94Lm9uKERFRkFVTFRTLmV2ZW50cy5zdGFydCwgc3RhcnQpO1xubWFpbGJveC5vbihERUZBVUxUUy5ldmVudHMuYWRkLCAoZGF0YS8qIDo6IDpBZGRSb3V0ZSAqLykgPT4gYWRkKGRhdGEucm91dGUsIGRhdGEuY2IpKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IHN0YXJ0LCBhZGQsIHBhZ2UgfTtcbiJdfQ==