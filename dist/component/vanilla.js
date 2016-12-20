
/* :: import type {CompData, FnTmpl, FnGetTmplFn, FnRender, FnDestroy} from './_test/vanilla.flow.js' */
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// -----------------------------------------
// Functions

/**
 * Gets template function
 *
 * @param {string|function} tmpl
 * @returns {function}
 */
var getTmplFn /* :: :FnGetTmplFn*/ = function getTmplFn(tmpl) {
    var tmplFn = void 0 /* :: :FnTmpl */;

    if (typeof tmpl !== 'function') {
        tmplFn = function tmplFn() {
            return typeof tmpl === 'string' ? tmpl : '';
        };
    } else {
        tmplFn = tmpl;
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

var _render /* :: :FnRender*/ = function _render(el, tmpl, state, renderedTmpl) {
    var finalTmpl /* :: :string */ = tmpl(state);

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

var _destroy /* :: :FnDestroy */ = function _destroy(el) {
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

    // Vars
    /* ::
    _el:?HTMLElement[];
    _els:{ [key: string]: ?HTMLElement[] };
    _tmpl:FnTmpl;
    _renderedTmpl:?string;
    _render:boolean;
    */

    // Constructor
    function Component(el /* :: :?HTMLElement[] */) {
        var data /* :: :CompData */ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Component);

        // Lets cache stuff
        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, { comps: data.comps, state: data.state }));

        _this._el = el;
        _this._els = data.els || _this._els || {};
        _this._render = data.render || _this._render || false;
        _this._tmpl = getTmplFn(data.tmpl) || _this._tmpl;
        return _this;
    }

    // Render


    _createClass(Component, [{
        key: 'render',
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
            // Lets destroy components underneath
            var compsKeys = Object.keys(this._comps);
            for (var i = 0; i < compsKeys.length; i += 1) {
                this._comps[compsKeys[i]].destroy();
            }

            // Finally destroy this
            this._render && _destroy(this._el);
            _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'destroy', this).call(this);

            return this;
        }
    }]);

    return Component;
}(_common.Component);

exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvdmFuaWxsYS5qcyJdLCJuYW1lcyI6WyJnZXRUbXBsRm4iLCJ0bXBsIiwidG1wbEZuIiwicmVuZGVyIiwiZWwiLCJzdGF0ZSIsInJlbmRlcmVkVG1wbCIsImZpbmFsVG1wbCIsInVuZGVmaW5lZCIsImkiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJkZXN0cm95IiwiQ29tcG9uZW50IiwiZGF0YSIsImNvbXBzIiwiX2VsIiwiX2VscyIsImVscyIsIl9yZW5kZXIiLCJfdG1wbCIsIl9yZW5kZXJlZFRtcGwiLCJjb21wc0tleXMiLCJPYmplY3QiLCJrZXlzIiwiX2NvbXBzIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxVQUFTLG9CQUFULEdBQWdDLFNBQWhDQSxTQUFnQyxDQUFDQyxJQUFELEVBQVU7QUFDNUMsUUFBSUMsZUFBSixDQUFVLGdCQUFWOztBQUVBLFFBQUksT0FBT0QsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM1QkMsaUJBQVM7QUFBQSxtQkFBTSxPQUFPRCxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxFQUF4QztBQUFBLFNBQVQ7QUFDSCxLQUZELE1BRU87QUFDSEMsaUJBQVNELElBQVQ7QUFDSDs7QUFFRCxXQUFPQyxNQUFQO0FBQ0gsQ0FWRDtRQVdTRixTLEdBQUFBLFM7O0FBRVQ7Ozs7Ozs7QUFNQSxJQUFNRyxRQUFNLGlCQUFOLEdBQTBCLFNBQTFCQSxPQUEwQixDQUFDQyxFQUFELEVBQUtILElBQUwsRUFBV0ksS0FBWCxFQUFrQkMsWUFBbEIsRUFBbUM7QUFDL0QsUUFBTUMsVUFBUyxnQkFBVCxHQUE0Qk4sS0FBS0ksS0FBTCxDQUFsQzs7QUFFQTtBQUNBLFFBQUlFLGNBQWNELFlBQWQsSUFBOEJGLE9BQU9JLFNBQXpDLEVBQW9EO0FBQ2hELGVBQU9ELFNBQVA7QUFDSDs7QUFFRDtBQUNBLFFBQUlILE9BQU9JLFNBQVgsRUFBc0I7QUFDbEIsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLEdBQUdNLE1BQXZCLEVBQStCRCxLQUFLLENBQXBDLEVBQXVDO0FBQ25DTCxlQUFHSyxDQUFILEVBQU1FLFNBQU4sR0FBa0JKLFNBQWxCO0FBQ0g7QUFDSjs7QUFFRCxXQUFPQSxTQUFQO0FBQ0gsQ0FoQkQ7UUFpQlNKLE0sR0FBQUEsTzs7QUFFVDs7Ozs7QUFJQSxJQUFNUyxTQUFPLG1CQUFQLEdBQTZCLFNBQTdCQSxRQUE2QixDQUFDUixFQUFELEVBQVE7QUFDdkM7QUFDQSxRQUFJQSxPQUFPSSxTQUFQLElBQW9CSixPQUFPLElBQS9CLEVBQXFDO0FBQ2pDO0FBQ0EsYUFBSyxJQUFJSyxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLEdBQUdNLE1BQXZCLEVBQStCRCxLQUFLLENBQXBDLEVBQXVDO0FBQ25DTCxlQUFHSyxDQUFILEVBQU1FLFNBQU4sR0FBa0IsRUFBbEI7QUFDSDtBQUNKO0FBQ0osQ0FSRDtRQVNTQyxPLEdBQUFBLFE7O0FBRVQ7QUFDQTs7SUFFTUMsUzs7O0FBQ0Y7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBLHVCQUFZVCxFQUFaLENBQWMsd0JBQWQsRUFBcUU7QUFBQSxZQUE3QlUsSUFBNkIsQ0FBekIsa0JBQXlCLHVFQUFKLEVBQUk7O0FBQUE7O0FBR2pFO0FBSGlFLDBIQUMzRCxFQUFFQyxPQUFPRCxLQUFLQyxLQUFkLEVBQXFCVixPQUFPUyxLQUFLVCxLQUFqQyxFQUQyRDs7QUFJakUsY0FBS1csR0FBTCxHQUFXWixFQUFYO0FBQ0EsY0FBS2EsSUFBTCxHQUFZSCxLQUFLSSxHQUFMLElBQVksTUFBS0QsSUFBakIsSUFBeUIsRUFBckM7QUFDQSxjQUFLRSxPQUFMLEdBQWVMLEtBQUtYLE1BQUwsSUFBZSxNQUFLZ0IsT0FBcEIsSUFBK0IsS0FBOUM7QUFDQSxjQUFLQyxLQUFMLEdBQWFwQixVQUFVYyxLQUFLYixJQUFmLEtBQXdCLE1BQUttQixLQUExQztBQVBpRTtBQVFwRTs7QUFFRDs7Ozs7aUNBQ1M7QUFDTCxnQkFBSSxLQUFLRCxPQUFMLEtBQWlCLEtBQXJCLEVBQTRCO0FBQ3hCLHVCQUFPLElBQVA7QUFDSDs7QUFFRDtBQUNBLGlCQUFLRSxhQUFMLEdBQXFCbEIsUUFBTyxLQUFLYSxHQUFaLEVBQWlCLEtBQUtJLEtBQXRCLEVBQTZCLEtBQUtmLEtBQWxDLEVBQXlDLEtBQUtnQixhQUE5QyxDQUFyQjs7QUFFQSxtQkFBTyxJQUFQO0FBQ0g7O0FBRUQ7Ozs7a0NBQ1U7QUFDTjtBQUNBLGdCQUFNQyxZQUFZQyxPQUFPQyxJQUFQLENBQVksS0FBS0MsTUFBakIsQ0FBbEI7QUFDQSxpQkFBSyxJQUFJaEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJYSxVQUFVWixNQUE5QixFQUFzQ0QsS0FBSyxDQUEzQyxFQUE4QztBQUMxQyxxQkFBS2dCLE1BQUwsQ0FBWUgsVUFBVWIsQ0FBVixDQUFaLEVBQTBCRyxPQUExQjtBQUNIOztBQUVEO0FBQ0EsaUJBQUtPLE9BQUwsSUFBZ0JQLFNBQVEsS0FBS0ksR0FBYixDQUFoQjtBQUNBOztBQUVBLG1CQUFPLElBQVA7QUFDSDs7Ozs7O1FBRUlILFMsR0FBQUEsUyIsImZpbGUiOiJ2YW5pbGxhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi9cbi8qIDo6IGltcG9ydCB0eXBlIHtDb21wRGF0YSwgRm5UbXBsLCBGbkdldFRtcGxGbiwgRm5SZW5kZXIsIEZuRGVzdHJveX0gZnJvbSAnLi9fdGVzdC92YW5pbGxhLmZsb3cuanMnICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IENvbXBvbmVudCBhcyBDb21wIH0gZnJvbSAnLi9jb21tb24uanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogR2V0cyB0ZW1wbGF0ZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSB0bXBsXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbmNvbnN0IGdldFRtcGxGbi8qIDo6IDpGbkdldFRtcGxGbiovID0gKHRtcGwpID0+IHtcbiAgICBsZXQgdG1wbEZuLyogOjogOkZuVG1wbCAqLztcblxuICAgIGlmICh0eXBlb2YgdG1wbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0bXBsRm4gPSAoKSA9PiB0eXBlb2YgdG1wbCA9PT0gJ3N0cmluZycgPyB0bXBsIDogJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG1wbEZuID0gdG1wbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG1wbEZuO1xufTtcbmV4cG9ydCB7IGdldFRtcGxGbiB9O1xuXG4vKipcbiAqIFJlbmRlcnNcbiAqIEBwYXJhbSAge29iamVjdH0gY29tcFxuICogQHBhcmFtICB7b2JqZWN0fSBzdGF0ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCByZW5kZXIvKiA6OiA6Rm5SZW5kZXIqLyA9IChlbCwgdG1wbCwgc3RhdGUsIHJlbmRlcmVkVG1wbCkgPT4ge1xuICAgIGNvbnN0IGZpbmFsVG1wbC8qIDo6IDpzdHJpbmcgKi8gPSB0bXBsKHN0YXRlKTtcblxuICAgIC8vIE1heWJlIHRoZXJlIGFyZW4ndCBjaGFuZ2VzXG4gICAgaWYgKGZpbmFsVG1wbCAhPT0gcmVuZGVyZWRUbXBsIHx8IGVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZpbmFsVG1wbDtcbiAgICB9XG5cbiAgICAvLyBMZXRzIGl0ZXJhdGUgcGVyIGVsZW1lbnRcbiAgICBpZiAoZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBlbFtpXS5pbm5lckhUTUwgPSBmaW5hbFRtcGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmluYWxUbXBsO1xufTtcbmV4cG9ydCB7IHJlbmRlciB9O1xuXG4vKipcbiAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICogQHBhcmFtICB7ZWxlbWVudH0gZWxcbiAqL1xuY29uc3QgZGVzdHJveS8qIDo6IDpGbkRlc3Ryb3kgKi8gPSAoZWwpID0+IHtcbiAgICAvLyBDaGVjayBlbCBkYXRhXG4gICAgaWYgKGVsICE9PSB1bmRlZmluZWQgJiYgZWwgIT09IG51bGwpIHtcbiAgICAgICAgLy8gTGV0cyByZW1vdmUgdGhlIGh0bWwhXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGVsW2ldLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IGRlc3Ryb3kgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENsYXNzXG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIENvbXAge1xuICAgIC8vIFZhcnNcbiAgICAvKiA6OlxuICAgIF9lbDo/SFRNTEVsZW1lbnRbXTtcbiAgICBfZWxzOnsgW2tleTogc3RyaW5nXTogP0hUTUxFbGVtZW50W10gfTtcbiAgICBfdG1wbDpGblRtcGw7XG4gICAgX3JlbmRlcmVkVG1wbDo/c3RyaW5nO1xuICAgIF9yZW5kZXI6Ym9vbGVhbjtcbiAgICAqL1xuXG4gICAgLy8gQ29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihlbC8qIDo6IDo/SFRNTEVsZW1lbnRbXSAqLywgZGF0YS8qIDo6IDpDb21wRGF0YSAqLyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHsgY29tcHM6IGRhdGEuY29tcHMsIHN0YXRlOiBkYXRhLnN0YXRlIH0pO1xuXG4gICAgICAgIC8vIExldHMgY2FjaGUgc3R1ZmZcbiAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgdGhpcy5fZWxzID0gZGF0YS5lbHMgfHwgdGhpcy5fZWxzIHx8IHt9O1xuICAgICAgICB0aGlzLl9yZW5kZXIgPSBkYXRhLnJlbmRlciB8fCB0aGlzLl9yZW5kZXIgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuX3RtcGwgPSBnZXRUbXBsRm4oZGF0YS50bXBsKSB8fCB0aGlzLl90bXBsO1xuICAgIH1cblxuICAgIC8vIFJlbmRlclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FjaGUgdGhlIHRlbXBsYXRlXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkVG1wbCA9IHJlbmRlcih0aGlzLl9lbCwgdGhpcy5fdG1wbCwgdGhpcy5zdGF0ZSwgdGhpcy5fcmVuZGVyZWRUbXBsKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBEZXN0cm95XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gTGV0cyBkZXN0cm95IGNvbXBvbmVudHMgdW5kZXJuZWF0aFxuICAgICAgICBjb25zdCBjb21wc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9jb21wcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHNLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21wc1tjb21wc0tleXNbaV1dLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmFsbHkgZGVzdHJveSB0aGlzXG4gICAgICAgIHRoaXMuX3JlbmRlciAmJiBkZXN0cm95KHRoaXMuX2VsKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmV4cG9ydCB7IENvbXBvbmVudCB9O1xuIl19