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

var Component = function () {
    // Constructor
    // { title: 'data', properties: {
    //     comps: { properties: {} },
    //     state: { properties: {} }
    // } }
    function Component() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Component);

        // Lets cache stuff
        this._comps = data.comps || this._comps || {};

        this.state = data.state || {};
    }

    // State...
    // TODO: Should we check diffs in state?
    // { title: 'state', properties: {} }


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
            this._state = (0, _merge2.default)(this._state || {}, (0, _cloneDeep2.default)(state));
        },
        get: function get() {
            return this._state;
        }
    }]);

    return Component;
}();

exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvY29tbW9uLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImRhdGEiLCJfY29tcHMiLCJjb21wcyIsInN0YXRlIiwiY29tcHNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJsZW5ndGgiLCJkZXN0cm95IiwiX3N0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0lBRU1BLFM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXVCO0FBQUEsWUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUNuQjtBQUNBLGFBQUtDLE1BQUwsR0FBY0QsS0FBS0UsS0FBTCxJQUFjLEtBQUtELE1BQW5CLElBQTZCLEVBQTNDOztBQUVBLGFBQUtFLEtBQUwsR0FBYUgsS0FBS0csS0FBTCxJQUFjLEVBQTNCO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBOzs7Ozs7O0FBTUE7a0NBQ1U7QUFDTjtBQUNBLGdCQUFNQyxZQUFZQyxPQUFPQyxJQUFQLENBQVksS0FBS0wsTUFBakIsQ0FBbEI7QUFDQSxpQkFBSyxJQUFJTSxJQUFJLENBQWIsRUFBZ0JBLElBQUlILFVBQVVJLE1BQTlCLEVBQXNDRCxLQUFLLENBQTNDLEVBQThDO0FBQzFDLHFCQUFLTixNQUFMLENBQVlHLFVBQVVHLENBQVYsQ0FBWixFQUEwQkUsT0FBMUI7QUFDQSxxQkFBS1IsTUFBTCxDQUFZRyxVQUFVRyxDQUFWLENBQVosSUFBNEIsSUFBNUI7QUFDSDs7QUFFRCxtQkFBTyxJQUFQO0FBQ0g7OzswQkFmU0osSyxFQUFPO0FBQ2IsaUJBQUtPLE1BQUwsR0FBYyxxQkFBTSxLQUFLQSxNQUFMLElBQWUsRUFBckIsRUFBeUIseUJBQVVQLEtBQVYsQ0FBekIsQ0FBZDtBQUNILFM7NEJBQ1c7QUFBRSxtQkFBTyxLQUFLTyxNQUFaO0FBQXFCOzs7Ozs7UUFjOUJYLFMsR0FBQUEsUyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcC5qcyc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ2xhc3NcblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICAvLyBDb25zdHJ1Y3RvclxuICAgIC8vIHsgdGl0bGU6ICdkYXRhJywgcHJvcGVydGllczoge1xuICAgIC8vICAgICBjb21wczogeyBwcm9wZXJ0aWVzOiB7fSB9LFxuICAgIC8vICAgICBzdGF0ZTogeyBwcm9wZXJ0aWVzOiB7fSB9XG4gICAgLy8gfSB9XG4gICAgY29uc3RydWN0b3IoZGF0YSA9IHt9KSB7XG4gICAgICAgIC8vIExldHMgY2FjaGUgc3R1ZmZcbiAgICAgICAgdGhpcy5fY29tcHMgPSBkYXRhLmNvbXBzIHx8IHRoaXMuX2NvbXBzIHx8IHt9O1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBkYXRhLnN0YXRlIHx8IHt9O1xuICAgIH1cblxuICAgIC8vIFN0YXRlLi4uXG4gICAgLy8gVE9ETzogU2hvdWxkIHdlIGNoZWNrIGRpZmZzIGluIHN0YXRlP1xuICAgIC8vIHsgdGl0bGU6ICdzdGF0ZScsIHByb3BlcnRpZXM6IHt9IH1cbiAgICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBtZXJnZSh0aGlzLl9zdGF0ZSB8fCB7fSwgY2xvbmVEZWVwKHN0YXRlKSk7XG4gICAgfVxuICAgIGdldCBzdGF0ZSgpIHsgcmV0dXJuIHRoaXMuX3N0YXRlOyB9XG5cbiAgICAvLyBEZXN0cm95XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gTGV0cyBkZXN0cm95IGNvbXBvbmVudHMgdW5kZXJuZWF0aFxuICAgICAgICBjb25zdCBjb21wc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9jb21wcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHNLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wc1tjb21wc0tleXNbaV1dLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBzW2NvbXBzS2V5c1tpXV0gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0IHsgQ29tcG9uZW50IH07XG4iXX0=