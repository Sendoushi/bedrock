/* :: import type {Handlers, Handler, FnOn, FnOff, FnSend, FnReset} from './_test/mailbox.flow.js'; */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var handlers /* :: :Handlers */ = {};

// --------------------------------
// Functions

/**
 * Listens and waits for messages
 * @param  {string} msg
 * @param  {string} id
 * @param  {function} cb
 * @return {string}
 */
var on /* :: :FnOn */ = function on(msg, id, cb) {
    if (typeof id === 'function') {
        cb = id;
        id = '' + Math.random() * 100000;
    }

    if (!msg && typeof msg !== 'function') {
        throw new Error('A message handler is needed!');
    }

    if (!cb && typeof cb !== 'function') {
        throw new Error('A listener function is needed!');
    }

    // Lets see if the message is already defined and cache it
    var msgHandler /* :: :Handler[] */ = handlers[msg] || [];

    // Now lets cache it
    msgHandler.push({ id: id, listener: cb });
    handlers[msg] = msgHandler;

    return id;
};

/**
 * Removes listener
 * @param  {string} msg
 * @param  {string} id
 */
var off /* :: :FnOff */ = function off(msg, id) {
    if (!msg || !handlers[msg]) {
        return;
    }

    if (!id) {
        // Lets remove all messages
        handlers[msg] = undefined;
        return;
    }

    handlers[msg] = handlers[msg].filter(function (val) {
        return val.id !== id;
    });
};

/**
 * Sends message
 * @param  {string} msg
 * @param  {object} data
 */
var send /* :: :FnSend */ = function send(msg, data) {
    var handler = handlers[msg];

    if (!handler) {
        return;
    }

    for (var i = 0; i < handler.length; i += 1) {
        handler[i].listener(data);
    }
};

/**
 * Resets all listeners
 */
var reset /* :: :FnReset */ = function reset() {
    handlers = {};
};

// --------------------------------
// Export

