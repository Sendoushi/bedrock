'use strict';

// -----------------------------------------
// Functions

/**
 * Error reducer maker
 * @param  {*}  INITIAL_STATE
 * @return {function}
 */
// { title: 'INITIAL_STATE', type: 'boolean', default: false }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reducer = function reducer() {
  var INITIAL_STATE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var type = action.type;
    var diff = type.replace('_ERR', '') !== type;

    return diff ? action.err : state;
  };
};

// -----------------------------------------
// Export

exports.default = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9lcnIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsIklOSVRJQUxfU1RBVEUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkaWZmIiwicmVwbGFjZSIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7QUFLQTs7Ozs7QUFDQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxNQUFDQyxhQUFELHVFQUFpQixLQUFqQjtBQUFBLFNBQTJCLFlBQXdDO0FBQUEsUUFBdkNDLEtBQXVDLHVFQUEvQkQsYUFBK0I7QUFBQSxRQUFoQkUsTUFBZ0IsdUVBQVAsRUFBTzs7QUFDL0UsUUFBTUMsT0FBT0QsT0FBT0MsSUFBcEI7QUFDQSxRQUFNQyxPQUFPRCxLQUFLRSxPQUFMLENBQWEsTUFBYixFQUFxQixFQUFyQixNQUE2QkYsSUFBMUM7O0FBRUEsV0FBT0MsT0FBT0YsT0FBT0ksR0FBZCxHQUFvQkwsS0FBM0I7QUFDSCxHQUxlO0FBQUEsQ0FBaEI7O0FBT0E7QUFDQTs7a0JBRWVGLE8iLCJmaWxlIjoiZXJyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogRXJyb3IgcmVkdWNlciBtYWtlclxuICogQHBhcmFtICB7Kn0gIElOSVRJQUxfU1RBVEVcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG4vLyB7IHRpdGxlOiAnSU5JVElBTF9TVEFURScsIHR5cGU6ICdib29sZWFuJywgZGVmYXVsdDogZmFsc2UgfVxuY29uc3QgcmVkdWNlciA9IChJTklUSUFMX1NUQVRFID0gZmFsc2UpID0+IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbiA9IHt9KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlO1xuICAgIGNvbnN0IGRpZmYgPSB0eXBlLnJlcGxhY2UoJ19FUlInLCAnJykgIT09IHR5cGU7XG5cbiAgICByZXR1cm4gZGlmZiA/IGFjdGlvbi5lcnIgOiBzdGF0ZTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdfQ==