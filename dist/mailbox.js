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

    for (var i /* :: :number */ = 0; i < handler.length; i += 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWlsYm94LmpzIl0sIm5hbWVzIjpbImhhbmRsZXJzIiwib24iLCJtc2ciLCJpZCIsImNiIiwiTWF0aCIsInJhbmRvbSIsIkVycm9yIiwibXNnSGFuZGxlciIsInB1c2giLCJsaXN0ZW5lciIsIm9mZiIsInVuZGVmaW5lZCIsImZpbHRlciIsInZhbCIsInNlbmQiLCJkYXRhIiwiaGFuZGxlciIsImkiLCJsZW5ndGgiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQVc7QUFDWDs7Ozs7QUFFQSxJQUFJQSxTQUFRLGtCQUFSLEdBQTZCLEVBQWpDOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFNQyxHQUFFLGNBQUYsR0FBbUIsU0FBbkJBLEVBQW1CLENBQUNDLEdBQUQsRUFBTUMsRUFBTixFQUFVQyxFQUFWLEVBQWlCO0FBQ3RDLFFBQUksT0FBT0QsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzFCQyxhQUFLRCxFQUFMO0FBQ0FBLGtCQUFRRSxLQUFLQyxNQUFMLEtBQWdCLE1BQXhCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDSixHQUFELElBQVEsT0FBT0EsR0FBUCxLQUFlLFVBQTNCLEVBQXVDO0FBQ25DLGNBQU0sSUFBSUssS0FBSixDQUFVLDhCQUFWLENBQU47QUFDSDs7QUFFRCxRQUFJLENBQUNILEVBQUQsSUFBTyxPQUFPQSxFQUFQLEtBQWMsVUFBekIsRUFBcUM7QUFDakMsY0FBTSxJQUFJRyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNIOztBQUVEO0FBQ0EsUUFBTUMsV0FBVSxtQkFBVixHQUFnQ1IsU0FBU0UsR0FBVCxLQUFpQixFQUF2RDs7QUFFQTtBQUNBTSxlQUFXQyxJQUFYLENBQWdCLEVBQUVOLE1BQUYsRUFBTU8sVUFBVU4sRUFBaEIsRUFBaEI7QUFDQUosYUFBU0UsR0FBVCxJQUFnQk0sVUFBaEI7O0FBRUEsV0FBT0wsRUFBUDtBQUNILENBdEJEOztBQXdCQTs7Ozs7QUFLQSxJQUFNUSxJQUFHLGVBQUgsR0FBcUIsU0FBckJBLEdBQXFCLENBQUNULEdBQUQsRUFBTUMsRUFBTixFQUFhO0FBQ3BDLFFBQUksQ0FBQ0QsR0FBRCxJQUFRLENBQUNGLFNBQVNFLEdBQVQsQ0FBYixFQUE0QjtBQUN4QjtBQUNIOztBQUVELFFBQUksQ0FBQ0MsRUFBTCxFQUFTO0FBQ0w7QUFDQUgsaUJBQVNFLEdBQVQsSUFBZ0JVLFNBQWhCO0FBQ0E7QUFDSDs7QUFFRFosYUFBU0UsR0FBVCxJQUFnQkYsU0FBU0UsR0FBVCxFQUFjVyxNQUFkLENBQXFCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxJQUFJWCxFQUFKLEtBQVdBLEVBQXBCO0FBQUEsS0FBckIsQ0FBaEI7QUFDSCxDQVpEOztBQWNBOzs7OztBQUtBLElBQU1ZLEtBQUksZ0JBQUosR0FBdUIsU0FBdkJBLElBQXVCLENBQUNiLEdBQUQsRUFBTWMsSUFBTixFQUFlO0FBQ3hDLFFBQU1DLFVBQVVqQixTQUFTRSxHQUFULENBQWhCOztBQUVBLFFBQUksQ0FBQ2UsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxTQUFLLElBQUlDLEVBQUMsZ0JBQUQsR0FBb0IsQ0FBN0IsRUFBZ0NBLElBQUlELFFBQVFFLE1BQTVDLEVBQW9ERCxLQUFLLENBQXpELEVBQTREO0FBQ3hERCxnQkFBUUMsQ0FBUixFQUFXUixRQUFYLENBQW9CTSxJQUFwQjtBQUNIO0FBQ0osQ0FWRDs7QUFZQTs7O0FBR0EsSUFBTUksTUFBSyxpQkFBTCxHQUF5QixTQUF6QkEsS0FBeUIsR0FBTTtBQUFFcEIsZUFBVyxFQUFYO0FBQWdCLENBQXZEOztBQUVBO0FBQ0E7O2tCQUVlLEVBQUVDLE1BQUYsRUFBTVUsUUFBTixFQUFXSSxVQUFYLEVBQWlCSyxZQUFqQixFIiwiZmlsZSI6Im1haWxib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqLy8qIDo6IGltcG9ydCB0eXBlIHtIYW5kbGVycywgSGFuZGxlciwgRm5PbiwgRm5PZmYsIEZuU2VuZCwgRm5SZXNldH0gZnJvbSAnLi9fdGVzdC9tYWlsYm94LmZsb3cuanMnOyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5sZXQgaGFuZGxlcnMvKiA6OiA6SGFuZGxlcnMgKi8gPSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIExpc3RlbnMgYW5kIHdhaXRzIGZvciBtZXNzYWdlc1xuICogQHBhcmFtICB7c3RyaW5nfSBtc2dcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCBvbi8qIDo6IDpGbk9uICovID0gKG1zZywgaWQsIGNiKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYiA9IGlkO1xuICAgICAgICBpZCA9IGAke01hdGgucmFuZG9tKCkgKiAxMDAwMDB9YDtcbiAgICB9XG5cbiAgICBpZiAoIW1zZyAmJiB0eXBlb2YgbXNnICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSBtZXNzYWdlIGhhbmRsZXIgaXMgbmVlZGVkIScpO1xuICAgIH1cblxuICAgIGlmICghY2IgJiYgdHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXN0ZW5lciBmdW5jdGlvbiBpcyBuZWVkZWQhJyk7XG4gICAgfVxuXG4gICAgLy8gTGV0cyBzZWUgaWYgdGhlIG1lc3NhZ2UgaXMgYWxyZWFkeSBkZWZpbmVkIGFuZCBjYWNoZSBpdFxuICAgIGNvbnN0IG1zZ0hhbmRsZXIvKiA6OiA6SGFuZGxlcltdICovID0gaGFuZGxlcnNbbXNnXSB8fCBbXTtcblxuICAgIC8vIE5vdyBsZXRzIGNhY2hlIGl0XG4gICAgbXNnSGFuZGxlci5wdXNoKHsgaWQsIGxpc3RlbmVyOiBjYiB9KTtcbiAgICBoYW5kbGVyc1ttc2ddID0gbXNnSGFuZGxlcjtcblxuICAgIHJldHVybiBpZDtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsaXN0ZW5lclxuICogQHBhcmFtICB7c3RyaW5nfSBtc2dcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqL1xuY29uc3Qgb2ZmLyogOjogOkZuT2ZmICovID0gKG1zZywgaWQpID0+IHtcbiAgICBpZiAoIW1zZyB8fCAhaGFuZGxlcnNbbXNnXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFpZCkge1xuICAgICAgICAvLyBMZXRzIHJlbW92ZSBhbGwgbWVzc2FnZXNcbiAgICAgICAgaGFuZGxlcnNbbXNnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZXJzW21zZ10gPSBoYW5kbGVyc1ttc2ddLmZpbHRlcigodmFsKSA9PiB2YWwuaWQgIT09IGlkKTtcbn07XG5cbi8qKlxuICogU2VuZHMgbWVzc2FnZVxuICogQHBhcmFtICB7c3RyaW5nfSBtc2dcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5jb25zdCBzZW5kLyogOjogOkZuU2VuZCAqLyA9IChtc2csIGRhdGEpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnNbbXNnXTtcblxuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaS8qIDo6IDpudW1iZXIgKi8gPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBoYW5kbGVyW2ldLmxpc3RlbmVyKGRhdGEpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmVzZXRzIGFsbCBsaXN0ZW5lcnNcbiAqL1xuY29uc3QgcmVzZXQvKiA6OiA6Rm5SZXNldCAqLyA9ICgpID0+IHsgaGFuZGxlcnMgPSB7fTsgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IG9uLCBvZmYsIHNlbmQsIHJlc2V0IH07XG4iXX0=