exports.default = { on: on, off: off, send: send, reset: reset };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWlsYm94LmpzIl0sIm5hbWVzIjpbImhhbmRsZXJzIiwib24iLCJtc2ciLCJpZCIsImNiIiwiTWF0aCIsInJhbmRvbSIsIkVycm9yIiwibXNnSGFuZGxlciIsInB1c2giLCJsaXN0ZW5lciIsIm9mZiIsInVuZGVmaW5lZCIsImZpbHRlciIsInZhbCIsInNlbmQiLCJkYXRhIiwiaGFuZGxlciIsImkiLCJsZW5ndGgiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQVc7QUFDWDs7Ozs7QUFFQSxJQUFJQSxTQUFRLGtCQUFSLEdBQTZCLEVBQWpDOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFNQyxHQUFFLGNBQUYsR0FBbUIsU0FBbkJBLEVBQW1CLENBQUNDLEdBQUQsRUFBTUMsRUFBTixFQUFVQyxFQUFWLEVBQWlCO0FBQ3RDLFFBQUksT0FBT0QsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzFCQyxhQUFLRCxFQUFMO0FBQ0FBLGtCQUFRRSxLQUFLQyxNQUFMLEtBQWdCLE1BQXhCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDSixHQUFELElBQVEsT0FBT0EsR0FBUCxLQUFlLFVBQTNCLEVBQXVDO0FBQ25DLGNBQU0sSUFBSUssS0FBSixDQUFVLDhCQUFWLENBQU47QUFDSDs7QUFFRCxRQUFJLENBQUNILEVBQUQsSUFBTyxPQUFPQSxFQUFQLEtBQWMsVUFBekIsRUFBcUM7QUFDakMsY0FBTSxJQUFJRyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNIOztBQUVEO0FBQ0EsUUFBTUMsV0FBVSxtQkFBVixHQUFnQ1IsU0FBU0UsR0FBVCxLQUFpQixFQUF2RDs7QUFFQTtBQUNBTSxlQUFXQyxJQUFYLENBQWdCLEVBQUVOLE1BQUYsRUFBTU8sVUFBVU4sRUFBaEIsRUFBaEI7QUFDQUosYUFBU0UsR0FBVCxJQUFnQk0sVUFBaEI7O0FBRUEsV0FBT0wsRUFBUDtBQUNILENBdEJEOztBQXdCQTs7Ozs7QUFLQSxJQUFNUSxJQUFHLGVBQUgsR0FBcUIsU0FBckJBLEdBQXFCLENBQUNULEdBQUQsRUFBTUMsRUFBTixFQUFhO0FBQ3BDLFFBQUksQ0FBQ0QsR0FBRCxJQUFRLENBQUNGLFNBQVNFLEdBQVQsQ0FBYixFQUE0QjtBQUN4QjtBQUNIOztBQUVELFFBQUksQ0FBQ0MsRUFBTCxFQUFTO0FBQ0w7QUFDQUgsaUJBQVNFLEdBQVQsSUFBZ0JVLFNBQWhCO0FBQ0E7QUFDSDs7QUFFRFosYUFBU0UsR0FBVCxJQUFnQkYsU0FBU0UsR0FBVCxFQUFjVyxNQUFkLENBQXFCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxJQUFJWCxFQUFKLEtBQVdBLEVBQXBCO0FBQUEsS0FBckIsQ0FBaEI7QUFDSCxDQVpEOztBQWNBOzs7OztBQUtBLElBQU1ZLEtBQUksZ0JBQUosR0FBdUIsU0FBdkJBLElBQXVCLENBQUNiLEdBQUQsRUFBTWMsSUFBTixFQUFlO0FBQ3hDLFFBQU1DLFVBQVVqQixTQUFTRSxHQUFULENBQWhCOztBQUVBLFFBQUksQ0FBQ2UsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsUUFBUUUsTUFBNUIsRUFBb0NELEtBQUssQ0FBekMsRUFBNEM7QUFDeENELGdCQUFRQyxDQUFSLEVBQVdSLFFBQVgsQ0FBb0JNLElBQXBCO0FBQ0g7QUFDSixDQVZEOztBQVlBOzs7QUFHQSxJQUFNSSxNQUFLLGlCQUFMLEdBQXlCLFNBQXpCQSxLQUF5QixHQUFNO0FBQUVwQixlQUFXLEVBQVg7QUFBZ0IsQ0FBdkQ7O0FBRUE7QUFDQTs7a0JBRWUsRUFBRUMsTUFBRixFQUFNVSxRQUFOLEVBQVdJLFVBQVgsRUFBaUJLLFlBQWpCLEUiLCJmaWxlIjoibWFpbGJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovLyogOjogaW1wb3J0IHR5cGUge0hhbmRsZXJzLCBIYW5kbGVyLCBGbk9uLCBGbk9mZiwgRm5TZW5kLCBGblJlc2V0fSBmcm9tICcuL190ZXN0L21haWxib3guZmxvdy5qcyc7ICovXG4ndXNlIHN0cmljdCc7XG5cbmxldCBoYW5kbGVycy8qIDo6IDpIYW5kbGVycyAqLyA9IHt9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogTGlzdGVucyBhbmQgd2FpdHMgZm9yIG1lc3NhZ2VzXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1zZ1xuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7ZnVuY3Rpb259IGNiXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IG9uLyogOjogOkZuT24gKi8gPSAobXNnLCBpZCwgY2IpID0+IHtcbiAgICBpZiAodHlwZW9mIGlkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiID0gaWQ7XG4gICAgICAgIGlkID0gYCR7TWF0aC5yYW5kb20oKSAqIDEwMDAwMH1gO1xuICAgIH1cblxuICAgIGlmICghbXNnICYmIHR5cGVvZiBtc2cgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIG1lc3NhZ2UgaGFuZGxlciBpcyBuZWVkZWQhJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjYiAmJiB0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGxpc3RlbmVyIGZ1bmN0aW9uIGlzIG5lZWRlZCEnKTtcbiAgICB9XG5cbiAgICAvLyBMZXRzIHNlZSBpZiB0aGUgbWVzc2FnZSBpcyBhbHJlYWR5IGRlZmluZWQgYW5kIGNhY2hlIGl0XG4gICAgY29uc3QgbXNnSGFuZGxlci8qIDo6IDpIYW5kbGVyW10gKi8gPSBoYW5kbGVyc1ttc2ddIHx8IFtdO1xuXG4gICAgLy8gTm93IGxldHMgY2FjaGUgaXRcbiAgICBtc2dIYW5kbGVyLnB1c2goeyBpZCwgbGlzdGVuZXI6IGNiIH0pO1xuICAgIGhhbmRsZXJzW21zZ10gPSBtc2dIYW5kbGVyO1xuXG4gICAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxpc3RlbmVyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1zZ1xuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICovXG5jb25zdCBvZmYvKiA6OiA6Rm5PZmYgKi8gPSAobXNnLCBpZCkgPT4ge1xuICAgIGlmICghbXNnIHx8ICFoYW5kbGVyc1ttc2ddKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWlkKSB7XG4gICAgICAgIC8vIExldHMgcmVtb3ZlIGFsbCBtZXNzYWdlc1xuICAgICAgICBoYW5kbGVyc1ttc2ddID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlcnNbbXNnXSA9IGhhbmRsZXJzW21zZ10uZmlsdGVyKCh2YWwpID0+IHZhbC5pZCAhPT0gaWQpO1xufTtcblxuLyoqXG4gKiBTZW5kcyBtZXNzYWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1zZ1xuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKi9cbmNvbnN0IHNlbmQvKiA6OiA6Rm5TZW5kICovID0gKG1zZywgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyc1ttc2ddO1xuXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaGFuZGxlcltpXS5saXN0ZW5lcihkYXRhKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlc2V0cyBhbGwgbGlzdGVuZXJzXG4gKi9cbmNvbnN0IHJlc2V0LyogOjogOkZuUmVzZXQgKi8gPSAoKSA9PiB7IGhhbmRsZXJzID0ge307IH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgeyBvbiwgb2ZmLCBzZW5kLCByZXNldCB9O1xuIl19