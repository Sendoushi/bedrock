'use strict';

// -----------------------------------------
// Functions

/**
 * Takes care of a request
 * @param  {object} obj
 * @return {promise}
 */

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiYWN0aW9uIiwib2JqIiwic3RvcmUiLCJyZXF1ZXN0TWFkZSIsInJlcXVlc3QiLCJhY3Rpb25UeXBlIiwibWlkZGxld2FyZSIsImxhc3RTdGVwIiwiZGlzcGF0Y2giLCJ0eXBlIiwibG9hZGluZyIsInByb21pc2UiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQUtBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFDcEIsUUFBTUMsUUFBUUQsSUFBSUMsS0FBbEI7QUFDQSxRQUFNQyxjQUFjRixJQUFJRyxPQUF4QjtBQUNBLFFBQU1DLGFBQWFKLElBQUlELE1BQXZCO0FBQ0EsUUFBTU0sYUFBYUwsSUFBSUssVUFBdkI7QUFDQSxRQUFJQyxXQUFXLE1BQWY7O0FBRUE7QUFDQUwsVUFBTU0sUUFBTixDQUFlLEVBQUVDLE1BQVNKLFVBQVQsYUFBRixFQUFpQ0ssU0FBUyxJQUExQyxFQUFmOztBQUVBO0FBQ0EsUUFBTUMsVUFBVVIsY0FDZlMsSUFEZSxDQUNWLFVBQUNDLElBQUQ7QUFBQSxlQUFVLENBQUMsQ0FBQ1AsVUFBRixHQUFlQSxXQUFXTyxJQUFYLENBQWYsR0FBa0NBLElBQTVDO0FBQUEsS0FEVSxFQUVmRCxJQUZlLENBRVYsVUFBQ0MsSUFBRCxFQUFVO0FBQ1o7QUFDQVgsY0FBTU0sUUFBTixDQUFlLEVBQUVDLE1BQU1KLFVBQVIsRUFBb0JRLFVBQXBCLEVBQWY7QUFDQSxlQUFPQSxJQUFQO0FBQ0gsS0FOZSxFQU9mQyxLQVBlLENBT1QsVUFBQ0MsR0FBRCxFQUFTO0FBQ1o7QUFDQWIsY0FBTU0sUUFBTixDQUFlLEVBQUVDLE1BQVNKLFVBQVQsU0FBRixFQUE2QlUsUUFBN0IsRUFBZjtBQUNILEtBVmUsQ0FBaEI7O0FBWUE7QUFDQSxRQUFJSixRQUFRSyxjQUFSLENBQXVCLFNBQXZCLENBQUosRUFBdUM7QUFDbkNULG1CQUFXLFNBQVg7QUFDSDs7QUFFRDtBQUNBSSxZQUFRSixRQUFSLEVBQWtCLFVBQUNNLElBQUQsRUFBVTtBQUN4QjtBQUNBWCxjQUFNTSxRQUFOLENBQWUsRUFBRUMsTUFBU0osVUFBVCxhQUFGLEVBQWlDSyxTQUFTLEtBQTFDLEVBQWY7O0FBRUEsZUFBT0csSUFBUDtBQUNILEtBTEQ7O0FBT0EsV0FBT0YsT0FBUDtBQUNILENBckNEOztBQXVDQTtBQUNBOztrQkFFZVgsTSIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogVGFrZXMgY2FyZSBvZiBhIHJlcXVlc3RcbiAqIEBwYXJhbSAge29iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtwcm9taXNlfVxuICovXG5jb25zdCBhY3Rpb24gPSAob2JqKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBvYmouc3RvcmU7XG4gICAgY29uc3QgcmVxdWVzdE1hZGUgPSBvYmoucmVxdWVzdDtcbiAgICBjb25zdCBhY3Rpb25UeXBlID0gb2JqLmFjdGlvbjtcbiAgICBjb25zdCBtaWRkbGV3YXJlID0gb2JqLm1pZGRsZXdhcmU7XG4gICAgbGV0IGxhc3RTdGVwID0gJ3RoZW4nO1xuXG4gICAgLy8gU2V0IGxvYWRpbmdcbiAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IGAke2FjdGlvblR5cGV9X0xPQURJTkdgLCBsb2FkaW5nOiB0cnVlIH0pO1xuXG4gICAgLy8gTWFrZSB0aGUgcmVxdWVzdFxuICAgIGNvbnN0IHByb21pc2UgPSByZXF1ZXN0TWFkZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+ICEhbWlkZGxld2FyZSA/IG1pZGRsZXdhcmUoZGF0YSkgOiBkYXRhKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIC8vIERpc3BhdGNoIGRhdGFcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlLCBkYXRhIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIERpc3BhdGNoIHRoZSBlcnJvclxuICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IGAke2FjdGlvblR5cGV9X0VSUmAsIGVyciB9KTtcbiAgICB9KTtcblxuICAgIC8vIENoZWNrIGZvciB0aGUgbGFzdCBzdGVwXG4gICAgaWYgKHByb21pc2UuaGFzT3duUHJvcGVydHkoJ2ZpbmFsbHknKSkge1xuICAgICAgICBsYXN0U3RlcCA9ICdmaW5hbGx5JztcbiAgICB9XG5cbiAgICAvLyBOb3cgc2V0IHRoZSBsYXN0IHN0ZXBcbiAgICBwcm9taXNlW2xhc3RTdGVwXSgoZGF0YSkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgbG9hZGluZ1xuICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IGAke2FjdGlvblR5cGV9X0xPQURJTkdgLCBsb2FkaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iXX0=