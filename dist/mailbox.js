/* :: import type {Handlers, Handler, On, Off, Send, Reset} from './_test/mailbox.flow.js'; */
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
var on /* :: :On */ = function on(msg, id, cb) {
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
var off /* :: :Off */ = function off(msg, id) {
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
var send /* :: :Send */ = function send(msg, data) {
    var handler = handlers[msg];

    if (!handler) {
        return;
    }

    for (var i /* :: :number */ = 0; i < handler.length; i += 1) {
        handler[i].listener(data);
    }
};

/**
 * Resets all listeners
 */
var reset /* :: :Reset */ = function reset() {
    handlers = {};
};

// --------------------------------
// Export

exports.default = { on: on, off: off, send: send, reset: reset };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWlsYm94LmpzIl0sIm5hbWVzIjpbImhhbmRsZXJzIiwib24iLCJtc2ciLCJpZCIsImNiIiwiTWF0aCIsInJhbmRvbSIsIkVycm9yIiwibXNnSGFuZGxlciIsInB1c2giLCJsaXN0ZW5lciIsIm9mZiIsInVuZGVmaW5lZCIsImZpbHRlciIsInZhbCIsInNlbmQiLCJkYXRhIiwiaGFuZGxlciIsImkiLCJsZW5ndGgiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQVc7QUFDWDs7Ozs7QUFFQSxJQUFJQSxTQUFRLGtCQUFSLEdBQTZCLEVBQWpDOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFNQyxHQUFFLFlBQUYsR0FBaUIsU0FBakJBLEVBQWlCLENBQUNDLEdBQUQsRUFBTUMsRUFBTixFQUFVQyxFQUFWLEVBQWlCO0FBQ3BDLFFBQUksT0FBT0QsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzFCQyxhQUFLRCxFQUFMO0FBQ0FBLGtCQUFRRSxLQUFLQyxNQUFMLEtBQWdCLE1BQXhCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDSixHQUFELElBQVEsT0FBT0EsR0FBUCxLQUFlLFVBQTNCLEVBQXVDO0FBQ25DLGNBQU0sSUFBSUssS0FBSixDQUFVLDhCQUFWLENBQU47QUFDSDs7QUFFRCxRQUFJLENBQUNILEVBQUQsSUFBTyxPQUFPQSxFQUFQLEtBQWMsVUFBekIsRUFBcUM7QUFDakMsY0FBTSxJQUFJRyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNIOztBQUVEO0FBQ0EsUUFBTUMsV0FBVSxtQkFBVixHQUFnQ1IsU0FBU0UsR0FBVCxLQUFpQixFQUF2RDs7QUFFQTtBQUNBTSxlQUFXQyxJQUFYLENBQWdCLEVBQUVOLE1BQUYsRUFBTU8sVUFBVU4sRUFBaEIsRUFBaEI7QUFDQUosYUFBU0UsR0FBVCxJQUFnQk0sVUFBaEI7O0FBRUEsV0FBT0wsRUFBUDtBQUNILENBdEJEOztBQXdCQTs7Ozs7QUFLQSxJQUFNUSxJQUFHLGFBQUgsR0FBbUIsU0FBbkJBLEdBQW1CLENBQUNULEdBQUQsRUFBTUMsRUFBTixFQUFhO0FBQ2xDLFFBQUksQ0FBQ0QsR0FBRCxJQUFRLENBQUNGLFNBQVNFLEdBQVQsQ0FBYixFQUE0QjtBQUN4QjtBQUNIOztBQUVELFFBQUksQ0FBQ0MsRUFBTCxFQUFTO0FBQ0w7QUFDQUgsaUJBQVNFLEdBQVQsSUFBZ0JVLFNBQWhCO0FBQ0E7QUFDSDs7QUFFRFosYUFBU0UsR0FBVCxJQUFnQkYsU0FBU0UsR0FBVCxFQUFjVyxNQUFkLENBQXFCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxJQUFJWCxFQUFKLEtBQVdBLEVBQXBCO0FBQUEsS0FBckIsQ0FBaEI7QUFDSCxDQVpEOztBQWNBOzs7OztBQUtBLElBQU1ZLEtBQUksY0FBSixHQUFxQixTQUFyQkEsSUFBcUIsQ0FBQ2IsR0FBRCxFQUFNYyxJQUFOLEVBQWU7QUFDdEMsUUFBTUMsVUFBVWpCLFNBQVNFLEdBQVQsQ0FBaEI7O0FBRUEsUUFBSSxDQUFDZSxPQUFMLEVBQWM7QUFDVjtBQUNIOztBQUVELFNBQUssSUFBSUMsRUFBQyxnQkFBRCxHQUFvQixDQUE3QixFQUFnQ0EsSUFBSUQsUUFBUUUsTUFBNUMsRUFBb0RELEtBQUssQ0FBekQsRUFBNEQ7QUFDeERELGdCQUFRQyxDQUFSLEVBQVdSLFFBQVgsQ0FBb0JNLElBQXBCO0FBQ0g7QUFDSixDQVZEOztBQVlBOzs7QUFHQSxJQUFNSSxNQUFLLGVBQUwsR0FBdUIsU0FBdkJBLEtBQXVCLEdBQU07QUFBRXBCLGVBQVcsRUFBWDtBQUFnQixDQUFyRDs7QUFFQTtBQUNBOztrQkFFZSxFQUFFQyxNQUFGLEVBQU1VLFFBQU4sRUFBV0ksVUFBWCxFQUFpQkssWUFBakIsRSIsImZpbGUiOiJtYWlsYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi8vKiA6OiBpbXBvcnQgdHlwZSB7SGFuZGxlcnMsIEhhbmRsZXIsIE9uLCBPZmYsIFNlbmQsIFJlc2V0fSBmcm9tICcuL190ZXN0L21haWxib3guZmxvdy5qcyc7ICovXG4ndXNlIHN0cmljdCc7XG5cbmxldCBoYW5kbGVycy8qIDo6IDpIYW5kbGVycyAqLyA9IHt9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogTGlzdGVucyBhbmQgd2FpdHMgZm9yIG1lc3NhZ2VzXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1zZ1xuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7ZnVuY3Rpb259IGNiXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IG9uLyogOjogOk9uICovID0gKG1zZywgaWQsIGNiKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYiA9IGlkO1xuICAgICAgICBpZCA9IGAke01hdGgucmFuZG9tKCkgKiAxMDAwMDB9YDtcbiAgICB9XG5cbiAgICBpZiAoIW1zZyAmJiB0eXBlb2YgbXNnICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSBtZXNzYWdlIGhhbmRsZXIgaXMgbmVlZGVkIScpO1xuICAgIH1cblxuICAgIGlmICghY2IgJiYgdHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXN0ZW5lciBmdW5jdGlvbiBpcyBuZWVkZWQhJyk7XG4gICAgfVxuXG4gICAgLy8gTGV0cyBzZWUgaWYgdGhlIG1lc3NhZ2UgaXMgYWxyZWFkeSBkZWZpbmVkIGFuZCBjYWNoZSBpdFxuICAgIGNvbnN0IG1zZ0hhbmRsZXIvKiA6OiA6SGFuZGxlcltdICovID0gaGFuZGxlcnNbbXNnXSB8fCBbXTtcblxuICAgIC8vIE5vdyBsZXRzIGNhY2hlIGl0XG4gICAgbXNnSGFuZGxlci5wdXNoKHsgaWQsIGxpc3RlbmVyOiBjYiB9KTtcbiAgICBoYW5kbGVyc1ttc2ddID0gbXNnSGFuZGxlcjtcblxuICAgIHJldHVybiBpZDtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsaXN0ZW5lclxuICogQHBhcmFtICB7c3RyaW5nfSBtc2dcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqL1xuY29uc3Qgb2ZmLyogOjogOk9mZiAqLyA9IChtc2csIGlkKSA9PiB7XG4gICAgaWYgKCFtc2cgfHwgIWhhbmRsZXJzW21zZ10pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaWQpIHtcbiAgICAgICAgLy8gTGV0cyByZW1vdmUgYWxsIG1lc3NhZ2VzXG4gICAgICAgIGhhbmRsZXJzW21zZ10gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVyc1ttc2ddID0gaGFuZGxlcnNbbXNnXS5maWx0ZXIoKHZhbCkgPT4gdmFsLmlkICE9PSBpZCk7XG59O1xuXG4vKipcbiAqIFNlbmRzIG1lc3NhZ2VcbiAqIEBwYXJhbSAge3N0cmluZ30gbXNnXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAqL1xuY29uc3Qgc2VuZC8qIDo6IDpTZW5kICovID0gKG1zZywgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyc1ttc2ddO1xuXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpLyogOjogOm51bWJlciAqLyA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGhhbmRsZXJbaV0ubGlzdGVuZXIoZGF0YSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXNldHMgYWxsIGxpc3RlbmVyc1xuICovXG5jb25zdCByZXNldC8qIDo6IDpSZXNldCAqLyA9ICgpID0+IHsgaGFuZGxlcnMgPSB7fTsgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IG9uLCBvZmYsIHNlbmQsIHJlc2V0IH07XG4iXX0=