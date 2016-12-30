'use strict';
/* global $, window, document, module, process, navigator */
/* eslint-disable no-console */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var logger = { log: [], warn: [], error: [] };
var nativeLog = console.log;
var nativeWarn = console.warn;
var nativeError = console.error;
var windowNativeError = window.onerror;

// -----------------------------------------
// Functions

/**
 * Logs message
 *
 * @param {*} args
 */
var log = function log() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    logger.log.push({ from: console.trace(), msg: args });
    nativeLog.apply(undefined, args);
};

/**
 * Warns message
 *
 * @param {*} args
 */
var warn = function warn() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    logger.warn.push({ from: console.trace(), msg: args });
    nativeWarn.apply(undefined, args);
};

/**
 * Errors message
 *
 * @param {*} args
 */
var error = function error() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
    }

    logger.error.push({ from: console.trace(), msg: args });
    nativeError.apply(undefined, args);
};

// ------------------------------------
// Runtime

console.log = log;
console.warn = warn;
console.error = error;
window.logger = logger;

// Lets catch all errors
window.onerror = function () {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
    }

    error.apply(undefined, ['From window on error catcher'].concat(args));
    windowNativeError && windowNativeError.apply(undefined, args);
};
window.addEventListener('error', function (evt) {
    error('From window on error catcher', evt);
});

// ------------------------------------
// Export

