'use strict';

// -----------------------------------------
// Functions

/**
 * Error reducer maker
 * @param  {*}  INITIAL_STATE
 * @return {function}
 */

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9lcnIuanMiXSwibmFtZXMiOlsicmVkdWNlciIsIklOSVRJQUxfU1RBVEUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkaWZmIiwicmVwbGFjZSIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBS0EsSUFBTUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsTUFBQ0MsYUFBRCx1RUFBaUIsS0FBakI7QUFBQSxTQUEyQixZQUF3QztBQUFBLFFBQXZDQyxLQUF1Qyx1RUFBL0JELGFBQStCO0FBQUEsUUFBaEJFLE1BQWdCLHVFQUFQLEVBQU87O0FBQy9FLFFBQU1DLE9BQU9ELE9BQU9DLElBQXBCO0FBQ0EsUUFBTUMsT0FBT0QsS0FBS0UsT0FBTCxDQUFhLE1BQWIsRUFBcUIsRUFBckIsTUFBNkJGLElBQTFDOztBQUVBLFdBQU9DLE9BQU9GLE9BQU9JLEdBQWQsR0FBb0JMLEtBQTNCO0FBQ0gsR0FMZTtBQUFBLENBQWhCOztBQU9BO0FBQ0E7O2tCQUVlRixPIiwiZmlsZSI6ImVyci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIEVycm9yIHJlZHVjZXIgbWFrZXJcbiAqIEBwYXJhbSAgeyp9ICBJTklUSUFMX1NUQVRFXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuY29uc3QgcmVkdWNlciA9IChJTklUSUFMX1NUQVRFID0gZmFsc2UpID0+IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbiA9IHt9KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlO1xuICAgIGNvbnN0IGRpZmYgPSB0eXBlLnJlcGxhY2UoJ19FUlInLCAnJykgIT09IHR5cGU7XG5cbiAgICByZXR1cm4gZGlmZiA/IGFjdGlvbi5lcnIgOiBzdGF0ZTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdfQ==