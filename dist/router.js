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
// { title: 'route', properties: { route: { type: 'string' }, cbs: [] }, required: true }
// { title: 'ctx', type: 'function' },
// { title: 'next', type: 'function' }
var cbRoute = function cbRoute(route, ctx, next) {
    for (var c = 0; c < route.cbs.length; c += 1) {
        route.cbs[c](ctx, next);
    }
};

/**
 * Adds a route
 * @param {string} route
 * @param {function} cb
 */
// { title: 'route', type: 'string', required: true }
// { title: 'cb', type: 'function' }
var add = function add(route, cb) {
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
// { title: 'opts', properties: {} }
var start = function start(opts) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXIuanMiXSwibmFtZXMiOlsicm91dGVzIiwiREVGQVVMVFMiLCJldmVudHMiLCJhZGQiLCJzdGFydCIsImNiUm91dGUiLCJyb3V0ZSIsImN0eCIsIm5leHQiLCJjIiwiY2JzIiwibGVuZ3RoIiwiY2IiLCJpIiwicHVzaCIsIm9wdHMiLCJiaW5kIiwib24iLCJkYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsRUFBZjtBQUNBLElBQU1DLFdBQVc7QUFDYkMsWUFBUTtBQUNKQyxhQUFLLFlBREQ7QUFFSkMsZUFBTztBQUZIO0FBREssQ0FBakI7O0FBT0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBc0I7QUFDbEMsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILE1BQU1JLEdBQU4sQ0FBVUMsTUFBOUIsRUFBc0NGLEtBQUssQ0FBM0MsRUFBOEM7QUFDMUNILGNBQU1JLEdBQU4sQ0FBVUQsQ0FBVixFQUFhRixHQUFiLEVBQWtCQyxJQUFsQjtBQUNIO0FBQ0osQ0FKRDs7QUFNQTs7Ozs7QUFLQTtBQUNBO0FBQ0EsSUFBTUwsTUFBTSxTQUFOQSxHQUFNLENBQUNHLEtBQUQsRUFBUU0sRUFBUixFQUFlO0FBQ3ZCO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUliLE9BQU9XLE1BQTNCLEVBQW1DRSxLQUFLLENBQXhDLEVBQTJDO0FBQ3ZDLFlBQUliLE9BQU9hLENBQVAsRUFBVVAsS0FBVixLQUFvQkEsS0FBeEIsRUFBK0I7QUFDM0JOLG1CQUFPYSxDQUFQLEVBQVVILEdBQVYsQ0FBY0ksSUFBZCxDQUFtQkYsRUFBbkI7QUFDQTtBQUNIO0FBQ0o7O0FBRUQ7QUFDQVosV0FBT2MsSUFBUCxDQUFZLEVBQUVSLFlBQUYsRUFBU0ksS0FBSyxDQUFDRSxFQUFELENBQWQsRUFBWjtBQUNILENBWEQ7O0FBYUE7Ozs7QUFJQTtBQUNBLElBQU1SLFFBQVEsU0FBUkEsS0FBUSxDQUFDVyxJQUFELEVBQVU7QUFDcEIsUUFBSSxDQUFDZixPQUFPVyxNQUFaLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBRUQ7QUFDQSxTQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSWIsT0FBT1csTUFBM0IsRUFBbUNFLEtBQUssQ0FBeEMsRUFBMkM7QUFDdkMsWUFBTVAsUUFBUU4sT0FBT2EsQ0FBUCxDQUFkOztBQUVBO0FBQ0EsNEJBQUtQLE1BQU1BLEtBQVgsRUFBa0JELFFBQVFXLElBQVIsQ0FBYSxJQUFiLEVBQW1CVixLQUFuQixDQUFsQjtBQUNIOztBQUVEO0FBQ0EsbUJBQUtGLEtBQUwsQ0FBV1csSUFBWDtBQUNILENBZkQ7O0FBaUJBO0FBQ0E7O0FBRUEsa0JBQVFFLEVBQVIsQ0FBV2hCLFNBQVNDLE1BQVQsQ0FBZ0JFLEtBQTNCLEVBQWtDQSxLQUFsQztBQUNBLGtCQUFRYSxFQUFSLENBQVdoQixTQUFTQyxNQUFULENBQWdCQyxHQUEzQixFQUFnQyxVQUFDZSxJQUFEO0FBQUEsV0FBVWYsSUFBSWUsS0FBS1osS0FBVCxFQUFnQlksS0FBS04sRUFBckIsQ0FBVjtBQUFBLENBQWhDOztBQUVBO0FBQ0E7O2tCQUVlLEVBQUVSLFlBQUYsRUFBU0QsUUFBVCxFQUFjZ0Isb0JBQWQsRSIsImZpbGUiOiJyb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBwYWdlIGZyb20gJ3BhZ2UnO1xuaW1wb3J0IG1haWxib3ggZnJvbSAnLi9tYWlsYm94LmpzJztcblxuY29uc3Qgcm91dGVzID0gW107XG5jb25zdCBERUZBVUxUUyA9IHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgYWRkOiAncm91dGVyLmFkZCcsXG4gICAgICAgIHN0YXJ0OiAncm91dGVyLnN0YXJ0J1xuICAgIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBDYWxsYmFjayB0aGUgcm91dGVcbiAqIEBwYXJhbSAge29iamVjdH0gcm91dGVcbiAqIEBwYXJhbSAge29iamVjdH0gY3R4XG4gKi9cbi8vIHsgdGl0bGU6ICdyb3V0ZScsIHByb3BlcnRpZXM6IHsgcm91dGU6IHsgdHlwZTogJ3N0cmluZycgfSwgY2JzOiBbXSB9LCByZXF1aXJlZDogdHJ1ZSB9XG4vLyB7IHRpdGxlOiAnY3R4JywgdHlwZTogJ2Z1bmN0aW9uJyB9LFxuLy8geyB0aXRsZTogJ25leHQnLCB0eXBlOiAnZnVuY3Rpb24nIH1cbmNvbnN0IGNiUm91dGUgPSAocm91dGUsIGN0eCwgbmV4dCkgPT4ge1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcm91dGUuY2JzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgICAgIHJvdXRlLmNic1tjXShjdHgsIG5leHQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQWRkcyBhIHJvdXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbi8vIHsgdGl0bGU6ICdyb3V0ZScsIHR5cGU6ICdzdHJpbmcnLCByZXF1aXJlZDogdHJ1ZSB9XG4vLyB7IHRpdGxlOiAnY2InLCB0eXBlOiAnZnVuY3Rpb24nIH1cbmNvbnN0IGFkZCA9IChyb3V0ZSwgY2IpID0+IHtcbiAgICAvLyBMZXRzIHNlZSBpZiB0aGUgcm91dGUgaXMgYWxyZWFkeSBkZWZpbmVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHJvdXRlc1tpXS5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJvdXRlc1tpXS5jYnMucHVzaChjYik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYWNoZSB0aGUgY2FsbGJhY2sgYW5kIHJvdXRlIGZvciBsYXRlciB1c2VcbiAgICByb3V0ZXMucHVzaCh7IHJvdXRlLCBjYnM6IFtjYl0gfSk7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyB0aGUgcm91dGVyXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9wdHNcbiAqL1xuLy8geyB0aXRsZTogJ29wdHMnLCBwcm9wZXJ0aWVzOiB7fSB9XG5jb25zdCBzdGFydCA9IChvcHRzKSA9PiB7XG4gICAgaWYgKCFyb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBMZXRzIGFkZCBhbGwgcm91dGVycyB0byB0aGUgcmlnaHQgcGxhY2VzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgcm91dGUgPSByb3V0ZXNbaV07XG5cbiAgICAgICAgLy8gTGV0cyBmaW5hbGx5IHNldCBpdCBpbiB0aGUgXCJwYWdlXCJcbiAgICAgICAgcGFnZShyb3V0ZS5yb3V0ZSwgY2JSb3V0ZS5iaW5kKG51bGwsIHJvdXRlKSk7XG4gICAgfVxuXG4gICAgLy8gRmluYWxseSBzdGFydGluZyB0aGUgcm91dGVzXG4gICAgcGFnZS5zdGFydChvcHRzKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSdW50aW1lXG5cbm1haWxib3gub24oREVGQVVMVFMuZXZlbnRzLnN0YXJ0LCBzdGFydCk7XG5tYWlsYm94Lm9uKERFRkFVTFRTLmV2ZW50cy5hZGQsIChkYXRhKSA9PiBhZGQoZGF0YS5yb3V0ZSwgZGF0YS5jYikpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCBkZWZhdWx0IHsgc3RhcnQsIGFkZCwgcGFnZSB9O1xuIl19