
/* :: import type {CompData, FnGetNativeEl, FnGetNativeEls} from './_test/jquery.flow.js' */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = undefined;

var _vanilla = require('./vanilla.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// -----------------------------------------
// Functions

/**
 * Gets native el
 *
 * @param {element} $el
 * @returns {arr|undefined}
 */
var getNativeEl /* :: :FnGetNativeEl */ = function getNativeEl($el) {
    var nativeEl /* :: :HTMLElement[] */ = [];

    // Lets get the basic native el elements
    if ($el !== undefined && $el !== null) {
        for (var i = 0; i < $el.length; i += 1) {
            nativeEl.push($el[i]);
        }
    }

    if (nativeEl.length) {
        return nativeEl;
    }

    return undefined;
};

/**
 * Gets native el from object
 *
 * @param {object} $els
 * @returns {object}
 */
var getNativeEls /* :: :FnGetNativeEls */ = function getNativeEls($els) {
    var nativeEls /* :: :{ [key: string]: ?HTMLElement[] } */ = {};
    var keys = Object.keys($els);

    // Lets get the basic native els elements
    for (var c = 0; c < keys.length; c += 1) {
        nativeEls[keys[c]] = getNativeEl($els[keys[c]]);
    }

    return nativeEls;
};

// --------------------------------
// Class

var Component = function (_Comp) {
    _inherits(Component, _Comp);

    // Vars
    /* ::
    _$el:?jQueryElement;
    _$els:{ [key: string]: ?jQueryElement };
    */

    // Constructor
    function Component($el /* :: :?jQueryElement */) {
        var data /* :: :CompData */ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Component);

        var $els = data.els || {};
        var nativeEls = getNativeEls($els);
        var nativeEl = getNativeEl($el);

        // Lets cache the base element
        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, nativeEl, {
            els: nativeEls,
            tmpl: data.tmpl,
            noRender: data.noRender,
            comps: data.comps,
            state: data.state
        }));

        _this._$el = $el;
        _this._$els = $els;
        return _this;
    }

    return Component;
}(_vanilla.Component);

exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvanF1ZXJ5LmpzIl0sIm5hbWVzIjpbImdldE5hdGl2ZUVsIiwiJGVsIiwibmF0aXZlRWwiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwicHVzaCIsImdldE5hdGl2ZUVscyIsIiRlbHMiLCJuYXRpdmVFbHMiLCJrZXlzIiwiT2JqZWN0IiwiYyIsIkNvbXBvbmVudCIsImRhdGEiLCJlbHMiLCJ0bXBsIiwibm9SZW5kZXIiLCJjb21wcyIsInN0YXRlIiwiXyRlbCIsIl8kZWxzIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUVBOzs7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BLElBQU1BLFlBQVcsdUJBQVgsR0FBcUMsU0FBckNBLFdBQXFDLENBQUNDLEdBQUQsRUFBUztBQUNoRCxRQUFNQyxTQUFRLHVCQUFSLEdBQWtDLEVBQXhDOztBQUVBO0FBQ0EsUUFBSUQsUUFBUUUsU0FBUixJQUFxQkYsUUFBUSxJQUFqQyxFQUF1QztBQUNuQyxhQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsSUFBSUksTUFBeEIsRUFBZ0NELEtBQUssQ0FBckMsRUFBd0M7QUFDcENGLHFCQUFTSSxJQUFULENBQWNMLElBQUlHLENBQUosQ0FBZDtBQUNIO0FBQ0o7O0FBRUQsUUFBSUYsU0FBU0csTUFBYixFQUFxQjtBQUNqQixlQUFPSCxRQUFQO0FBQ0g7O0FBRUQsV0FBT0MsU0FBUDtBQUNILENBZkQ7O0FBaUJBOzs7Ozs7QUFNQSxJQUFNSSxhQUFZLHdCQUFaLEdBQXVDLFNBQXZDQSxZQUF1QyxDQUFDQyxJQUFELEVBQVU7QUFDbkQsUUFBTUMsVUFBUywyQ0FBVCxHQUF1RCxFQUE3RDtBQUNBLFFBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUYsSUFBWixDQUFiOztBQUVBO0FBQ0EsU0FBSyxJQUFJSSxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLEtBQUtMLE1BQXpCLEVBQWlDTyxLQUFLLENBQXRDLEVBQXlDO0FBQ3JDSCxrQkFBVUMsS0FBS0UsQ0FBTCxDQUFWLElBQXFCWixZQUFZUSxLQUFLRSxLQUFLRSxDQUFMLENBQUwsQ0FBWixDQUFyQjtBQUNIOztBQUVELFdBQU9ILFNBQVA7QUFDSCxDQVZEOztBQVlBO0FBQ0E7O0lBRU1JLFM7OztBQUNGO0FBQ0E7Ozs7O0FBS0E7QUFDQSx1QkFBWVosR0FBWixDQUFlLHdCQUFmLEVBQXNFO0FBQUEsWUFBN0JhLElBQTZCLENBQXpCLGtCQUF5Qix1RUFBSixFQUFJOztBQUFBOztBQUNsRSxZQUFNTixPQUFPTSxLQUFLQyxHQUFMLElBQVksRUFBekI7QUFDQSxZQUFNTixZQUFZRixhQUFhQyxJQUFiLENBQWxCO0FBQ0EsWUFBTU4sV0FBV0YsWUFBWUMsR0FBWixDQUFqQjs7QUFVQTtBQWJrRSwwSEFLNURDLFFBTDRELEVBS2xEO0FBQ1phLGlCQUFLTixTQURPO0FBRVpPLGtCQUFNRixLQUFLRSxJQUZDO0FBR1pDLHNCQUFVSCxLQUFLRyxRQUhIO0FBSVpDLG1CQUFPSixLQUFLSSxLQUpBO0FBS1pDLG1CQUFPTCxLQUFLSztBQUxBLFNBTGtEOztBQWNsRSxjQUFLQyxJQUFMLEdBQVluQixHQUFaO0FBQ0EsY0FBS29CLEtBQUwsR0FBYWIsSUFBYjtBQWZrRTtBQWdCckU7Ozs7O1FBRUlLLFMsR0FBQUEsUyIsImZpbGUiOiJqcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuLyogOjogaW1wb3J0IHR5cGUge0NvbXBEYXRhLCBGbkdldE5hdGl2ZUVsLCBGbkdldE5hdGl2ZUVsc30gZnJvbSAnLi9fdGVzdC9qcXVlcnkuZmxvdy5qcycgKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgQ29tcG9uZW50IGFzIENvbXAgfSBmcm9tICcuL3ZhbmlsbGEuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogR2V0cyBuYXRpdmUgZWxcbiAqXG4gKiBAcGFyYW0ge2VsZW1lbnR9ICRlbFxuICogQHJldHVybnMge2Fycnx1bmRlZmluZWR9XG4gKi9cbmNvbnN0IGdldE5hdGl2ZUVsLyogOjogOkZuR2V0TmF0aXZlRWwgKi8gPSAoJGVsKSA9PiB7XG4gICAgY29uc3QgbmF0aXZlRWwvKiA6OiA6SFRNTEVsZW1lbnRbXSAqLyA9IFtdO1xuXG4gICAgLy8gTGV0cyBnZXQgdGhlIGJhc2ljIG5hdGl2ZSBlbCBlbGVtZW50c1xuICAgIGlmICgkZWwgIT09IHVuZGVmaW5lZCAmJiAkZWwgIT09IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkZWwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG5hdGl2ZUVsLnB1c2goJGVsW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVFbC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZUVsO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIEdldHMgbmF0aXZlIGVsIGZyb20gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9ICRlbHNcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmNvbnN0IGdldE5hdGl2ZUVscy8qIDo6IDpGbkdldE5hdGl2ZUVscyAqLyA9ICgkZWxzKSA9PiB7XG4gICAgY29uc3QgbmF0aXZlRWxzLyogOjogOnsgW2tleTogc3RyaW5nXTogP0hUTUxFbGVtZW50W10gfSAqLyA9IHt9O1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cygkZWxzKTtcblxuICAgIC8vIExldHMgZ2V0IHRoZSBiYXNpYyBuYXRpdmUgZWxzIGVsZW1lbnRzXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBrZXlzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgICAgIG5hdGl2ZUVsc1trZXlzW2NdXSA9IGdldE5hdGl2ZUVsKCRlbHNba2V5c1tjXV0pO1xuICAgIH1cblxuICAgIHJldHVybiBuYXRpdmVFbHM7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ2xhc3NcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQ29tcCB7XG4gICAgLy8gVmFyc1xuICAgIC8qIDo6XG4gICAgXyRlbDo/alF1ZXJ5RWxlbWVudDtcbiAgICBfJGVsczp7IFtrZXk6IHN0cmluZ106ID9qUXVlcnlFbGVtZW50IH07XG4gICAgKi9cblxuICAgIC8vIENvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3IoJGVsLyogOjogOj9qUXVlcnlFbGVtZW50ICovLCBkYXRhLyogOjogOkNvbXBEYXRhICovID0ge30pIHtcbiAgICAgICAgY29uc3QgJGVscyA9IGRhdGEuZWxzIHx8IHt9O1xuICAgICAgICBjb25zdCBuYXRpdmVFbHMgPSBnZXROYXRpdmVFbHMoJGVscyk7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVsID0gZ2V0TmF0aXZlRWwoJGVsKTtcblxuICAgICAgICBzdXBlcihuYXRpdmVFbCwge1xuICAgICAgICAgICAgZWxzOiBuYXRpdmVFbHMsXG4gICAgICAgICAgICB0bXBsOiBkYXRhLnRtcGwsXG4gICAgICAgICAgICBub1JlbmRlcjogZGF0YS5ub1JlbmRlcixcbiAgICAgICAgICAgIGNvbXBzOiBkYXRhLmNvbXBzLFxuICAgICAgICAgICAgc3RhdGU6IGRhdGEuc3RhdGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTGV0cyBjYWNoZSB0aGUgYmFzZSBlbGVtZW50XG4gICAgICAgIHRoaXMuXyRlbCA9ICRlbDtcbiAgICAgICAgdGhpcy5fJGVscyA9ICRlbHM7XG4gICAgfVxufVxuZXhwb3J0IHsgQ29tcG9uZW50IH07XG4iXX0=