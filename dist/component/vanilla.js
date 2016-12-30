'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = exports.destroy = exports.render = exports.getTmplFn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _common = require('./common.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {} }

// -----------------------------------------
// Functions

/**
 * Gets template function
 *
 * @param {string|function} tmpl
 * @returns {function}
 */
// { title: 'tmpl', type: 'string|fn' }
var getTmplFn = function getTmplFn(tmpl) {
    var tmplFn = void 0;

    if (typeof tmpl === 'string') {
        tmplFn = function tmplFn() {
            return typeof tmpl === 'string' ? tmpl : '';
        };
    } else if (typeof tmpl === 'function') {
        tmplFn = tmpl;
    } else {
        throw new Error('Template needs to be a string or a function');
    }

    return tmplFn;
};
exports.getTmplFn = getTmplFn;

/**
 * Renders
 * @param  {object} comp
 * @param  {object} state
 * @return {string}
 */
// { title: 'el' },
// { title: 'tmpl' },
// { title: 'state', properties: {}, default: {} },
// { title: 'renderedTmpl', type: 'string' }

var _render = function _render(el, tmpl) {
    var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var renderedTmpl = arguments[3];

    var finalTmpl = tmpl(state);

    // Maybe there aren't changes
    if (finalTmpl !== renderedTmpl || el !== undefined) {
        return finalTmpl;
    }

    // Lets iterate per element
    if (el !== undefined) {
        for (var i = 0; i < el.length; i += 1) {
            el[i].innerHTML = finalTmpl;
        }
    }

    return finalTmpl;
};
exports.render = _render;

/**
 * Destroys component
 * @param  {element} el
 */
// { title: 'el' }

var _destroy = function _destroy(el) {
    // Check el data
    if (el !== undefined && el !== null) {
        // Lets remove the html!
        for (var i = 0; i < el.length; i += 1) {
            el[i].innerHTML = '';
        }
    }
};
exports.destroy = _destroy;

// --------------------------------
// Class

var Component = function (_Comp) {
    _inherits(Component, _Comp);

    // Constructor
    // { title: 'el' },
    // { title: 'data', properties: {
    //     els: { properties: {} },
    //     render: { type: 'boolean' }
    // } }
    function Component(el) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Component);

        // Lets cache stuff
        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, { comps: data.comps, state: data.state }));

        _this._el = el;
        _this._els = data.els || _this._els || {};
        _this._render = data.render || _this._render || false;

        _this.tmpl = data.tmpl;
        return _this;
    }

    // Template...
    // { title: 'tmpl', type: 'string|fn' }


    _createClass(Component, [{
        key: 'render',


        // Render
        value: function render() {
            if (this._render === false) {
                return this;
            }

            // Cache the template
            this._renderedTmpl = _render(this._el, this._tmpl, this.state, this._renderedTmpl);

            return this;
        }

        // Destroy

    }, {
        key: 'destroy',
        value: function destroy() {
            // Finally destroy this
            this._render && _destroy(this._el);
            _get(Object.getPrototypeOf(Component.prototype), 'destroy', this).call(this);

            return this;
        }
    }, {
        key: 'tmpl',
        set: function set(tmpl) {
            this._tmpl = getTmplFn(tmpl);
        },
        get: function get() {
            return this._tmpl;
        }
    }]);

    return Component;
}(_common.Component);

exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvdmFuaWxsYS5qcyJdLCJuYW1lcyI6WyJnZXRUbXBsRm4iLCJ0bXBsIiwidG1wbEZuIiwiRXJyb3IiLCJyZW5kZXIiLCJlbCIsInN0YXRlIiwicmVuZGVyZWRUbXBsIiwiZmluYWxUbXBsIiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsImlubmVySFRNTCIsImRlc3Ryb3kiLCJDb21wb25lbnQiLCJkYXRhIiwiY29tcHMiLCJfZWwiLCJfZWxzIiwiZWxzIiwiX3JlbmRlciIsIl9yZW5kZXJlZFRtcGwiLCJfdG1wbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQ3hCLFFBQUlDLGVBQUo7O0FBRUEsUUFBSSxPQUFPRCxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCQyxpQkFBUztBQUFBLG1CQUFNLE9BQU9ELElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLEVBQXhDO0FBQUEsU0FBVDtBQUNILEtBRkQsTUFFTyxJQUFJLE9BQU9BLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDbkNDLGlCQUFTRCxJQUFUO0FBQ0gsS0FGTSxNQUVBO0FBQ0gsY0FBTSxJQUFJRSxLQUFKLENBQVUsNkNBQVYsQ0FBTjtBQUNIOztBQUVELFdBQU9ELE1BQVA7QUFDSCxDQVpEO1FBYVNGLFMsR0FBQUEsUzs7QUFFVDs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUksVUFBUyxTQUFUQSxPQUFTLENBQUNDLEVBQUQsRUFBS0osSUFBTCxFQUF3QztBQUFBLFFBQTdCSyxLQUE2Qix1RUFBckIsRUFBcUI7QUFBQSxRQUFqQkMsWUFBaUI7O0FBQ25ELFFBQU1DLFlBQVlQLEtBQUtLLEtBQUwsQ0FBbEI7O0FBRUE7QUFDQSxRQUFJRSxjQUFjRCxZQUFkLElBQThCRixPQUFPSSxTQUF6QyxFQUFvRDtBQUNoRCxlQUFPRCxTQUFQO0FBQ0g7O0FBRUQ7QUFDQSxRQUFJSCxPQUFPSSxTQUFYLEVBQXNCO0FBQ2xCLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJTCxHQUFHTSxNQUF2QixFQUErQkQsS0FBSyxDQUFwQyxFQUF1QztBQUNuQ0wsZUFBR0ssQ0FBSCxFQUFNRSxTQUFOLEdBQWtCSixTQUFsQjtBQUNIO0FBQ0o7O0FBRUQsV0FBT0EsU0FBUDtBQUNILENBaEJEO1FBaUJTSixNLEdBQUFBLE87O0FBRVQ7Ozs7QUFJQTs7QUFDQSxJQUFNUyxXQUFVLFNBQVZBLFFBQVUsQ0FBQ1IsRUFBRCxFQUFRO0FBQ3BCO0FBQ0EsUUFBSUEsT0FBT0ksU0FBUCxJQUFvQkosT0FBTyxJQUEvQixFQUFxQztBQUNqQztBQUNBLGFBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJTCxHQUFHTSxNQUF2QixFQUErQkQsS0FBSyxDQUFwQyxFQUF1QztBQUNuQ0wsZUFBR0ssQ0FBSCxFQUFNRSxTQUFOLEdBQWtCLEVBQWxCO0FBQ0g7QUFDSjtBQUNKLENBUkQ7UUFTU0MsTyxHQUFBQSxROztBQUVUO0FBQ0E7O0lBRU1DLFM7OztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFZVCxFQUFaLEVBQTJCO0FBQUEsWUFBWFUsSUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUd2QjtBQUh1QixpR0FDakIsRUFBRUMsT0FBT0QsS0FBS0MsS0FBZCxFQUFxQlYsT0FBT1MsS0FBS1QsS0FBakMsRUFEaUI7O0FBSXZCLGNBQUtXLEdBQUwsR0FBV1osRUFBWDtBQUNBLGNBQUthLElBQUwsR0FBWUgsS0FBS0ksR0FBTCxJQUFZLE1BQUtELElBQWpCLElBQXlCLEVBQXJDO0FBQ0EsY0FBS0UsT0FBTCxHQUFlTCxLQUFLWCxNQUFMLElBQWUsTUFBS2dCLE9BQXBCLElBQStCLEtBQTlDOztBQUVBLGNBQUtuQixJQUFMLEdBQVljLEtBQUtkLElBQWpCO0FBUnVCO0FBUzFCOztBQUVEO0FBQ0E7Ozs7Ozs7QUFJQTtpQ0FDUztBQUNMLGdCQUFJLEtBQUttQixPQUFMLEtBQWlCLEtBQXJCLEVBQTRCO0FBQ3hCLHVCQUFPLElBQVA7QUFDSDs7QUFFRDtBQUNBLGlCQUFLQyxhQUFMLEdBQXFCakIsUUFBTyxLQUFLYSxHQUFaLEVBQWlCLEtBQUtLLEtBQXRCLEVBQTZCLEtBQUtoQixLQUFsQyxFQUF5QyxLQUFLZSxhQUE5QyxDQUFyQjs7QUFFQSxtQkFBTyxJQUFQO0FBQ0g7O0FBRUQ7Ozs7a0NBQ1U7QUFDTjtBQUNBLGlCQUFLRCxPQUFMLElBQWdCUCxTQUFRLEtBQUtJLEdBQWIsQ0FBaEI7QUFDQTs7QUFFQSxtQkFBTyxJQUFQO0FBQ0g7OzswQkF0QlFoQixJLEVBQU07QUFBRSxpQkFBS3FCLEtBQUwsR0FBYXRCLFVBQVVDLElBQVYsQ0FBYjtBQUErQixTOzRCQUNyQztBQUFFLG1CQUFPLEtBQUtxQixLQUFaO0FBQW9COzs7Ozs7UUF1QjVCUixTLEdBQUFBLFMiLCJmaWxlIjoidmFuaWxsYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgQ29tcG9uZW50IGFzIENvbXAgfSBmcm9tICcuL2NvbW1vbi5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBHZXRzIHRlbXBsYXRlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHRtcGxcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuLy8geyB0aXRsZTogJ3RtcGwnLCB0eXBlOiAnc3RyaW5nfGZuJyB9XG5jb25zdCBnZXRUbXBsRm4gPSAodG1wbCkgPT4ge1xuICAgIGxldCB0bXBsRm47XG5cbiAgICBpZiAodHlwZW9mIHRtcGwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRtcGxGbiA9ICgpID0+IHR5cGVvZiB0bXBsID09PSAnc3RyaW5nJyA/IHRtcGwgOiAnJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0bXBsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRtcGxGbiA9IHRtcGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBuZWVkcyB0byBiZSBhIHN0cmluZyBvciBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRtcGxGbjtcbn07XG5leHBvcnQgeyBnZXRUbXBsRm4gfTtcblxuLyoqXG4gKiBSZW5kZXJzXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbXBcbiAqIEBwYXJhbSAge29iamVjdH0gc3RhdGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuLy8geyB0aXRsZTogJ2VsJyB9LFxuLy8geyB0aXRsZTogJ3RtcGwnIH0sXG4vLyB7IHRpdGxlOiAnc3RhdGUnLCBwcm9wZXJ0aWVzOiB7fSwgZGVmYXVsdDoge30gfSxcbi8vIHsgdGl0bGU6ICdyZW5kZXJlZFRtcGwnLCB0eXBlOiAnc3RyaW5nJyB9XG5jb25zdCByZW5kZXIgPSAoZWwsIHRtcGwsIHN0YXRlID0ge30sIHJlbmRlcmVkVG1wbCkgPT4ge1xuICAgIGNvbnN0IGZpbmFsVG1wbCA9IHRtcGwoc3RhdGUpO1xuXG4gICAgLy8gTWF5YmUgdGhlcmUgYXJlbid0IGNoYW5nZXNcbiAgICBpZiAoZmluYWxUbXBsICE9PSByZW5kZXJlZFRtcGwgfHwgZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmluYWxUbXBsO1xuICAgIH1cblxuICAgIC8vIExldHMgaXRlcmF0ZSBwZXIgZWxlbWVudFxuICAgIGlmIChlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGVsW2ldLmlubmVySFRNTCA9IGZpbmFsVG1wbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaW5hbFRtcGw7XG59O1xuZXhwb3J0IHsgcmVuZGVyIH07XG5cbi8qKlxuICogRGVzdHJveXMgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtlbGVtZW50fSBlbFxuICovXG4vLyB7IHRpdGxlOiAnZWwnIH1cbmNvbnN0IGRlc3Ryb3kgPSAoZWwpID0+IHtcbiAgICAvLyBDaGVjayBlbCBkYXRhXG4gICAgaWYgKGVsICE9PSB1bmRlZmluZWQgJiYgZWwgIT09IG51bGwpIHtcbiAgICAgICAgLy8gTGV0cyByZW1vdmUgdGhlIGh0bWwhXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGVsW2ldLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IGRlc3Ryb3kgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENsYXNzXG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIENvbXAge1xuICAgIC8vIENvbnN0cnVjdG9yXG4gICAgLy8geyB0aXRsZTogJ2VsJyB9LFxuICAgIC8vIHsgdGl0bGU6ICdkYXRhJywgcHJvcGVydGllczoge1xuICAgIC8vICAgICBlbHM6IHsgcHJvcGVydGllczoge30gfSxcbiAgICAvLyAgICAgcmVuZGVyOiB7IHR5cGU6ICdib29sZWFuJyB9XG4gICAgLy8gfSB9XG4gICAgY29uc3RydWN0b3IoZWwsIGRhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcih7IGNvbXBzOiBkYXRhLmNvbXBzLCBzdGF0ZTogZGF0YS5zdGF0ZSB9KTtcblxuICAgICAgICAvLyBMZXRzIGNhY2hlIHN0dWZmXG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX2VscyA9IGRhdGEuZWxzIHx8IHRoaXMuX2VscyB8fCB7fTtcbiAgICAgICAgdGhpcy5fcmVuZGVyID0gZGF0YS5yZW5kZXIgfHwgdGhpcy5fcmVuZGVyIHx8IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudG1wbCA9IGRhdGEudG1wbDtcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZS4uLlxuICAgIC8vIHsgdGl0bGU6ICd0bXBsJywgdHlwZTogJ3N0cmluZ3xmbicgfVxuICAgIHNldCB0bXBsKHRtcGwpIHsgdGhpcy5fdG1wbCA9IGdldFRtcGxGbih0bXBsKTsgfVxuICAgIGdldCB0bXBsKCkgeyByZXR1cm4gdGhpcy5fdG1wbDsgfVxuXG4gICAgLy8gUmVuZGVyXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5fcmVuZGVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWNoZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRUbXBsID0gcmVuZGVyKHRoaXMuX2VsLCB0aGlzLl90bXBsLCB0aGlzLnN0YXRlLCB0aGlzLl9yZW5kZXJlZFRtcGwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3lcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyBGaW5hbGx5IGRlc3Ryb3kgdGhpc1xuICAgICAgICB0aGlzLl9yZW5kZXIgJiYgZGVzdHJveSh0aGlzLl9lbCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnQgeyBDb21wb25lbnQgfTtcbiJdfQ==