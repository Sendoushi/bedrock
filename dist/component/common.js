
/* :: import type {S, CompData} from './_test/common.flow.js' */
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
    // Vars
    /* ::
    _comps:{ [key: string]: any };
    _state:S;
    */

    // Constructor
    function Component() {
        var data /* :: :CompData */ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Component);

        // Lets cache stuff
        this._comps = data.comps || this._comps || {};
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
            }

            return this;
        }
    }, {
        key: 'state',
        set: function set(state /* :: :S */) {
            this._state = (0, _merge2.default)(this._state || {}, (0, _cloneDeep2.default)(state));
        },
        get: function get() /* :: :S */{
            return this._state || {};
        }
    }]);

    return Component;
}();

exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvY29tbW9uLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImRhdGEiLCJfY29tcHMiLCJjb21wcyIsImNvbXBzS2V5cyIsIk9iamVjdCIsImtleXMiLCJpIiwibGVuZ3RoIiwiZGVzdHJveSIsInN0YXRlIiwiX3N0YXRlIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0lBRU1BLFM7QUFDRjtBQUNBOzs7OztBQUtBO0FBQ0EseUJBQXlDO0FBQUEsWUFBN0JDLElBQTZCLENBQXpCLGtCQUF5Qix1RUFBSixFQUFJOztBQUFBOztBQUNyQztBQUNBLGFBQUtDLE1BQUwsR0FBY0QsS0FBS0UsS0FBTCxJQUFjLEtBQUtELE1BQW5CLElBQTZCLEVBQTNDO0FBQ0g7O0FBRUQ7QUFDQTs7Ozs7OztBQUlBO2tDQUNVO0FBQ047QUFDQSxnQkFBTUUsWUFBWUMsT0FBT0MsSUFBUCxDQUFZLEtBQUtKLE1BQWpCLENBQWxCO0FBQ0EsaUJBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxVQUFVSSxNQUE5QixFQUFzQ0QsS0FBSyxDQUEzQyxFQUE4QztBQUMxQyxxQkFBS0wsTUFBTCxDQUFZRSxVQUFVRyxDQUFWLENBQVosRUFBMEJFLE9BQTFCO0FBQ0g7O0FBRUQsbUJBQU8sSUFBUDtBQUNIOzs7MEJBWlNDLEssQ0FBSyxXLEVBQWE7QUFBRSxpQkFBS0MsTUFBTCxHQUFjLHFCQUFNLEtBQUtBLE1BQUwsSUFBZSxFQUFyQixFQUF5Qix5QkFBVUQsS0FBVixDQUF6QixDQUFkO0FBQTJELFM7NEJBQzlFLFdBQVk7QUFBRSxtQkFBTyxLQUFLQyxNQUFMLElBQWUsRUFBdEI7QUFBMkI7Ozs7OztRQWEvQ1gsUyxHQUFBQSxTIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG4vKiA6OiBpbXBvcnQgdHlwZSB7UywgQ29tcERhdGF9IGZyb20gJy4vX3Rlc3QvY29tbW9uLmZsb3cuanMnICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcC5qcyc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ2xhc3NcblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICAvLyBWYXJzXG4gICAgLyogOjpcbiAgICBfY29tcHM6eyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBfc3RhdGU6UztcbiAgICAqL1xuXG4gICAgLy8gQ29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihkYXRhLyogOjogOkNvbXBEYXRhICovID0ge30pIHtcbiAgICAgICAgLy8gTGV0cyBjYWNoZSBzdHVmZlxuICAgICAgICB0aGlzLl9jb21wcyA9IGRhdGEuY29tcHMgfHwgdGhpcy5fY29tcHMgfHwge307XG4gICAgfVxuXG4gICAgLy8gU3RhdGUuLi5cbiAgICAvLyBUT0RPOiBTaG91bGQgd2UgY2hlY2sgZGlmZnMgaW4gc3RhdGU/XG4gICAgc2V0IHN0YXRlKHN0YXRlLyogOjogOlMgKi8pIHsgdGhpcy5fc3RhdGUgPSBtZXJnZSh0aGlzLl9zdGF0ZSB8fCB7fSwgY2xvbmVEZWVwKHN0YXRlKSk7IH1cbiAgICBnZXQgc3RhdGUoKS8qIDo6IDpTICovIHsgcmV0dXJuIHRoaXMuX3N0YXRlIHx8IHt9OyB9XG5cbiAgICAvLyBEZXN0cm95XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gTGV0cyBkZXN0cm95IGNvbXBvbmVudHMgdW5kZXJuZWF0aFxuICAgICAgICBjb25zdCBjb21wc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9jb21wcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHNLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wc1tjb21wc0tleXNbaV1dLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmV4cG9ydCB7IENvbXBvbmVudCB9O1xuIl19