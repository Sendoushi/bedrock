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
var onValidate = void 0;
var on = function on(msg, id, cb) {
    onValidate([msg, id]);

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
var offValidate = void 0;
var off = function off(msg, id) {
    offValidate([msg, id]);

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
var sendValidate = void 0;
var send = function send(msg, data) {
    sendValidate([msg]);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWlsYm94LmpzIl0sIm5hbWVzIjpbImhhbmRsZXJzIiwib25WYWxpZGF0ZSIsIm9uIiwibXNnIiwiaWQiLCJjYiIsIk1hdGgiLCJyYW5kb20iLCJFcnJvciIsIm1zZ0hhbmRsZXIiLCJwdXNoIiwibGlzdGVuZXIiLCJvZmZWYWxpZGF0ZSIsIm9mZiIsInVuZGVmaW5lZCIsImZpbHRlciIsInZhbCIsInNlbmRWYWxpZGF0ZSIsInNlbmQiLCJkYXRhIiwiaGFuZGxlciIsImkiLCJsZW5ndGgiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFJQSxJQUFJQSxXQUFXLEVBQWY7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQU9BLElBQU1DLG1CQUFOO0FBS0EsSUFBTUMsS0FBSyxTQUFMQSxFQUFLLENBQUNDLEdBQUQsRUFBTUMsRUFBTixFQUFVQyxFQUFWLEVBQWlCO0FBQ3hCSixlQUFXLENBQUNFLEdBQUQsRUFBTUMsRUFBTixDQUFYOztBQUVBLFFBQUksT0FBT0EsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzFCQyxhQUFLRCxFQUFMO0FBQ0FBLGtCQUFRRSxLQUFLQyxNQUFMLEtBQWdCLE1BQXhCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDSixHQUFELElBQVEsT0FBT0EsR0FBUCxLQUFlLFVBQTNCLEVBQXVDO0FBQ25DLGNBQU0sSUFBSUssS0FBSixDQUFVLDhCQUFWLENBQU47QUFDSDs7QUFFRCxRQUFJLENBQUNILEVBQUQsSUFBTyxPQUFPQSxFQUFQLEtBQWMsVUFBekIsRUFBcUM7QUFDakMsY0FBTSxJQUFJRyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNIOztBQUVEO0FBQ0EsUUFBTUMsV0FBVSxtQkFBVixHQUFnQ1QsU0FBU0csR0FBVCxLQUFpQixFQUF2RDs7QUFFQTtBQUNBTSxlQUFXQyxJQUFYLENBQWdCLEVBQUVOLE1BQUYsRUFBTU8sVUFBVU4sRUFBaEIsRUFBaEI7QUFDQUwsYUFBU0csR0FBVCxJQUFnQk0sVUFBaEI7O0FBRUEsV0FBT0wsRUFBUDtBQUNILENBeEJEOztBQTBCQTs7Ozs7QUFLQSxJQUFNUSxvQkFBTjtBQUlBLElBQU1DLE1BQU0sU0FBTkEsR0FBTSxDQUFDVixHQUFELEVBQU1DLEVBQU4sRUFBYTtBQUNyQlEsZ0JBQVksQ0FBQ1QsR0FBRCxFQUFNQyxFQUFOLENBQVo7O0FBRUEsUUFBSSxDQUFDRCxHQUFELElBQVEsQ0FBQ0gsU0FBU0csR0FBVCxDQUFiLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDQyxFQUFMLEVBQVM7QUFDTDtBQUNBSixpQkFBU0csR0FBVCxJQUFnQlcsU0FBaEI7QUFDQTtBQUNIOztBQUVEZCxhQUFTRyxHQUFULElBQWdCSCxTQUFTRyxHQUFULEVBQWNZLE1BQWQsQ0FBcUIsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLElBQUlaLEVBQUosS0FBV0EsRUFBcEI7QUFBQSxLQUFyQixDQUFoQjtBQUNILENBZEQ7O0FBZ0JBOzs7OztBQUtBLElBQU1hLHFCQUFOO0FBSUEsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQUNmLEdBQUQsRUFBTWdCLElBQU4sRUFBZTtBQUN4QkYsaUJBQWEsQ0FBQ2QsR0FBRCxDQUFiOztBQUVBLFFBQU1pQixVQUFVcEIsU0FBU0csR0FBVCxDQUFoQjs7QUFFQSxRQUFJLENBQUNpQixPQUFMLEVBQWM7QUFDVjtBQUNIOztBQUVELFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxRQUFRRSxNQUE1QixFQUFvQ0QsS0FBSyxDQUF6QyxFQUE0QztBQUN4Q0QsZ0JBQVFDLENBQVIsRUFBV1YsUUFBWCxDQUFvQlEsSUFBcEI7QUFDSDtBQUNKLENBWkQ7O0FBY0E7OztBQUdBLElBQU1JLFFBQVEsU0FBUkEsS0FBUSxHQUFNO0FBQUV2QixlQUFXLEVBQVg7QUFBZ0IsQ0FBdEM7O0FBRUE7QUFDQTs7a0JBRWUsRUFBRUUsTUFBRixFQUFNVyxRQUFOLEVBQVdLLFVBQVgsRUFBaUJLLFlBQWpCLEUiLCJmaWxlIjoibWFpbGJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgY29tcGlsZVNjaGVtYSwgZ2V0U2NoZW1hIH0gZnJvbSAnYmVkcm9jay11dGlscy9zcmMvdmFsaWRhdGUuanMnO1xuXG5sZXQgaGFuZGxlcnMgPSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIExpc3RlbnMgYW5kIHdhaXRzIGZvciBtZXNzYWdlc1xuICogQHBhcmFtICB7c3RyaW5nfSBtc2dcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCBvblZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuICAgIHsgdGl0bGU6ICdtc2cnLCB0eXBlOiAnc3RyaW5nJywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICB7IHRpdGxlOiAnaWQnLCB0eXBlOiAnc3RyaW5nJywgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgLy8geyB0aXRsZTogJ2NiJyB9XG5dKSk7XG5jb25zdCBvbiA9IChtc2csIGlkLCBjYikgPT4ge1xuICAgIG9uVmFsaWRhdGUoW21zZywgaWRdKTtcblxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2IgPSBpZDtcbiAgICAgICAgaWQgPSBgJHtNYXRoLnJhbmRvbSgpICogMTAwMDAwfWA7XG4gICAgfVxuXG4gICAgaWYgKCFtc2cgJiYgdHlwZW9mIG1zZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbWVzc2FnZSBoYW5kbGVyIGlzIG5lZWRlZCEnKTtcbiAgICB9XG5cbiAgICBpZiAoIWNiICYmIHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGlzdGVuZXIgZnVuY3Rpb24gaXMgbmVlZGVkIScpO1xuICAgIH1cblxuICAgIC8vIExldHMgc2VlIGlmIHRoZSBtZXNzYWdlIGlzIGFscmVhZHkgZGVmaW5lZCBhbmQgY2FjaGUgaXRcbiAgICBjb25zdCBtc2dIYW5kbGVyLyogOjogOkhhbmRsZXJbXSAqLyA9IGhhbmRsZXJzW21zZ10gfHwgW107XG5cbiAgICAvLyBOb3cgbGV0cyBjYWNoZSBpdFxuICAgIG1zZ0hhbmRsZXIucHVzaCh7IGlkLCBsaXN0ZW5lcjogY2IgfSk7XG4gICAgaGFuZGxlcnNbbXNnXSA9IG1zZ0hhbmRsZXI7XG5cbiAgICByZXR1cm4gaWQ7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgbGlzdGVuZXJcbiAqIEBwYXJhbSAge3N0cmluZ30gbXNnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKi9cbmNvbnN0IG9mZlZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuICAgIHsgdGl0bGU6ICdtc2cnLCB0eXBlOiAnc3RyaW5nJywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICB7IHRpdGxlOiAnaWQnLCB0eXBlOiAnc3RyaW5nJywgcmVxdWlyZWQ6IGZhbHNlIH1cbl0pKTtcbmNvbnN0IG9mZiA9IChtc2csIGlkKSA9PiB7XG4gICAgb2ZmVmFsaWRhdGUoW21zZywgaWRdKTtcblxuICAgIGlmICghbXNnIHx8ICFoYW5kbGVyc1ttc2ddKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWlkKSB7XG4gICAgICAgIC8vIExldHMgcmVtb3ZlIGFsbCBtZXNzYWdlc1xuICAgICAgICBoYW5kbGVyc1ttc2ddID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlcnNbbXNnXSA9IGhhbmRsZXJzW21zZ10uZmlsdGVyKCh2YWwpID0+IHZhbC5pZCAhPT0gaWQpO1xufTtcblxuLyoqXG4gKiBTZW5kcyBtZXNzYWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1zZ1xuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKi9cbmNvbnN0IHNlbmRWYWxpZGF0ZSA9IGNvbXBpbGVTY2hlbWEoZ2V0U2NoZW1hKFtcbiAgICB7IHRpdGxlOiAnbXNnJywgdHlwZTogJ3N0cmluZycsIHJlcXVpcmVkOiB0cnVlIH1cbiAgICAvLyB7IHRpdGxlOiAnZGF0YScgfVxuXSkpO1xuY29uc3Qgc2VuZCA9IChtc2csIGRhdGEpID0+IHtcbiAgICBzZW5kVmFsaWRhdGUoW21zZ10pO1xuXG4gICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW21zZ107XG5cbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBoYW5kbGVyW2ldLmxpc3RlbmVyKGRhdGEpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmVzZXRzIGFsbCBsaXN0ZW5lcnNcbiAqL1xuY29uc3QgcmVzZXQgPSAoKSA9PiB7IGhhbmRsZXJzID0ge307IH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgeyBvbiwgb2ZmLCBzZW5kLCByZXNldCB9O1xuIl19