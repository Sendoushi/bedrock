'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cloneDeep = require('lodash/cloneDeep.js');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _merge = require('lodash/merge.js');

var _merge2 = _interopRequireDefault(_merge);

var _deepDiff = require('deep-diff');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -----------------------------------------
// Functions

/**
 * Gets new state
 * @param  {*} oldState
 * @param  {*} newState
 * @return {object}
 */
var getNewValidate = void 0;
var getNew = function getNew() {
    var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var newState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    getNewValidate([oldState, newState]);

    var newData = (0, _merge2.default)({}, (0, _cloneDeep2.default)(oldState), (0, _cloneDeep2.default)(newState));
    var isDiff = (0, _deepDiff.diff)(oldState, newData);

    // Update data
    return {
        diff: !!isDiff ? isDiff : false,
        state: newData
    };
};

// --------------------------------
// Export

exports.default = { getNew: getNew };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJnZXROZXdWYWxpZGF0ZSIsImdldE5ldyIsIm9sZFN0YXRlIiwibmV3U3RhdGUiLCJuZXdEYXRhIiwiaXNEaWZmIiwiZGlmZiIsInN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsdUJBQU47QUFJQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBa0M7QUFBQSxRQUFqQ0MsUUFBaUMsdUVBQXRCLEVBQXNCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87O0FBQzdDSCxtQkFBZSxDQUFDRSxRQUFELEVBQVdDLFFBQVgsQ0FBZjs7QUFFQSxRQUFNQyxVQUFVLHFCQUFNLEVBQU4sRUFBVSx5QkFBVUYsUUFBVixDQUFWLEVBQStCLHlCQUFVQyxRQUFWLENBQS9CLENBQWhCO0FBQ0EsUUFBTUUsU0FBUyxvQkFBS0gsUUFBTCxFQUFlRSxPQUFmLENBQWY7O0FBRUE7QUFDQSxXQUFPO0FBQ0hFLGNBQU0sQ0FBQyxDQUFDRCxNQUFGLEdBQVdBLE1BQVgsR0FBb0IsS0FEdkI7QUFFSEUsZUFBT0g7QUFGSixLQUFQO0FBSUgsQ0FYRDs7QUFhQTtBQUNBOztrQkFFZSxFQUFFSCxjQUFGLEUiLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcC5qcyc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlLmpzJztcbmltcG9ydCB7IGRpZmYgfSBmcm9tICdkZWVwLWRpZmYnO1xuaW1wb3J0IHsgY29tcGlsZVNjaGVtYSwgZ2V0U2NoZW1hIH0gZnJvbSAnYmVkcm9jay11dGlscy9zcmMvdmFsaWRhdGUuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogR2V0cyBuZXcgc3RhdGVcbiAqIEBwYXJhbSAgeyp9IG9sZFN0YXRlXG4gKiBAcGFyYW0gIHsqfSBuZXdTdGF0ZVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5jb25zdCBnZXROZXdWYWxpZGF0ZSA9IGNvbXBpbGVTY2hlbWEoZ2V0U2NoZW1hKFtcbiAgICB7IHRpdGxlOiAnb2xkU3RhdGUnLCBwcm9wZXJ0aWVzOiB7fSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICB7IHRpdGxlOiAnbmV3U3RhdGUnLCBwcm9wZXJ0aWVzOiB7fSwgcmVxdWlyZWQ6IHRydWUgfVxuXSkpO1xuY29uc3QgZ2V0TmV3ID0gKG9sZFN0YXRlID0ge30sIG5ld1N0YXRlID0ge30pID0+IHtcbiAgICBnZXROZXdWYWxpZGF0ZShbb2xkU3RhdGUsIG5ld1N0YXRlXSk7XG5cbiAgICBjb25zdCBuZXdEYXRhID0gbWVyZ2Uoe30sIGNsb25lRGVlcChvbGRTdGF0ZSksIGNsb25lRGVlcChuZXdTdGF0ZSkpO1xuICAgIGNvbnN0IGlzRGlmZiA9IGRpZmYob2xkU3RhdGUsIG5ld0RhdGEpO1xuXG4gICAgLy8gVXBkYXRlIGRhdGFcbiAgICByZXR1cm4ge1xuICAgICAgICBkaWZmOiAhIWlzRGlmZiA/IGlzRGlmZiA6IGZhbHNlLFxuICAgICAgICBzdGF0ZTogbmV3RGF0YVxuICAgIH07XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2V0TmV3IH07XG4iXX0=