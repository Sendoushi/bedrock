'use strict';

// -----------------------------------------
// Functions

/**
 * Loading reducer maker
 * @param  {boolean}  INITIAL_STATE
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
    var diff = type.replace('_LOADING', '') !== type;

    return diff ? action.loading : state;
  };
};

// -----------------------------------------
// Export

exports.default = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9sb2FkaW5nLmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJJTklUSUFMX1NUQVRFIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGlmZiIsInJlcGxhY2UiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFLQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxNQUFDQyxhQUFELHVFQUFpQixLQUFqQjtBQUFBLFNBQTJCLFlBQXdDO0FBQUEsUUFBdkNDLEtBQXVDLHVFQUEvQkQsYUFBK0I7QUFBQSxRQUFoQkUsTUFBZ0IsdUVBQVAsRUFBTzs7QUFDL0UsUUFBTUMsT0FBT0QsT0FBT0MsSUFBcEI7QUFDQSxRQUFNQyxPQUFPRCxLQUFLRSxPQUFMLENBQWEsVUFBYixFQUF5QixFQUF6QixNQUFpQ0YsSUFBOUM7O0FBRUEsV0FBT0MsT0FBT0YsT0FBT0ksT0FBZCxHQUF3QkwsS0FBL0I7QUFDSCxHQUxlO0FBQUEsQ0FBaEI7O0FBT0E7QUFDQTs7a0JBRWVGLE8iLCJmaWxlIjoibG9hZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIExvYWRpbmcgcmVkdWNlciBtYWtlclxuICogQHBhcmFtICB7Ym9vbGVhbn0gIElOSVRJQUxfU1RBVEVcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5jb25zdCByZWR1Y2VyID0gKElOSVRJQUxfU1RBVEUgPSBmYWxzZSkgPT4gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uID0ge30pID0+IHtcbiAgICBjb25zdCB0eXBlID0gYWN0aW9uLnR5cGU7XG4gICAgY29uc3QgZGlmZiA9IHR5cGUucmVwbGFjZSgnX0xPQURJTkcnLCAnJykgIT09IHR5cGU7XG5cbiAgICByZXR1cm4gZGlmZiA/IGFjdGlvbi5sb2FkaW5nIDogc3RhdGU7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXX0=