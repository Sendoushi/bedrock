'use strict';

// -----------------------------------------
// Functions

/**
 * Takes care of a request
 * @param  {object} obj
 * @return {promise}
 */
// { title: 'obj', properties: {
//     store: { properties: {} },
//     request: { properties: {} },
//     action: { type: 'string' }
//     middleware: {}
// } }

Object.defineProperty(exports, "__esModule", {
    value: true
});
var action = function action(obj) {
    var store = obj.store;
    var requestMade = obj.request;
    var actionType = obj.action;
    var middleware = obj.middleware;
    var lastStep = 'then';

    // Set loading
    store.dispatch({ type: actionType + '_LOADING', loading: true });

    // Make the request
    var promise = requestMade().then(function (data) {
        return !!middleware ? middleware(data) : data;
    }).then(function (data) {
        // Dispatch data
        store.dispatch({ type: actionType, data: data });
        return data;
    }).catch(function (err) {
        // Dispatch the error
        store.dispatch({ type: actionType + '_ERR', err: err });
    });

    // Check for the last step
    if (promise.hasOwnProperty('finally')) {
        lastStep = 'finally';
    }

    // Now set the last step
    promise[lastStep](function (data) {
        // Remove loading
        store.dispatch({ type: actionType + '_LOADING', loading: false });

        return data;
    });

    return promise;
};

// --------------------------------
// Export

exports.default = action;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiYWN0aW9uIiwib2JqIiwic3RvcmUiLCJyZXF1ZXN0TWFkZSIsInJlcXVlc3QiLCJhY3Rpb25UeXBlIiwibWlkZGxld2FyZSIsImxhc3RTdGVwIiwiZGlzcGF0Y2giLCJ0eXBlIiwibG9hZGluZyIsInByb21pc2UiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFDcEIsUUFBTUMsUUFBUUQsSUFBSUMsS0FBbEI7QUFDQSxRQUFNQyxjQUFjRixJQUFJRyxPQUF4QjtBQUNBLFFBQU1DLGFBQWFKLElBQUlELE1BQXZCO0FBQ0EsUUFBTU0sYUFBYUwsSUFBSUssVUFBdkI7QUFDQSxRQUFJQyxXQUFXLE1BQWY7O0FBRUE7QUFDQUwsVUFBTU0sUUFBTixDQUFlLEVBQUVDLE1BQVNKLFVBQVQsYUFBRixFQUFpQ0ssU0FBUyxJQUExQyxFQUFmOztBQUVBO0FBQ0EsUUFBTUMsVUFBVVIsY0FDZlMsSUFEZSxDQUNWLFVBQUNDLElBQUQ7QUFBQSxlQUFVLENBQUMsQ0FBQ1AsVUFBRixHQUFlQSxXQUFXTyxJQUFYLENBQWYsR0FBa0NBLElBQTVDO0FBQUEsS0FEVSxFQUVmRCxJQUZlLENBRVYsVUFBQ0MsSUFBRCxFQUFVO0FBQ1o7QUFDQVgsY0FBTU0sUUFBTixDQUFlLEVBQUVDLE1BQU1KLFVBQVIsRUFBb0JRLFVBQXBCLEVBQWY7QUFDQSxlQUFPQSxJQUFQO0FBQ0gsS0FOZSxFQU9mQyxLQVBlLENBT1QsVUFBQ0MsR0FBRCxFQUFTO0FBQ1o7QUFDQWIsY0FBTU0sUUFBTixDQUFlLEVBQUVDLE1BQVNKLFVBQVQsU0FBRixFQUE2QlUsUUFBN0IsRUFBZjtBQUNILEtBVmUsQ0FBaEI7O0FBWUE7QUFDQSxRQUFJSixRQUFRSyxjQUFSLENBQXVCLFNBQXZCLENBQUosRUFBdUM7QUFDbkNULG1CQUFXLFNBQVg7QUFDSDs7QUFFRDtBQUNBSSxZQUFRSixRQUFSLEVBQWtCLFVBQUNNLElBQUQsRUFBVTtBQUN4QjtBQUNBWCxjQUFNTSxRQUFOLENBQWUsRUFBRUMsTUFBU0osVUFBVCxhQUFGLEVBQWlDSyxTQUFTLEtBQTFDLEVBQWY7O0FBRUEsZUFBT0csSUFBUDtBQUNILEtBTEQ7O0FBT0EsV0FBT0YsT0FBUDtBQUNILENBckNEOztBQXVDQTtBQUNBOztrQkFFZVgsTSIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogVGFrZXMgY2FyZSBvZiBhIHJlcXVlc3RcbiAqIEBwYXJhbSAge29iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtwcm9taXNlfVxuICovXG4vLyB7IHRpdGxlOiAnb2JqJywgcHJvcGVydGllczoge1xuLy8gICAgIHN0b3JlOiB7IHByb3BlcnRpZXM6IHt9IH0sXG4vLyAgICAgcmVxdWVzdDogeyBwcm9wZXJ0aWVzOiB7fSB9LFxuLy8gICAgIGFjdGlvbjogeyB0eXBlOiAnc3RyaW5nJyB9XG4vLyAgICAgbWlkZGxld2FyZToge31cbi8vIH0gfVxuY29uc3QgYWN0aW9uID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gb2JqLnN0b3JlO1xuICAgIGNvbnN0IHJlcXVlc3RNYWRlID0gb2JqLnJlcXVlc3Q7XG4gICAgY29uc3QgYWN0aW9uVHlwZSA9IG9iai5hY3Rpb247XG4gICAgY29uc3QgbWlkZGxld2FyZSA9IG9iai5taWRkbGV3YXJlO1xuICAgIGxldCBsYXN0U3RlcCA9ICd0aGVuJztcblxuICAgIC8vIFNldCBsb2FkaW5nXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBgJHthY3Rpb25UeXBlfV9MT0FESU5HYCwgbG9hZGluZzogdHJ1ZSB9KTtcblxuICAgIC8vIE1ha2UgdGhlIHJlcXVlc3RcbiAgICBjb25zdCBwcm9taXNlID0gcmVxdWVzdE1hZGUoKVxuICAgIC50aGVuKChkYXRhKSA9PiAhIW1pZGRsZXdhcmUgPyBtaWRkbGV3YXJlKGRhdGEpIDogZGF0YSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAvLyBEaXNwYXRjaCBkYXRhXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZSwgZGF0YSB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXJyb3JcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBgJHthY3Rpb25UeXBlfV9FUlJgLCBlcnIgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDaGVjayBmb3IgdGhlIGxhc3Qgc3RlcFxuICAgIGlmIChwcm9taXNlLmhhc093blByb3BlcnR5KCdmaW5hbGx5JykpIHtcbiAgICAgICAgbGFzdFN0ZXAgPSAnZmluYWxseSc7XG4gICAgfVxuXG4gICAgLy8gTm93IHNldCB0aGUgbGFzdCBzdGVwXG4gICAgcHJvbWlzZVtsYXN0U3RlcF0oKGRhdGEpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIGxvYWRpbmdcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBgJHthY3Rpb25UeXBlfV9MT0FESU5HYCwgbG9hZGluZzogZmFsc2UgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl19