'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var handlers = {};

// --------------------------------
// Functions

/**
 * Listens and waits for messages
 * @param  {string} msg
 * @param  {string} id
 * @param  {function} cb
 * @return {string}
 */
// { title: 'msg', type: 'string', required: true },
// { title: 'id', type: 'string', required: false },
// { title: 'cb', type: 'function' }
var on = function on(msg, id, cb) {
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
    var msgHandler = handlers[msg] || [];

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
// { title: 'msg', type: 'string', required: true },
// { title: 'id', type: 'string', required: false }
var off = function off(msg, id) {
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
// { title: 'msg', type: 'string', required: true }
// { title: 'data' }
var send = function send(msg, data) {
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
var reset = function reset() {
    handlers = {};
};

// --------------------------------
// Export

exports.default = { on: on, off: off, send: send, reset: reset };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWlsYm94LmpzIl0sIm5hbWVzIjpbImhhbmRsZXJzIiwib24iLCJtc2ciLCJpZCIsImNiIiwiTWF0aCIsInJhbmRvbSIsIkVycm9yIiwibXNnSGFuZGxlciIsInB1c2giLCJsaXN0ZW5lciIsIm9mZiIsInVuZGVmaW5lZCIsImZpbHRlciIsInZhbCIsInNlbmQiLCJkYXRhIiwiaGFuZGxlciIsImkiLCJsZW5ndGgiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBRUEsSUFBSUEsV0FBVyxFQUFmOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsR0FBRCxFQUFNQyxFQUFOLEVBQVVDLEVBQVYsRUFBaUI7QUFDeEIsUUFBSSxPQUFPRCxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDMUJDLGFBQUtELEVBQUw7QUFDQUEsa0JBQVFFLEtBQUtDLE1BQUwsS0FBZ0IsTUFBeEI7QUFDSDs7QUFFRCxRQUFJLENBQUNKLEdBQUQsSUFBUSxPQUFPQSxHQUFQLEtBQWUsVUFBM0IsRUFBdUM7QUFDbkMsY0FBTSxJQUFJSyxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNIOztBQUVELFFBQUksQ0FBQ0gsRUFBRCxJQUFPLE9BQU9BLEVBQVAsS0FBYyxVQUF6QixFQUFxQztBQUNqQyxjQUFNLElBQUlHLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0g7O0FBRUQ7QUFDQSxRQUFNQyxhQUFhUixTQUFTRSxHQUFULEtBQWlCLEVBQXBDOztBQUVBO0FBQ0FNLGVBQVdDLElBQVgsQ0FBZ0IsRUFBRU4sTUFBRixFQUFNTyxVQUFVTixFQUFoQixFQUFoQjtBQUNBSixhQUFTRSxHQUFULElBQWdCTSxVQUFoQjs7QUFFQSxXQUFPTCxFQUFQO0FBQ0gsQ0F0QkQ7O0FBd0JBOzs7OztBQUtBO0FBQ0E7QUFDQSxJQUFNUSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ1QsR0FBRCxFQUFNQyxFQUFOLEVBQWE7QUFDckIsUUFBSSxDQUFDRCxHQUFELElBQVEsQ0FBQ0YsU0FBU0UsR0FBVCxDQUFiLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDQyxFQUFMLEVBQVM7QUFDTDtBQUNBSCxpQkFBU0UsR0FBVCxJQUFnQlUsU0FBaEI7QUFDQTtBQUNIOztBQUVEWixhQUFTRSxHQUFULElBQWdCRixTQUFTRSxHQUFULEVBQWNXLE1BQWQsQ0FBcUIsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLElBQUlYLEVBQUosS0FBV0EsRUFBcEI7QUFBQSxLQUFyQixDQUFoQjtBQUNILENBWkQ7O0FBY0E7Ozs7O0FBS0E7QUFDQTtBQUNBLElBQU1ZLE9BQU8sU0FBUEEsSUFBTyxDQUFDYixHQUFELEVBQU1jLElBQU4sRUFBZTtBQUN4QixRQUFNQyxVQUFVakIsU0FBU0UsR0FBVCxDQUFoQjs7QUFFQSxRQUFJLENBQUNlLE9BQUwsRUFBYztBQUNWO0FBQ0g7O0FBRUQsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELFFBQVFFLE1BQTVCLEVBQW9DRCxLQUFLLENBQXpDLEVBQTRDO0FBQ3hDRCxnQkFBUUMsQ0FBUixFQUFXUixRQUFYLENBQW9CTSxJQUFwQjtBQUNIO0FBQ0osQ0FWRDs7QUFZQTs7O0FBR0EsSUFBTUksUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFBRXBCLGVBQVcsRUFBWDtBQUFnQixDQUF0Qzs7QUFFQTtBQUNBOztrQkFFZSxFQUFFQyxNQUFGLEVBQU1VLFFBQU4sRUFBV0ksVUFBWCxFQUFpQkssWUFBakIsRSIsImZpbGUiOiJtYWlsYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgaGFuZGxlcnMgPSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIExpc3RlbnMgYW5kIHdhaXRzIGZvciBtZXNzYWdlc1xuICogQHBhcmFtICB7c3RyaW5nfSBtc2dcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG4vLyB7IHRpdGxlOiAnbXNnJywgdHlwZTogJ3N0cmluZycsIHJlcXVpcmVkOiB0cnVlIH0sXG4vLyB7IHRpdGxlOiAnaWQnLCB0eXBlOiAnc3RyaW5nJywgcmVxdWlyZWQ6IGZhbHNlIH0sXG4vLyB7IHRpdGxlOiAnY2InLCB0eXBlOiAnZnVuY3Rpb24nIH1cbmNvbnN0IG9uID0gKG1zZywgaWQsIGNiKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYiA9IGlkO1xuICAgICAgICBpZCA9IGAke01hdGgucmFuZG9tKCkgKiAxMDAwMDB9YDtcbiAgICB9XG5cbiAgICBpZiAoIW1zZyAmJiB0eXBlb2YgbXNnICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSBtZXNzYWdlIGhhbmRsZXIgaXMgbmVlZGVkIScpO1xuICAgIH1cblxuICAgIGlmICghY2IgJiYgdHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXN0ZW5lciBmdW5jdGlvbiBpcyBuZWVkZWQhJyk7XG4gICAgfVxuXG4gICAgLy8gTGV0cyBzZWUgaWYgdGhlIG1lc3NhZ2UgaXMgYWxyZWFkeSBkZWZpbmVkIGFuZCBjYWNoZSBpdFxuICAgIGNvbnN0IG1zZ0hhbmRsZXIgPSBoYW5kbGVyc1ttc2ddIHx8IFtdO1xuXG4gICAgLy8gTm93IGxldHMgY2FjaGUgaXRcbiAgICBtc2dIYW5kbGVyLnB1c2goeyBpZCwgbGlzdGVuZXI6IGNiIH0pO1xuICAgIGhhbmRsZXJzW21zZ10gPSBtc2dIYW5kbGVyO1xuXG4gICAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxpc3RlbmVyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1zZ1xuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICovXG4vLyB7IHRpdGxlOiAnbXNnJywgdHlwZTogJ3N0cmluZycsIHJlcXVpcmVkOiB0cnVlIH0sXG4vLyB7IHRpdGxlOiAnaWQnLCB0eXBlOiAnc3RyaW5nJywgcmVxdWlyZWQ6IGZhbHNlIH1cbmNvbnN0IG9mZiA9IChtc2csIGlkKSA9PiB7XG4gICAgaWYgKCFtc2cgfHwgIWhhbmRsZXJzW21zZ10pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaWQpIHtcbiAgICAgICAgLy8gTGV0cyByZW1vdmUgYWxsIG1lc3NhZ2VzXG4gICAgICAgIGhhbmRsZXJzW21zZ10gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVyc1ttc2ddID0gaGFuZGxlcnNbbXNnXS5maWx0ZXIoKHZhbCkgPT4gdmFsLmlkICE9PSBpZCk7XG59O1xuXG4vKipcbiAqIFNlbmRzIG1lc3NhZ2VcbiAqIEBwYXJhbSAge3N0cmluZ30gbXNnXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAqL1xuLy8geyB0aXRsZTogJ21zZycsIHR5cGU6ICdzdHJpbmcnLCByZXF1aXJlZDogdHJ1ZSB9XG4vLyB7IHRpdGxlOiAnZGF0YScgfVxuY29uc3Qgc2VuZCA9IChtc2csIGRhdGEpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnNbbXNnXTtcblxuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGhhbmRsZXJbaV0ubGlzdGVuZXIoZGF0YSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXNldHMgYWxsIGxpc3RlbmVyc1xuICovXG5jb25zdCByZXNldCA9ICgpID0+IHsgaGFuZGxlcnMgPSB7fTsgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IG9uLCBvZmYsIHNlbmQsIHJlc2V0IH07XG4iXX0=