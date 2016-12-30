'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


// -----------------------------------------
// Functions

/**
 * Loading reducer maker
 * @param  {boolean}  INITIAL_STATE
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
        var diff = type.replace('_LOADING', '') !== type;

        return diff ? action.loading : state;
    };
};

// -----------------------------------------
// Export

exports.default = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9sb2FkaW5nLmpzIl0sIm5hbWVzIjpbInJlZHVjZXJWYWxpZGF0ZSIsInJlZHVjZXIiLCJJTklUSUFMX1NUQVRFIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGlmZiIsInJlcGxhY2UiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUlBO0FBQ0E7O0FBRUE7Ozs7O0FBS0EsSUFBTUEsd0JBQU47QUFHQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBMkI7QUFBQSxRQUExQkMsYUFBMEIsdUVBQVYsS0FBVTs7QUFDdkNGLG9CQUFnQixDQUFDRSxhQUFELENBQWhCOztBQUVBLFdBQU8sWUFBd0M7QUFBQSxZQUF2Q0MsS0FBdUMsdUVBQS9CRCxhQUErQjtBQUFBLFlBQWhCRSxNQUFnQix1RUFBUCxFQUFPOztBQUMzQyxZQUFNQyxPQUFPRCxPQUFPQyxJQUFwQjtBQUNBLFlBQU1DLE9BQU9ELEtBQUtFLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEVBQXpCLE1BQWlDRixJQUE5Qzs7QUFFQSxlQUFPQyxPQUFPRixPQUFPSSxPQUFkLEdBQXdCTCxLQUEvQjtBQUNILEtBTEQ7QUFNSCxDQVREOztBQVdBO0FBQ0E7O2tCQUVlRixPIiwiZmlsZSI6ImxvYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGNvbXBpbGVTY2hlbWEsIGdldFNjaGVtYSB9IGZyb20gJ2JlZHJvY2stdXRpbHMvc3JjL3ZhbGlkYXRlLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIExvYWRpbmcgcmVkdWNlciBtYWtlclxuICogQHBhcmFtICB7Ym9vbGVhbn0gIElOSVRJQUxfU1RBVEVcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5jb25zdCByZWR1Y2VyVmFsaWRhdGUgPSBjb21waWxlU2NoZW1hKGdldFNjaGVtYShbXG4gICAgeyB0aXRsZTogJ0lOSVRJQUxfU1RBVEUnLCB0eXBlOiAnYm9vbGVhbicsIHJlcXVpcmVkOiB0cnVlIH1cbl0pKTtcbmNvbnN0IHJlZHVjZXIgPSAoSU5JVElBTF9TVEFURSA9IGZhbHNlKSA9PiB7XG4gICAgcmVkdWNlclZhbGlkYXRlKFtJTklUSUFMX1NUQVRFXSk7XG5cbiAgICByZXR1cm4gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlO1xuICAgICAgICBjb25zdCBkaWZmID0gdHlwZS5yZXBsYWNlKCdfTE9BRElORycsICcnKSAhPT0gdHlwZTtcblxuICAgICAgICByZXR1cm4gZGlmZiA/IGFjdGlvbi5sb2FkaW5nIDogc3RhdGU7XG4gICAgfTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdfQ==