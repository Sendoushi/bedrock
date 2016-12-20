
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
    var nativeEl /* :: :Element[] */ = [];

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
    var nativeEls /* :: :{ [key: string]: ?Element[] } */ = {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvanF1ZXJ5LmpzIl0sIm5hbWVzIjpbImdldE5hdGl2ZUVsIiwiJGVsIiwibmF0aXZlRWwiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwicHVzaCIsImdldE5hdGl2ZUVscyIsIiRlbHMiLCJuYXRpdmVFbHMiLCJrZXlzIiwiT2JqZWN0IiwiYyIsIkNvbXBvbmVudCIsImRhdGEiLCJlbHMiLCJ0bXBsIiwibm9SZW5kZXIiLCJjb21wcyIsInN0YXRlIiwiXyRlbCIsIl8kZWxzIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUVBOzs7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BLElBQU1BLFlBQVcsdUJBQVgsR0FBcUMsU0FBckNBLFdBQXFDLENBQUNDLEdBQUQsRUFBUztBQUNoRCxRQUFNQyxTQUFRLG1CQUFSLEdBQThCLEVBQXBDOztBQUVBO0FBQ0EsUUFBSUQsUUFBUUUsU0FBUixJQUFxQkYsUUFBUSxJQUFqQyxFQUF1QztBQUNuQyxhQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsSUFBSUksTUFBeEIsRUFBZ0NELEtBQUssQ0FBckMsRUFBd0M7QUFDcENGLHFCQUFTSSxJQUFULENBQWNMLElBQUlHLENBQUosQ0FBZDtBQUNIO0FBQ0o7O0FBRUQsUUFBSUYsU0FBU0csTUFBYixFQUFxQjtBQUNqQixlQUFPSCxRQUFQO0FBQ0g7O0FBRUQsV0FBT0MsU0FBUDtBQUNILENBZkQ7O0FBaUJBOzs7Ozs7QUFNQSxJQUFNSSxhQUFZLHdCQUFaLEdBQXVDLFNBQXZDQSxZQUF1QyxDQUFDQyxJQUFELEVBQVU7QUFDbkQsUUFBTUMsVUFBUyx1Q0FBVCxHQUFtRCxFQUF6RDtBQUNBLFFBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUYsSUFBWixDQUFiOztBQUVBO0FBQ0EsU0FBSyxJQUFJSSxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLEtBQUtMLE1BQXpCLEVBQWlDTyxLQUFLLENBQXRDLEVBQXlDO0FBQ3JDSCxrQkFBVUMsS0FBS0UsQ0FBTCxDQUFWLElBQXFCWixZQUFZUSxLQUFLRSxLQUFLRSxDQUFMLENBQUwsQ0FBWixDQUFyQjtBQUNIOztBQUVELFdBQU9ILFNBQVA7QUFDSCxDQVZEOztBQVlBO0FBQ0E7O0lBRU1JLFM7OztBQUNGO0FBQ0E7Ozs7O0FBS0E7QUFDQSx1QkFBWVosR0FBWixDQUFlLHdCQUFmLEVBQXNFO0FBQUEsWUFBN0JhLElBQTZCLENBQXpCLGtCQUF5Qix1RUFBSixFQUFJOztBQUFBOztBQUNsRSxZQUFNTixPQUFPTSxLQUFLQyxHQUFMLElBQVksRUFBekI7QUFDQSxZQUFNTixZQUFZRixhQUFhQyxJQUFiLENBQWxCO0FBQ0EsWUFBTU4sV0FBV0YsWUFBWUMsR0FBWixDQUFqQjs7QUFVQTtBQWJrRSwwSEFLNURDLFFBTDRELEVBS2xEO0FBQ1phLGlCQUFLTixTQURPO0FBRVpPLGtCQUFNRixLQUFLRSxJQUZDO0FBR1pDLHNCQUFVSCxLQUFLRyxRQUhIO0FBSVpDLG1CQUFPSixLQUFLSSxLQUpBO0FBS1pDLG1CQUFPTCxLQUFLSztBQUxBLFNBTGtEOztBQWNsRSxjQUFLQyxJQUFMLEdBQVluQixHQUFaO0FBQ0EsY0FBS29CLEtBQUwsR0FBYWIsSUFBYjtBQWZrRTtBQWdCckU7Ozs7O1FBRUlLLFMsR0FBQUEsUyIsImZpbGUiOiJqcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuLyogOjogaW1wb3J0IHR5cGUge0NvbXBEYXRhLCBGbkdldE5hdGl2ZUVsLCBGbkdldE5hdGl2ZUVsc30gZnJvbSAnLi9fdGVzdC9qcXVlcnkuZmxvdy5qcycgKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgQ29tcG9uZW50IGFzIENvbXAgfSBmcm9tICcuL3ZhbmlsbGEuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogR2V0cyBuYXRpdmUgZWxcbiAqXG4gKiBAcGFyYW0ge2VsZW1lbnR9ICRlbFxuICogQHJldHVybnMge2Fycnx1bmRlZmluZWR9XG4gKi9cbmNvbnN0IGdldE5hdGl2ZUVsLyogOjogOkZuR2V0TmF0aXZlRWwgKi8gPSAoJGVsKSA9PiB7XG4gICAgY29uc3QgbmF0aXZlRWwvKiA6OiA6RWxlbWVudFtdICovID0gW107XG5cbiAgICAvLyBMZXRzIGdldCB0aGUgYmFzaWMgbmF0aXZlIGVsIGVsZW1lbnRzXG4gICAgaWYgKCRlbCAhPT0gdW5kZWZpbmVkICYmICRlbCAhPT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRlbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgbmF0aXZlRWwucHVzaCgkZWxbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5hdGl2ZUVsLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbmF0aXZlRWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogR2V0cyBuYXRpdmUgZWwgZnJvbSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gJGVsc1xuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuY29uc3QgZ2V0TmF0aXZlRWxzLyogOjogOkZuR2V0TmF0aXZlRWxzICovID0gKCRlbHMpID0+IHtcbiAgICBjb25zdCBuYXRpdmVFbHMvKiA6OiA6eyBba2V5OiBzdHJpbmddOiA/RWxlbWVudFtdIH0gKi8gPSB7fTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoJGVscyk7XG5cbiAgICAvLyBMZXRzIGdldCB0aGUgYmFzaWMgbmF0aXZlIGVscyBlbGVtZW50c1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwga2V5cy5sZW5ndGg7IGMgKz0gMSkge1xuICAgICAgICBuYXRpdmVFbHNba2V5c1tjXV0gPSBnZXROYXRpdmVFbCgkZWxzW2tleXNbY11dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF0aXZlRWxzO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENsYXNzXG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIENvbXAge1xuICAgIC8vIFZhcnNcbiAgICAvKiA6OlxuICAgIF8kZWw6P2pRdWVyeUVsZW1lbnQ7XG4gICAgXyRlbHM6eyBba2V5OiBzdHJpbmddOiA/alF1ZXJ5RWxlbWVudCB9O1xuICAgICovXG5cbiAgICAvLyBDb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKCRlbC8qIDo6IDo/alF1ZXJ5RWxlbWVudCAqLywgZGF0YS8qIDo6IDpDb21wRGF0YSAqLyA9IHt9KSB7XG4gICAgICAgIGNvbnN0ICRlbHMgPSBkYXRhLmVscyB8fCB7fTtcbiAgICAgICAgY29uc3QgbmF0aXZlRWxzID0gZ2V0TmF0aXZlRWxzKCRlbHMpO1xuICAgICAgICBjb25zdCBuYXRpdmVFbCA9IGdldE5hdGl2ZUVsKCRlbCk7XG5cbiAgICAgICAgc3VwZXIobmF0aXZlRWwsIHtcbiAgICAgICAgICAgIGVsczogbmF0aXZlRWxzLFxuICAgICAgICAgICAgdG1wbDogZGF0YS50bXBsLFxuICAgICAgICAgICAgbm9SZW5kZXI6IGRhdGEubm9SZW5kZXIsXG4gICAgICAgICAgICBjb21wczogZGF0YS5jb21wcyxcbiAgICAgICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIExldHMgY2FjaGUgdGhlIGJhc2UgZWxlbWVudFxuICAgICAgICB0aGlzLl8kZWwgPSAkZWw7XG4gICAgICAgIHRoaXMuXyRlbHMgPSAkZWxzO1xuICAgIH1cbn1cbmV4cG9ydCB7IENvbXBvbmVudCB9O1xuIl19