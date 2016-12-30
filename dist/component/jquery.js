'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = undefined;

var _vanilla = require('./vanilla.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {} }

// -----------------------------------------
// Functions

/**
 * Gets native el
 *
 * @param {element} $el
 * @returns {arr|undefined}
 */
// { title: '$el', type: 'jQueryElement' }
var getNativeEl = function getNativeEl($el) {
    var nativeEl = [];

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
// { title: '$els', type: 'array', items: 'jQueryElement' }
var getNativeEls = function getNativeEls($els) {
    var nativeEls = {};
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

    // Constructor
    // { title: '$el' },
    // { title: 'data', properties: {} }
    function Component($el) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Component);

        var $els = data.els || {};
        var nativeEls = getNativeEls($els);
        var nativeEl = getNativeEl($el);

        // Lets cache the base element
        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, nativeEl, {
            els: nativeEls,
            tmpl: data.tmpl,
            render: data.render,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvanF1ZXJ5LmpzIl0sIm5hbWVzIjpbImdldE5hdGl2ZUVsIiwiJGVsIiwibmF0aXZlRWwiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwicHVzaCIsImdldE5hdGl2ZUVscyIsIiRlbHMiLCJuYXRpdmVFbHMiLCJrZXlzIiwiT2JqZWN0IiwiYyIsIkNvbXBvbmVudCIsImRhdGEiLCJlbHMiLCJ0bXBsIiwicmVuZGVyIiwiY29tcHMiLCJzdGF0ZSIsIl8kZWwiLCJfJGVscyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDekIsUUFBTUMsV0FBVyxFQUFqQjs7QUFFQTtBQUNBLFFBQUlELFFBQVFFLFNBQVIsSUFBcUJGLFFBQVEsSUFBakMsRUFBdUM7QUFDbkMsYUFBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILElBQUlJLE1BQXhCLEVBQWdDRCxLQUFLLENBQXJDLEVBQXdDO0FBQ3BDRixxQkFBU0ksSUFBVCxDQUFjTCxJQUFJRyxDQUFKLENBQWQ7QUFDSDtBQUNKOztBQUVELFFBQUlGLFNBQVNHLE1BQWIsRUFBcUI7QUFDakIsZUFBT0gsUUFBUDtBQUNIOztBQUVELFdBQU9DLFNBQVA7QUFDSCxDQWZEOztBQWlCQTs7Ozs7O0FBTUE7QUFDQSxJQUFNSSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLFFBQU1DLFlBQVksRUFBbEI7QUFDQSxRQUFNQyxPQUFPQyxPQUFPRCxJQUFQLENBQVlGLElBQVosQ0FBYjs7QUFFQTtBQUNBLFNBQUssSUFBSUksSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixLQUFLTCxNQUF6QixFQUFpQ08sS0FBSyxDQUF0QyxFQUF5QztBQUNyQ0gsa0JBQVVDLEtBQUtFLENBQUwsQ0FBVixJQUFxQlosWUFBWVEsS0FBS0UsS0FBS0UsQ0FBTCxDQUFMLENBQVosQ0FBckI7QUFDSDs7QUFFRCxXQUFPSCxTQUFQO0FBQ0gsQ0FWRDs7QUFZQTtBQUNBOztJQUVNSSxTOzs7QUFDRjtBQUNBO0FBQ0E7QUFDQSx1QkFBWVosR0FBWixFQUE0QjtBQUFBLFlBQVhhLElBQVcsdUVBQUosRUFBSTs7QUFBQTs7QUFDeEIsWUFBTU4sT0FBT00sS0FBS0MsR0FBTCxJQUFZLEVBQXpCO0FBQ0EsWUFBTU4sWUFBWUYsYUFBYUMsSUFBYixDQUFsQjtBQUNBLFlBQU1OLFdBQVdGLFlBQVlDLEdBQVosQ0FBakI7O0FBVUE7QUFid0IsaUdBS2xCQyxRQUxrQixFQUtSO0FBQ1phLGlCQUFLTixTQURPO0FBRVpPLGtCQUFNRixLQUFLRSxJQUZDO0FBR1pDLG9CQUFRSCxLQUFLRyxNQUhEO0FBSVpDLG1CQUFPSixLQUFLSSxLQUpBO0FBS1pDLG1CQUFPTCxLQUFLSztBQUxBLFNBTFE7O0FBY3hCLGNBQUtDLElBQUwsR0FBWW5CLEdBQVo7QUFDQSxjQUFLb0IsS0FBTCxHQUFhYixJQUFiO0FBZndCO0FBZ0IzQjs7Ozs7UUFFSUssUyxHQUFBQSxTIiwiZmlsZSI6ImpxdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgQ29tcG9uZW50IGFzIENvbXAgfSBmcm9tICcuL3ZhbmlsbGEuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogR2V0cyBuYXRpdmUgZWxcbiAqXG4gKiBAcGFyYW0ge2VsZW1lbnR9ICRlbFxuICogQHJldHVybnMge2Fycnx1bmRlZmluZWR9XG4gKi9cbi8vIHsgdGl0bGU6ICckZWwnLCB0eXBlOiAnalF1ZXJ5RWxlbWVudCcgfVxuY29uc3QgZ2V0TmF0aXZlRWwgPSAoJGVsKSA9PiB7XG4gICAgY29uc3QgbmF0aXZlRWwgPSBbXTtcblxuICAgIC8vIExldHMgZ2V0IHRoZSBiYXNpYyBuYXRpdmUgZWwgZWxlbWVudHNcbiAgICBpZiAoJGVsICE9PSB1bmRlZmluZWQgJiYgJGVsICE9PSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJGVsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBuYXRpdmVFbC5wdXNoKCRlbFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRWwubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVFbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuLyoqXG4gKiBHZXRzIG5hdGl2ZSBlbCBmcm9tIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSAkZWxzXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG4vLyB7IHRpdGxlOiAnJGVscycsIHR5cGU6ICdhcnJheScsIGl0ZW1zOiAnalF1ZXJ5RWxlbWVudCcgfVxuY29uc3QgZ2V0TmF0aXZlRWxzID0gKCRlbHMpID0+IHtcbiAgICBjb25zdCBuYXRpdmVFbHMgPSB7fTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoJGVscyk7XG5cbiAgICAvLyBMZXRzIGdldCB0aGUgYmFzaWMgbmF0aXZlIGVscyBlbGVtZW50c1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwga2V5cy5sZW5ndGg7IGMgKz0gMSkge1xuICAgICAgICBuYXRpdmVFbHNba2V5c1tjXV0gPSBnZXROYXRpdmVFbCgkZWxzW2tleXNbY11dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF0aXZlRWxzO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENsYXNzXG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIENvbXAge1xuICAgIC8vIENvbnN0cnVjdG9yXG4gICAgLy8geyB0aXRsZTogJyRlbCcgfSxcbiAgICAvLyB7IHRpdGxlOiAnZGF0YScsIHByb3BlcnRpZXM6IHt9IH1cbiAgICBjb25zdHJ1Y3RvcigkZWwsIGRhdGEgPSB7fSkge1xuICAgICAgICBjb25zdCAkZWxzID0gZGF0YS5lbHMgfHwge307XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVscyA9IGdldE5hdGl2ZUVscygkZWxzKTtcbiAgICAgICAgY29uc3QgbmF0aXZlRWwgPSBnZXROYXRpdmVFbCgkZWwpO1xuXG4gICAgICAgIHN1cGVyKG5hdGl2ZUVsLCB7XG4gICAgICAgICAgICBlbHM6IG5hdGl2ZUVscyxcbiAgICAgICAgICAgIHRtcGw6IGRhdGEudG1wbCxcbiAgICAgICAgICAgIHJlbmRlcjogZGF0YS5yZW5kZXIsXG4gICAgICAgICAgICBjb21wczogZGF0YS5jb21wcyxcbiAgICAgICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIExldHMgY2FjaGUgdGhlIGJhc2UgZWxlbWVudFxuICAgICAgICB0aGlzLl8kZWwgPSAkZWw7XG4gICAgICAgIHRoaXMuXyRlbHMgPSAkZWxzO1xuICAgIH1cbn1cbmV4cG9ydCB7IENvbXBvbmVudCB9O1xuIl19