/* :: import type {FnGetNew} from './_test/state.flow.js'; */
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
var getNew /* :: :FnGetNew */ = function getNew() {
    var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var newState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJnZXROZXciLCJvbGRTdGF0ZSIsIm5ld1N0YXRlIiwibmV3RGF0YSIsImlzRGlmZiIsImRpZmYiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQVc7QUFDWDs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsT0FBTSxrQkFBTixHQUEyQixTQUEzQkEsTUFBMkIsR0FBa0M7QUFBQSxRQUFqQ0MsUUFBaUMsdUVBQXRCLEVBQXNCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87O0FBQy9ELFFBQU1DLFVBQVUscUJBQU0sRUFBTixFQUFVLHlCQUFVRixRQUFWLENBQVYsRUFBK0IseUJBQVVDLFFBQVYsQ0FBL0IsQ0FBaEI7QUFDQSxRQUFNRSxTQUFTLG9CQUFLSCxRQUFMLEVBQWVFLE9BQWYsQ0FBZjs7QUFFQTtBQUNBLFdBQU87QUFDSEUsY0FBTSxDQUFDLENBQUNELE1BQUYsR0FBV0EsTUFBWCxHQUFvQixLQUR2QjtBQUVIRSxlQUFPSDtBQUZKLEtBQVA7QUFJSCxDQVREOztBQVdBO0FBQ0E7O2tCQUVlLEVBQUVILGNBQUYsRSIsImZpbGUiOiJzdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovLyogOjogaW1wb3J0IHR5cGUge0ZuR2V0TmV3fSBmcm9tICcuL190ZXN0L3N0YXRlLmZsb3cuanMnOyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAuanMnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC9tZXJnZS5qcyc7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSAnZGVlcC1kaWZmJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIEdldHMgbmV3IHN0YXRlXG4gKiBAcGFyYW0gIHsqfSBvbGRTdGF0ZVxuICogQHBhcmFtICB7Kn0gbmV3U3RhdGVcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuY29uc3QgZ2V0TmV3LyogOjogOkZuR2V0TmV3ICovID0gKG9sZFN0YXRlID0ge30sIG5ld1N0YXRlID0ge30pID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gbWVyZ2Uoe30sIGNsb25lRGVlcChvbGRTdGF0ZSksIGNsb25lRGVlcChuZXdTdGF0ZSkpO1xuICAgIGNvbnN0IGlzRGlmZiA9IGRpZmYob2xkU3RhdGUsIG5ld0RhdGEpO1xuXG4gICAgLy8gVXBkYXRlIGRhdGFcbiAgICByZXR1cm4ge1xuICAgICAgICBkaWZmOiAhIWlzRGlmZiA/IGlzRGlmZiA6IGZhbHNlLFxuICAgICAgICBzdGF0ZTogbmV3RGF0YVxuICAgIH07XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2V0TmV3IH07XG4iXX0=