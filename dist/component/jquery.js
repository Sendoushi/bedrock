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
// const getNativeElValidate = compileSchema(getSchema([
//     { title: '$el' }
// ]));
var getNativeEl = function getNativeEl($el) {
    // getNativeElValidate([$el]);

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
// const getNativeElsValidate = compileSchema(getSchema([
//     { title: '$els' }
// ]));
var getNativeEls = function getNativeEls($els) {
    // getNativeElsValidate([$els]);

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

var constructorValidate = void 0;

var Component = function (_Comp) {
    _inherits(Component, _Comp);

    // Constructor
    function Component($el) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Component);

        constructorValidate([data]);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvanF1ZXJ5LmpzIl0sIm5hbWVzIjpbImdldE5hdGl2ZUVsIiwiJGVsIiwibmF0aXZlRWwiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwicHVzaCIsImdldE5hdGl2ZUVscyIsIiRlbHMiLCJuYXRpdmVFbHMiLCJrZXlzIiwiT2JqZWN0IiwiYyIsImNvbnN0cnVjdG9yVmFsaWRhdGUiLCJDb21wb25lbnQiLCJkYXRhIiwiZWxzIiwidG1wbCIsInJlbmRlciIsImNvbXBzIiwic3RhdGUiLCJfJGVsIiwiXyRlbHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBR0E7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBUztBQUN6Qjs7QUFFQSxRQUFNQyxXQUFXLEVBQWpCOztBQUVBO0FBQ0EsUUFBSUQsUUFBUUUsU0FBUixJQUFxQkYsUUFBUSxJQUFqQyxFQUF1QztBQUNuQyxhQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsSUFBSUksTUFBeEIsRUFBZ0NELEtBQUssQ0FBckMsRUFBd0M7QUFDcENGLHFCQUFTSSxJQUFULENBQWNMLElBQUlHLENBQUosQ0FBZDtBQUNIO0FBQ0o7O0FBRUQsUUFBSUYsU0FBU0csTUFBYixFQUFxQjtBQUNqQixlQUFPSCxRQUFQO0FBQ0g7O0FBRUQsV0FBT0MsU0FBUDtBQUNILENBakJEOztBQW1CQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUksZUFBZSxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBVTtBQUMzQjs7QUFFQSxRQUFNQyxZQUFZLEVBQWxCO0FBQ0EsUUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRixJQUFaLENBQWI7O0FBRUE7QUFDQSxTQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS0wsTUFBekIsRUFBaUNPLEtBQUssQ0FBdEMsRUFBeUM7QUFDckNILGtCQUFVQyxLQUFLRSxDQUFMLENBQVYsSUFBcUJaLFlBQVlRLEtBQUtFLEtBQUtFLENBQUwsQ0FBTCxDQUFaLENBQXJCO0FBQ0g7O0FBRUQsV0FBT0gsU0FBUDtBQUNILENBWkQ7O0FBY0E7QUFDQTs7QUFFQSxJQUFNSSw0QkFBTjs7SUFLTUMsUzs7O0FBQ0Y7QUFDQSx1QkFBWWIsR0FBWixFQUE0QjtBQUFBLFlBQVhjLElBQVcsdUVBQUosRUFBSTs7QUFBQTs7QUFDeEJGLDRCQUFvQixDQUFDRSxJQUFELENBQXBCOztBQUVBLFlBQU1QLE9BQU9PLEtBQUtDLEdBQUwsSUFBWSxFQUF6QjtBQUNBLFlBQU1QLFlBQVlGLGFBQWFDLElBQWIsQ0FBbEI7QUFDQSxZQUFNTixXQUFXRixZQUFZQyxHQUFaLENBQWpCOztBQVVBO0FBZndCLGlHQU9sQkMsUUFQa0IsRUFPUjtBQUNaYyxpQkFBS1AsU0FETztBQUVaUSxrQkFBTUYsS0FBS0UsSUFGQztBQUdaQyxvQkFBUUgsS0FBS0csTUFIRDtBQUlaQyxtQkFBT0osS0FBS0ksS0FKQTtBQUtaQyxtQkFBT0wsS0FBS0s7QUFMQSxTQVBROztBQWdCeEIsY0FBS0MsSUFBTCxHQUFZcEIsR0FBWjtBQUNBLGNBQUtxQixLQUFMLEdBQWFkLElBQWI7QUFqQndCO0FBa0IzQjs7Ozs7UUFFSU0sUyxHQUFBQSxTIiwiZmlsZSI6ImpxdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgY29tcGlsZVNjaGVtYSwgZ2V0U2NoZW1hIH0gZnJvbSAnYmVkcm9jay11dGlscy9zcmMvdmFsaWRhdGUuanMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IGFzIENvbXAgfSBmcm9tICcuL3ZhbmlsbGEuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogR2V0cyBuYXRpdmUgZWxcbiAqXG4gKiBAcGFyYW0ge2VsZW1lbnR9ICRlbFxuICogQHJldHVybnMge2Fycnx1bmRlZmluZWR9XG4gKi9cbi8vIGNvbnN0IGdldE5hdGl2ZUVsVmFsaWRhdGUgPSBjb21waWxlU2NoZW1hKGdldFNjaGVtYShbXG4vLyAgICAgeyB0aXRsZTogJyRlbCcgfVxuLy8gXSkpO1xuY29uc3QgZ2V0TmF0aXZlRWwgPSAoJGVsKSA9PiB7XG4gICAgLy8gZ2V0TmF0aXZlRWxWYWxpZGF0ZShbJGVsXSk7XG5cbiAgICBjb25zdCBuYXRpdmVFbCA9IFtdO1xuXG4gICAgLy8gTGV0cyBnZXQgdGhlIGJhc2ljIG5hdGl2ZSBlbCBlbGVtZW50c1xuICAgIGlmICgkZWwgIT09IHVuZGVmaW5lZCAmJiAkZWwgIT09IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkZWwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG5hdGl2ZUVsLnB1c2goJGVsW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVFbC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZUVsO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIEdldHMgbmF0aXZlIGVsIGZyb20gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9ICRlbHNcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbi8vIGNvbnN0IGdldE5hdGl2ZUVsc1ZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuLy8gICAgIHsgdGl0bGU6ICckZWxzJyB9XG4vLyBdKSk7XG5jb25zdCBnZXROYXRpdmVFbHMgPSAoJGVscykgPT4ge1xuICAgIC8vIGdldE5hdGl2ZUVsc1ZhbGlkYXRlKFskZWxzXSk7XG5cbiAgICBjb25zdCBuYXRpdmVFbHMgPSB7fTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoJGVscyk7XG5cbiAgICAvLyBMZXRzIGdldCB0aGUgYmFzaWMgbmF0aXZlIGVscyBlbGVtZW50c1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwga2V5cy5sZW5ndGg7IGMgKz0gMSkge1xuICAgICAgICBuYXRpdmVFbHNba2V5c1tjXV0gPSBnZXROYXRpdmVFbCgkZWxzW2tleXNbY11dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF0aXZlRWxzO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENsYXNzXG5cbmNvbnN0IGNvbnN0cnVjdG9yVmFsaWRhdGUgPSBjb21waWxlU2NoZW1hKGdldFNjaGVtYShbXG4gICAgLy8geyB0aXRsZTogJyRlbCcgfSxcbiAgICB7IHRpdGxlOiAnZGF0YScsIHByb3BlcnRpZXM6IHt9IH1cbl0pKTtcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQ29tcCB7XG4gICAgLy8gQ29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcigkZWwsIGRhdGEgPSB7fSkge1xuICAgICAgICBjb25zdHJ1Y3RvclZhbGlkYXRlKFtkYXRhXSk7XG5cbiAgICAgICAgY29uc3QgJGVscyA9IGRhdGEuZWxzIHx8IHt9O1xuICAgICAgICBjb25zdCBuYXRpdmVFbHMgPSBnZXROYXRpdmVFbHMoJGVscyk7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVsID0gZ2V0TmF0aXZlRWwoJGVsKTtcblxuICAgICAgICBzdXBlcihuYXRpdmVFbCwge1xuICAgICAgICAgICAgZWxzOiBuYXRpdmVFbHMsXG4gICAgICAgICAgICB0bXBsOiBkYXRhLnRtcGwsXG4gICAgICAgICAgICByZW5kZXI6IGRhdGEucmVuZGVyLFxuICAgICAgICAgICAgY29tcHM6IGRhdGEuY29tcHMsXG4gICAgICAgICAgICBzdGF0ZTogZGF0YS5zdGF0ZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBMZXRzIGNhY2hlIHRoZSBiYXNlIGVsZW1lbnRcbiAgICAgICAgdGhpcy5fJGVsID0gJGVsO1xuICAgICAgICB0aGlzLl8kZWxzID0gJGVscztcbiAgICB9XG59XG5leHBvcnQgeyBDb21wb25lbnQgfTtcbiJdfQ==