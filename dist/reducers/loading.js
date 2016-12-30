'use strict';

// -----------------------------------------
// Functions

/**
 * Loading reducer maker
 * @param  {boolean}  INITIAL_STATE
 * @return {function}
 */
// { title: 'INITIAL_STATE', type: 'boolean', default: false, required: true }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reducer = function reducer() {
  var INITIAL_STATE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var type = action.type;
    var diff = type.replace('_LOADING', '') !== type;

    return diff ? action.loading : state;
  };
};

// -----------------------------------------
// Export

exports.default = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9sb2FkaW5nLmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJJTklUSUFMX1NUQVRFIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGlmZiIsInJlcGxhY2UiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBOzs7OztBQUtBOzs7OztBQUNBLElBQU1BLFVBQVUsU0FBVkEsT0FBVTtBQUFBLE1BQUNDLGFBQUQsdUVBQWlCLEtBQWpCO0FBQUEsU0FBMkIsWUFBd0M7QUFBQSxRQUF2Q0MsS0FBdUMsdUVBQS9CRCxhQUErQjtBQUFBLFFBQWhCRSxNQUFnQix1RUFBUCxFQUFPOztBQUMvRSxRQUFNQyxPQUFPRCxPQUFPQyxJQUFwQjtBQUNBLFFBQU1DLE9BQU9ELEtBQUtFLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEVBQXpCLE1BQWlDRixJQUE5Qzs7QUFFQSxXQUFPQyxPQUFPRixPQUFPSSxPQUFkLEdBQXdCTCxLQUEvQjtBQUNILEdBTGU7QUFBQSxDQUFoQjs7QUFPQTtBQUNBOztrQkFFZUYsTyIsImZpbGUiOiJsb2FkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogTG9hZGluZyByZWR1Y2VyIG1ha2VyXG4gKiBAcGFyYW0gIHtib29sZWFufSAgSU5JVElBTF9TVEFURVxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbi8vIHsgdGl0bGU6ICdJTklUSUFMX1NUQVRFJywgdHlwZTogJ2Jvb2xlYW4nLCBkZWZhdWx0OiBmYWxzZSwgcmVxdWlyZWQ6IHRydWUgfVxuY29uc3QgcmVkdWNlciA9IChJTklUSUFMX1NUQVRFID0gZmFsc2UpID0+IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbiA9IHt9KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlO1xuICAgIGNvbnN0IGRpZmYgPSB0eXBlLnJlcGxhY2UoJ19MT0FESU5HJywgJycpICE9PSB0eXBlO1xuXG4gICAgcmV0dXJuIGRpZmYgPyBhY3Rpb24ubG9hZGluZyA6IHN0YXRlO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl19