/* :: import type {GetNew} from './_test/state.flow.js'; */
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
var getNew /* :: :GetNew */ = function getNew() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJnZXROZXciLCJvbGRTdGF0ZSIsIm5ld1N0YXRlIiwibmV3RGF0YSIsImlzRGlmZiIsImRpZmYiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQVc7QUFDWDs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsT0FBTSxnQkFBTixHQUF5QixTQUF6QkEsTUFBeUIsR0FBa0M7QUFBQSxRQUFqQ0MsUUFBaUMsdUVBQXRCLEVBQXNCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87O0FBQzdELFFBQU1DLFVBQVUscUJBQU0sRUFBTixFQUFVLHlCQUFVRixRQUFWLENBQVYsRUFBK0IseUJBQVVDLFFBQVYsQ0FBL0IsQ0FBaEI7QUFDQSxRQUFNRSxTQUFTLG9CQUFLSCxRQUFMLEVBQWVFLE9BQWYsQ0FBZjs7QUFFQTtBQUNBLFdBQU87QUFDSEUsY0FBTSxDQUFDLENBQUNELE1BQUYsR0FBV0EsTUFBWCxHQUFvQixLQUR2QjtBQUVIRSxlQUFPSDtBQUZKLEtBQVA7QUFJSCxDQVREOztBQVdBO0FBQ0E7O2tCQUVlLEVBQUVILGNBQUYsRSIsImZpbGUiOiJzdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovLyogOjogaW1wb3J0IHR5cGUge0dldE5ld30gZnJvbSAnLi9fdGVzdC9zdGF0ZS5mbG93LmpzJzsgKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwLmpzJztcbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gvbWVyZ2UuanMnO1xuaW1wb3J0IHsgZGlmZiB9IGZyb20gJ2RlZXAtZGlmZic7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBHZXRzIG5ldyBzdGF0ZVxuICogQHBhcmFtICB7Kn0gb2xkU3RhdGVcbiAqIEBwYXJhbSAgeyp9IG5ld1N0YXRlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmNvbnN0IGdldE5ldy8qIDo6IDpHZXROZXcgKi8gPSAob2xkU3RhdGUgPSB7fSwgbmV3U3RhdGUgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBtZXJnZSh7fSwgY2xvbmVEZWVwKG9sZFN0YXRlKSwgY2xvbmVEZWVwKG5ld1N0YXRlKSk7XG4gICAgY29uc3QgaXNEaWZmID0gZGlmZihvbGRTdGF0ZSwgbmV3RGF0YSk7XG5cbiAgICAvLyBVcGRhdGUgZGF0YVxuICAgIHJldHVybiB7XG4gICAgICAgIGRpZmY6ICEhaXNEaWZmID8gaXNEaWZmIDogZmFsc2UsXG4gICAgICAgIHN0YXRlOiBuZXdEYXRhXG4gICAgfTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgeyBnZXROZXcgfTtcbiJdfQ==