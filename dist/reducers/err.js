'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


// -----------------------------------------
// Functions

/**
 * Error reducer maker
 * @param  {*}  INITIAL_STATE
 * @return {function}
 */
var reducerValidate = void 0;
var reducer = function reducer() {
    var INITIAL_STATE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    reducerValidate([INITIAL_STATE]);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9lcnIuanMiXSwibmFtZXMiOlsicmVkdWNlclZhbGlkYXRlIiwicmVkdWNlciIsIklOSVRJQUxfU1RBVEUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkaWZmIiwicmVwbGFjZSIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFJQTtBQUNBOztBQUVBOzs7OztBQUtBLElBQU1BLHdCQUFOO0FBR0EsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQTJCO0FBQUEsUUFBMUJDLGFBQTBCLHVFQUFWLEtBQVU7O0FBQ3ZDRixvQkFBZ0IsQ0FBQ0UsYUFBRCxDQUFoQjs7QUFFQSxXQUFPLFlBQXdDO0FBQUEsWUFBdkNDLEtBQXVDLHVFQUEvQkQsYUFBK0I7QUFBQSxZQUFoQkUsTUFBZ0IsdUVBQVAsRUFBTzs7QUFDM0MsWUFBTUMsT0FBT0QsT0FBT0MsSUFBcEI7QUFDQSxZQUFNQyxPQUFPRCxLQUFLRSxPQUFMLENBQWEsTUFBYixFQUFxQixFQUFyQixNQUE2QkYsSUFBMUM7O0FBRUEsZUFBT0MsT0FBT0YsT0FBT0ksR0FBZCxHQUFvQkwsS0FBM0I7QUFDSCxLQUxEO0FBTUgsQ0FURDs7QUFXQTtBQUNBOztrQkFFZUYsTyIsImZpbGUiOiJlcnIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGNvbXBpbGVTY2hlbWEsIGdldFNjaGVtYSB9IGZyb20gJ2JlZHJvY2stdXRpbHMvc3JjL3ZhbGlkYXRlLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIEVycm9yIHJlZHVjZXIgbWFrZXJcbiAqIEBwYXJhbSAgeyp9ICBJTklUSUFMX1NUQVRFXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuY29uc3QgcmVkdWNlclZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuICAgIHsgdGl0bGU6ICdJTklUSUFMX1NUQVRFJywgdHlwZTogJ2Jvb2xlYW4nLCByZXF1aXJlZDogdHJ1ZSB9XG5dKSk7XG5jb25zdCByZWR1Y2VyID0gKElOSVRJQUxfU1RBVEUgPSBmYWxzZSkgPT4ge1xuICAgIHJlZHVjZXJWYWxpZGF0ZShbSU5JVElBTF9TVEFURV0pO1xuXG4gICAgcmV0dXJuIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbiA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBhY3Rpb24udHlwZTtcbiAgICAgICAgY29uc3QgZGlmZiA9IHR5cGUucmVwbGFjZSgnX0VSUicsICcnKSAhPT0gdHlwZTtcblxuICAgICAgICByZXR1cm4gZGlmZiA/IGFjdGlvbi5lcnIgOiBzdGF0ZTtcbiAgICB9O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl19