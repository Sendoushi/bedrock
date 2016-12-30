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
// { title: 'oldState', properties: {}, required: true },
// { title: 'newState', properties: {}, required: true }
var getNew = function getNew() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJnZXROZXciLCJvbGRTdGF0ZSIsIm5ld1N0YXRlIiwibmV3RGF0YSIsImlzRGlmZiIsImRpZmYiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsR0FBa0M7QUFBQSxRQUFqQ0MsUUFBaUMsdUVBQXRCLEVBQXNCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87O0FBQzdDLFFBQU1DLFVBQVUscUJBQU0sRUFBTixFQUFVLHlCQUFVRixRQUFWLENBQVYsRUFBK0IseUJBQVVDLFFBQVYsQ0FBL0IsQ0FBaEI7QUFDQSxRQUFNRSxTQUFTLG9CQUFLSCxRQUFMLEVBQWVFLE9BQWYsQ0FBZjs7QUFFQTtBQUNBLFdBQU87QUFDSEUsY0FBTSxDQUFDLENBQUNELE1BQUYsR0FBV0EsTUFBWCxHQUFvQixLQUR2QjtBQUVIRSxlQUFPSDtBQUZKLEtBQVA7QUFJSCxDQVREOztBQVdBO0FBQ0E7O2tCQUVlLEVBQUVILGNBQUYsRSIsImZpbGUiOiJzdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwLmpzJztcbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gvbWVyZ2UuanMnO1xuaW1wb3J0IHsgZGlmZiB9IGZyb20gJ2RlZXAtZGlmZic7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBHZXRzIG5ldyBzdGF0ZVxuICogQHBhcmFtICB7Kn0gb2xkU3RhdGVcbiAqIEBwYXJhbSAgeyp9IG5ld1N0YXRlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbi8vIHsgdGl0bGU6ICdvbGRTdGF0ZScsIHByb3BlcnRpZXM6IHt9LCByZXF1aXJlZDogdHJ1ZSB9LFxuLy8geyB0aXRsZTogJ25ld1N0YXRlJywgcHJvcGVydGllczoge30sIHJlcXVpcmVkOiB0cnVlIH1cbmNvbnN0IGdldE5ldyA9IChvbGRTdGF0ZSA9IHt9LCBuZXdTdGF0ZSA9IHt9KSA9PiB7XG4gICAgY29uc3QgbmV3RGF0YSA9IG1lcmdlKHt9LCBjbG9uZURlZXAob2xkU3RhdGUpLCBjbG9uZURlZXAobmV3U3RhdGUpKTtcbiAgICBjb25zdCBpc0RpZmYgPSBkaWZmKG9sZFN0YXRlLCBuZXdEYXRhKTtcblxuICAgIC8vIFVwZGF0ZSBkYXRhXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlmZjogISFpc0RpZmYgPyBpc0RpZmYgOiBmYWxzZSxcbiAgICAgICAgc3RhdGU6IG5ld0RhdGFcbiAgICB9O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IGdldE5ldyB9O1xuIl19