exports.default = { log: log, warn: warn, error: error };
/* eslint-enable no-console */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuanMiXSwibmFtZXMiOlsibG9nZ2VyIiwibG9nIiwid2FybiIsImVycm9yIiwibmF0aXZlTG9nIiwiY29uc29sZSIsIm5hdGl2ZVdhcm4iLCJuYXRpdmVFcnJvciIsIndpbmRvd05hdGl2ZUVycm9yIiwid2luZG93Iiwib25lcnJvciIsImFyZ3MiLCJwdXNoIiwiZnJvbSIsInRyYWNlIiwibXNnIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1BLFNBQVMsRUFBRUMsS0FBSyxFQUFQLEVBQVdDLE1BQU0sRUFBakIsRUFBcUJDLE9BQU8sRUFBNUIsRUFBZjtBQUNBLElBQU1DLFlBQVlDLFFBQVFKLEdBQTFCO0FBQ0EsSUFBTUssYUFBYUQsUUFBUUgsSUFBM0I7QUFDQSxJQUFNSyxjQUFjRixRQUFRRixLQUE1QjtBQUNBLElBQU1LLG9CQUFvQkMsT0FBT0MsT0FBakM7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7QUFLQSxJQUFNVCxNQUFNLFNBQU5BLEdBQU0sR0FBYTtBQUFBLHNDQUFUVSxJQUFTO0FBQVRBLFlBQVM7QUFBQTs7QUFDckJYLFdBQU9DLEdBQVAsQ0FBV1csSUFBWCxDQUFnQixFQUFFQyxNQUFNUixRQUFRUyxLQUFSLEVBQVIsRUFBeUJDLEtBQUtKLElBQTlCLEVBQWhCO0FBQ0FQLCtCQUFhTyxJQUFiO0FBQ0gsQ0FIRDs7QUFLQTs7Ozs7QUFLQSxJQUFNVCxPQUFPLFNBQVBBLElBQU8sR0FBYTtBQUFBLHVDQUFUUyxJQUFTO0FBQVRBLFlBQVM7QUFBQTs7QUFDdEJYLFdBQU9FLElBQVAsQ0FBWVUsSUFBWixDQUFpQixFQUFFQyxNQUFNUixRQUFRUyxLQUFSLEVBQVIsRUFBeUJDLEtBQUtKLElBQTlCLEVBQWpCO0FBQ0FMLGdDQUFjSyxJQUFkO0FBQ0gsQ0FIRDs7QUFLQTs7Ozs7QUFLQSxJQUFNUixRQUFRLFNBQVJBLEtBQVEsR0FBYTtBQUFBLHVDQUFUUSxJQUFTO0FBQVRBLFlBQVM7QUFBQTs7QUFDdkJYLFdBQU9HLEtBQVAsQ0FBYVMsSUFBYixDQUFrQixFQUFFQyxNQUFNUixRQUFRUyxLQUFSLEVBQVIsRUFBeUJDLEtBQUtKLElBQTlCLEVBQWxCO0FBQ0FKLGlDQUFlSSxJQUFmO0FBQ0gsQ0FIRDs7QUFLQTtBQUNBOztBQUVBTixRQUFRSixHQUFSLEdBQWNBLEdBQWQ7QUFDQUksUUFBUUgsSUFBUixHQUFlQSxJQUFmO0FBQ0FHLFFBQVFGLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0FNLE9BQU9ULE1BQVAsR0FBZ0JBLE1BQWhCOztBQUVBO0FBQ0FTLE9BQU9DLE9BQVAsR0FBaUIsWUFBYTtBQUFBLHVDQUFUQyxJQUFTO0FBQVRBLFlBQVM7QUFBQTs7QUFDMUJSLDRCQUFNLDhCQUFOLFNBQXlDUSxJQUF6QztBQUNBSCx5QkFBcUJBLG1DQUFxQkcsSUFBckIsQ0FBckI7QUFDSCxDQUhEO0FBSUFGLE9BQU9PLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUNDLEdBQUQsRUFBUztBQUN0Q2QsVUFBTSw4QkFBTixFQUFzQ2MsR0FBdEM7QUFDSCxDQUZEOztBQUlBO0FBQ0E7O2tCQUVlLEVBQUVoQixRQUFGLEVBQU9DLFVBQVAsRUFBYUMsWUFBYixFO0FBQ2YiLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsICQsIHdpbmRvdywgZG9jdW1lbnQsIG1vZHVsZSwgcHJvY2VzcywgbmF2aWdhdG9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmNvbnN0IGxvZ2dlciA9IHsgbG9nOiBbXSwgd2FybjogW10sIGVycm9yOiBbXSB9O1xuY29uc3QgbmF0aXZlTG9nID0gY29uc29sZS5sb2c7XG5jb25zdCBuYXRpdmVXYXJuID0gY29uc29sZS53YXJuO1xuY29uc3QgbmF0aXZlRXJyb3IgPSBjb25zb2xlLmVycm9yO1xuY29uc3Qgd2luZG93TmF0aXZlRXJyb3IgPSB3aW5kb3cub25lcnJvcjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIExvZ3MgbWVzc2FnZVxuICpcbiAqIEBwYXJhbSB7Kn0gYXJnc1xuICovXG5jb25zdCBsb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIGxvZ2dlci5sb2cucHVzaCh7IGZyb206IGNvbnNvbGUudHJhY2UoKSwgbXNnOiBhcmdzIH0pO1xuICAgIG5hdGl2ZUxvZyguLi5hcmdzKTtcbn07XG5cbi8qKlxuICogV2FybnMgbWVzc2FnZVxuICpcbiAqIEBwYXJhbSB7Kn0gYXJnc1xuICovXG5jb25zdCB3YXJuID0gKC4uLmFyZ3MpID0+IHtcbiAgICBsb2dnZXIud2Fybi5wdXNoKHsgZnJvbTogY29uc29sZS50cmFjZSgpLCBtc2c6IGFyZ3MgfSk7XG4gICAgbmF0aXZlV2FybiguLi5hcmdzKTtcbn07XG5cbi8qKlxuICogRXJyb3JzIG1lc3NhZ2VcbiAqXG4gKiBAcGFyYW0geyp9IGFyZ3NcbiAqL1xuY29uc3QgZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgIGxvZ2dlci5lcnJvci5wdXNoKHsgZnJvbTogY29uc29sZS50cmFjZSgpLCBtc2c6IGFyZ3MgfSk7XG4gICAgbmF0aXZlRXJyb3IoLi4uYXJncyk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJ1bnRpbWVcblxuY29uc29sZS5sb2cgPSBsb2c7XG5jb25zb2xlLndhcm4gPSB3YXJuO1xuY29uc29sZS5lcnJvciA9IGVycm9yO1xud2luZG93LmxvZ2dlciA9IGxvZ2dlcjtcblxuLy8gTGV0cyBjYXRjaCBhbGwgZXJyb3JzXG53aW5kb3cub25lcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gICAgZXJyb3IoJ0Zyb20gd2luZG93IG9uIGVycm9yIGNhdGNoZXInLCAuLi5hcmdzKTtcbiAgICB3aW5kb3dOYXRpdmVFcnJvciAmJiB3aW5kb3dOYXRpdmVFcnJvciguLi5hcmdzKTtcbn07XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXZ0KSA9PiB7XG4gICAgZXJyb3IoJ0Zyb20gd2luZG93IG9uIGVycm9yIGNhdGNoZXInLCBldnQpO1xufSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCBkZWZhdWx0IHsgbG9nLCB3YXJuLCBlcnJvciB9O1xuLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4iXX0=