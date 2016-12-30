'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cloneDeep = require('lodash/cloneDeep.js');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _merge = require('lodash/merge.js');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -----------------------------------------
// Functions

// --------------------------------
// Class

var constructorValidate = void 0;
var setStateValidate = void 0;

var Component = function () {
    // Constructor
    function Component() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Component);

        constructorValidate([data]);

        // Lets cache stuff
        this._comps = data.comps || this._comps || {};

        this.state = data.state || {};
    }

    // State...
    // TODO: Should we check diffs in state?


    _createClass(Component, [{
        key: 'destroy',


        // Destroy
        value: function destroy() {
            // Lets destroy components underneath
            var compsKeys = Object.keys(this._comps);
            for (var i = 0; i < compsKeys.length; i += 1) {
                this._comps[compsKeys[i]].destroy();
                this._comps[compsKeys[i]] = null;
            }

            return this;
        }
    }, {
        key: 'state',
        set: function set(state) {
            setStateValidate([state]);

            this._state = (0, _merge2.default)(this._state || {}, (0, _cloneDeep2.default)(state));
        },
        get: function get() {
            return this._state;
        }
    }]);

    return Component;
}();

exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvY29tbW9uLmpzIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yVmFsaWRhdGUiLCJzZXRTdGF0ZVZhbGlkYXRlIiwiQ29tcG9uZW50IiwiZGF0YSIsIl9jb21wcyIsImNvbXBzIiwic3RhdGUiLCJjb21wc0tleXMiLCJPYmplY3QiLCJrZXlzIiwiaSIsImxlbmd0aCIsImRlc3Ryb3kiLCJfc3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFNQSw0QkFBTjtBQU1BLElBQU1DLHlCQUFOOztJQUlNQyxTO0FBQ0Y7QUFDQSx5QkFBdUI7QUFBQSxZQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ25CSCw0QkFBb0IsQ0FBQ0csSUFBRCxDQUFwQjs7QUFFQTtBQUNBLGFBQUtDLE1BQUwsR0FBY0QsS0FBS0UsS0FBTCxJQUFjLEtBQUtELE1BQW5CLElBQTZCLEVBQTNDOztBQUVBLGFBQUtFLEtBQUwsR0FBYUgsS0FBS0csS0FBTCxJQUFjLEVBQTNCO0FBQ0g7O0FBRUQ7QUFDQTs7Ozs7OztBQVFBO2tDQUNVO0FBQ047QUFDQSxnQkFBTUMsWUFBWUMsT0FBT0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLENBQWxCO0FBQ0EsaUJBQUssSUFBSU0sSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxVQUFVSSxNQUE5QixFQUFzQ0QsS0FBSyxDQUEzQyxFQUE4QztBQUMxQyxxQkFBS04sTUFBTCxDQUFZRyxVQUFVRyxDQUFWLENBQVosRUFBMEJFLE9BQTFCO0FBQ0EscUJBQUtSLE1BQUwsQ0FBWUcsVUFBVUcsQ0FBVixDQUFaLElBQTRCLElBQTVCO0FBQ0g7O0FBRUQsbUJBQU8sSUFBUDtBQUNIOzs7MEJBakJTSixLLEVBQU87QUFDYkwsNkJBQWlCLENBQUNLLEtBQUQsQ0FBakI7O0FBRUEsaUJBQUtPLE1BQUwsR0FBYyxxQkFBTSxLQUFLQSxNQUFMLElBQWUsRUFBckIsRUFBeUIseUJBQVVQLEtBQVYsQ0FBekIsQ0FBZDtBQUNILFM7NEJBQ1c7QUFBRSxtQkFBTyxLQUFLTyxNQUFaO0FBQXFCOzs7Ozs7UUFjOUJYLFMsR0FBQUEsUyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcC5qcyc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlLmpzJztcbmltcG9ydCB7IGNvbXBpbGVTY2hlbWEsIGdldFNjaGVtYSB9IGZyb20gJ2JlZHJvY2stdXRpbHMvc3JjL3ZhbGlkYXRlLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ2xhc3NcblxuY29uc3QgY29uc3RydWN0b3JWYWxpZGF0ZSA9IGNvbXBpbGVTY2hlbWEoZ2V0U2NoZW1hKFtcbiAgICB7IHRpdGxlOiAnZGF0YScsIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY29tcHM6IHsgcHJvcGVydGllczoge30gfSxcbiAgICAgICAgc3RhdGU6IHsgcHJvcGVydGllczoge30gfVxuICAgIH0gfVxuXSkpO1xuY29uc3Qgc2V0U3RhdGVWYWxpZGF0ZSA9IGNvbXBpbGVTY2hlbWEoZ2V0U2NoZW1hKFtcbiAgICB7IHRpdGxlOiAnc3RhdGUnLCBwcm9wZXJ0aWVzOiB7fSB9XG5dKSk7XG5cbmNsYXNzIENvbXBvbmVudCB7XG4gICAgLy8gQ29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICAgICAgY29uc3RydWN0b3JWYWxpZGF0ZShbZGF0YV0pO1xuXG4gICAgICAgIC8vIExldHMgY2FjaGUgc3R1ZmZcbiAgICAgICAgdGhpcy5fY29tcHMgPSBkYXRhLmNvbXBzIHx8IHRoaXMuX2NvbXBzIHx8IHt9O1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBkYXRhLnN0YXRlIHx8IHt9O1xuICAgIH1cblxuICAgIC8vIFN0YXRlLi4uXG4gICAgLy8gVE9ETzogU2hvdWxkIHdlIGNoZWNrIGRpZmZzIGluIHN0YXRlP1xuICAgIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgICAgICBzZXRTdGF0ZVZhbGlkYXRlKFtzdGF0ZV0pO1xuXG4gICAgICAgIHRoaXMuX3N0YXRlID0gbWVyZ2UodGhpcy5fc3RhdGUgfHwge30sIGNsb25lRGVlcChzdGF0ZSkpO1xuICAgIH1cbiAgICBnZXQgc3RhdGUoKSB7IHJldHVybiB0aGlzLl9zdGF0ZTsgfVxuXG4gICAgLy8gRGVzdHJveVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIExldHMgZGVzdHJveSBjb21wb25lbnRzIHVuZGVybmVhdGhcbiAgICAgICAgY29uc3QgY29tcHNLZXlzID0gT2JqZWN0LmtleXModGhpcy5fY29tcHMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBzS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5fY29tcHNbY29tcHNLZXlzW2ldXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9jb21wc1tjb21wc0tleXNbaV1dID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmV4cG9ydCB7IENvbXBvbmVudCB9O1xuIl19