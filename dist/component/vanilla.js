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

// // -----------------------------------------
// // Functions

/**
 * Gets template function
 *
 * @param {string|function} tmpl
 * @returns {function}
 */
// const getTmplFnValidate = compileSchema(getSchema([
//     { title: 'tmpl' }
// ]));
// 'use strict';

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

var renderValidate = void 0;
var _render = function _render(el, tmpl) {
    var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var renderedTmpl = arguments[3];

    renderValidate([state, renderedTmpl]);

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
// const renderValidate = compileSchema(getSchema([
//     { title: 'el' }
// ]));

var _destroy = function _destroy(el) {
    // destroyValidate([el]);

    // Check el data
    if (el !== undefined && el !== null) {
        // Lets remove the html!
        for (var i = 0; i < el.length; i += 1) {
            el[i].innerHTML = '';
        }
    }
};
exports.destroy = _destroy;

// // --------------------------------
// // Class

var constructorValidate = void 0;
// const setTmplValidate = compileSchema(getSchema([
//     { title: 'tmpl' }
// ]));

var Component = function (_Comp) {
    _inherits(Component, _Comp);

    // Constructor
    function Component(el) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Component);

        constructorValidate([data]);

        // Lets cache stuff
        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, { comps: data.comps, state: data.state }));

        _this._el = el;
        _this._els = data.els || _this._els || {};
        _this._render = data.render || _this._render || false;

        _this.tmpl = data.tmpl;
        return _this;
    }

    // Template...


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
            // setTmplValidate([tmpl]);
            this._tmpl = getTmplFn(tmpl);
        },
        get: function get() {
            return this._tmpl;
        }
    }]);

    return Component;
}(_common.Component);

exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvdmFuaWxsYS5qcyJdLCJuYW1lcyI6WyJnZXRUbXBsRm4iLCJ0bXBsIiwidG1wbEZuIiwiRXJyb3IiLCJyZW5kZXJWYWxpZGF0ZSIsInJlbmRlciIsImVsIiwic3RhdGUiLCJyZW5kZXJlZFRtcGwiLCJmaW5hbFRtcGwiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiZGVzdHJveSIsImNvbnN0cnVjdG9yVmFsaWRhdGUiLCJDb21wb25lbnQiLCJkYXRhIiwiY29tcHMiLCJfZWwiLCJfZWxzIiwiZWxzIiwiX3JlbmRlciIsIl9yZW5kZXJlZFRtcGwiLCJfdG1wbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFoQkE7O0FBaUJBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDeEIsUUFBSUMsZUFBSjs7QUFFQSxRQUFJLE9BQU9ELElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUJDLGlCQUFTO0FBQUEsbUJBQU0sT0FBT0QsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsSUFBM0IsR0FBa0MsRUFBeEM7QUFBQSxTQUFUO0FBQ0gsS0FGRCxNQUVPLElBQUksT0FBT0EsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUNuQ0MsaUJBQVNELElBQVQ7QUFDSCxLQUZNLE1BRUE7QUFDSCxjQUFNLElBQUlFLEtBQUosQ0FBVSw2Q0FBVixDQUFOO0FBQ0g7O0FBRUQsV0FBT0QsTUFBUDtBQUNILENBWkQ7UUFhU0YsUyxHQUFBQSxTOztBQUVUOzs7Ozs7O0FBTUEsSUFBTUksdUJBQU47QUFNQSxJQUFNQyxVQUFTLFNBQVRBLE9BQVMsQ0FBQ0MsRUFBRCxFQUFLTCxJQUFMLEVBQXdDO0FBQUEsUUFBN0JNLEtBQTZCLHVFQUFyQixFQUFxQjtBQUFBLFFBQWpCQyxZQUFpQjs7QUFDbkRKLG1CQUFlLENBQUNHLEtBQUQsRUFBUUMsWUFBUixDQUFmOztBQUVBLFFBQU1DLFlBQVlSLEtBQUtNLEtBQUwsQ0FBbEI7O0FBRUE7QUFDQSxRQUFJRSxjQUFjRCxZQUFkLElBQThCRixPQUFPSSxTQUF6QyxFQUFvRDtBQUNoRCxlQUFPRCxTQUFQO0FBQ0g7O0FBRUQ7QUFDQSxRQUFJSCxPQUFPSSxTQUFYLEVBQXNCO0FBQ2xCLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJTCxHQUFHTSxNQUF2QixFQUErQkQsS0FBSyxDQUFwQyxFQUF1QztBQUNuQ0wsZUFBR0ssQ0FBSCxFQUFNRSxTQUFOLEdBQWtCSixTQUFsQjtBQUNIO0FBQ0o7O0FBRUQsV0FBT0EsU0FBUDtBQUNILENBbEJEO1FBbUJTSixNLEdBQUFBLE87O0FBRVQ7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTVMsV0FBVSxTQUFWQSxRQUFVLENBQUNSLEVBQUQsRUFBUTtBQUNwQjs7QUFFQTtBQUNBLFFBQUlBLE9BQU9JLFNBQVAsSUFBb0JKLE9BQU8sSUFBL0IsRUFBcUM7QUFDakM7QUFDQSxhQUFLLElBQUlLLElBQUksQ0FBYixFQUFnQkEsSUFBSUwsR0FBR00sTUFBdkIsRUFBK0JELEtBQUssQ0FBcEMsRUFBdUM7QUFDbkNMLGVBQUdLLENBQUgsRUFBTUUsU0FBTixHQUFrQixFQUFsQjtBQUNIO0FBQ0o7QUFDSixDQVZEO1FBV1NDLE8sR0FBQUEsUTs7QUFFVDtBQUNBOztBQUVBLElBQU1DLDRCQUFOO0FBT0E7QUFDQTtBQUNBOztJQUVNQyxTOzs7QUFDRjtBQUNBLHVCQUFZVixFQUFaLEVBQTJCO0FBQUEsWUFBWFcsSUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUN2QkYsNEJBQW9CLENBQUNFLElBQUQsQ0FBcEI7O0FBSUE7QUFMdUIsaUdBR2pCLEVBQUVDLE9BQU9ELEtBQUtDLEtBQWQsRUFBcUJYLE9BQU9VLEtBQUtWLEtBQWpDLEVBSGlCOztBQU12QixjQUFLWSxHQUFMLEdBQVdiLEVBQVg7QUFDQSxjQUFLYyxJQUFMLEdBQVlILEtBQUtJLEdBQUwsSUFBWSxNQUFLRCxJQUFqQixJQUF5QixFQUFyQztBQUNBLGNBQUtFLE9BQUwsR0FBZUwsS0FBS1osTUFBTCxJQUFlLE1BQUtpQixPQUFwQixJQUErQixLQUE5Qzs7QUFFQSxjQUFLckIsSUFBTCxHQUFZZ0IsS0FBS2hCLElBQWpCO0FBVnVCO0FBVzFCOztBQUVEOzs7Ozs7O0FBUUE7aUNBQ1M7QUFDTCxnQkFBSSxLQUFLcUIsT0FBTCxLQUFpQixLQUFyQixFQUE0QjtBQUN4Qix1QkFBTyxJQUFQO0FBQ0g7O0FBRUQ7QUFDQSxpQkFBS0MsYUFBTCxHQUFxQmxCLFFBQU8sS0FBS2MsR0FBWixFQUFpQixLQUFLSyxLQUF0QixFQUE2QixLQUFLakIsS0FBbEMsRUFBeUMsS0FBS2dCLGFBQTlDLENBQXJCOztBQUVBLG1CQUFPLElBQVA7QUFDSDs7QUFFRDs7OztrQ0FDVTtBQUNOO0FBQ0EsaUJBQUtELE9BQUwsSUFBZ0JSLFNBQVEsS0FBS0ssR0FBYixDQUFoQjtBQUNBOztBQUVBLG1CQUFPLElBQVA7QUFDSDs7OzBCQTFCUWxCLEksRUFBTTtBQUNYO0FBQ0EsaUJBQUt1QixLQUFMLEdBQWF4QixVQUFVQyxJQUFWLENBQWI7QUFDSCxTOzRCQUVVO0FBQUUsbUJBQU8sS0FBS3VCLEtBQVo7QUFBb0I7Ozs7OztRQXVCNUJSLFMsR0FBQUEsUyIsImZpbGUiOiJ2YW5pbGxhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBjb21waWxlU2NoZW1hLCBnZXRTY2hlbWEgfSBmcm9tICdiZWRyb2NrLXV0aWxzL3NyYy92YWxpZGF0ZS5qcyc7XG5pbXBvcnQgeyBDb21wb25lbnQgYXMgQ29tcCB9IGZyb20gJy4vY29tbW9uLmpzJztcblxuLy8gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIEdldHMgdGVtcGxhdGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gdG1wbFxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG4vLyBjb25zdCBnZXRUbXBsRm5WYWxpZGF0ZSA9IGNvbXBpbGVTY2hlbWEoZ2V0U2NoZW1hKFtcbi8vICAgICB7IHRpdGxlOiAndG1wbCcgfVxuLy8gXSkpO1xuY29uc3QgZ2V0VG1wbEZuID0gKHRtcGwpID0+IHtcbiAgICBsZXQgdG1wbEZuO1xuXG4gICAgaWYgKHR5cGVvZiB0bXBsID09PSAnc3RyaW5nJykge1xuICAgICAgICB0bXBsRm4gPSAoKSA9PiB0eXBlb2YgdG1wbCA9PT0gJ3N0cmluZycgPyB0bXBsIDogJyc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdG1wbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0bXBsRm4gPSB0bXBsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGVtcGxhdGUgbmVlZHMgdG8gYmUgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIHJldHVybiB0bXBsRm47XG59O1xuZXhwb3J0IHsgZ2V0VG1wbEZuIH07XG5cbi8qKlxuICogUmVuZGVyc1xuICogQHBhcmFtICB7b2JqZWN0fSBjb21wXG4gKiBAcGFyYW0gIHtvYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHJlbmRlclZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuICAgIC8vIHsgdGl0bGU6ICdlbCcgfSxcbiAgICAvLyB7IHRpdGxlOiAndG1wbCcgfSxcbiAgICB7IHRpdGxlOiAnc3RhdGUnLCBwcm9wZXJ0aWVzOiB7fSB9LFxuICAgIHsgdGl0bGU6ICdyZW5kZXJlZFRtcGwnLCB0eXBlOiAnc3RyaW5nJyB9XG5dKSk7XG5jb25zdCByZW5kZXIgPSAoZWwsIHRtcGwsIHN0YXRlID0ge30sIHJlbmRlcmVkVG1wbCkgPT4ge1xuICAgIHJlbmRlclZhbGlkYXRlKFtzdGF0ZSwgcmVuZGVyZWRUbXBsXSk7XG5cbiAgICBjb25zdCBmaW5hbFRtcGwgPSB0bXBsKHN0YXRlKTtcblxuICAgIC8vIE1heWJlIHRoZXJlIGFyZW4ndCBjaGFuZ2VzXG4gICAgaWYgKGZpbmFsVG1wbCAhPT0gcmVuZGVyZWRUbXBsIHx8IGVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZpbmFsVG1wbDtcbiAgICB9XG5cbiAgICAvLyBMZXRzIGl0ZXJhdGUgcGVyIGVsZW1lbnRcbiAgICBpZiAoZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBlbFtpXS5pbm5lckhUTUwgPSBmaW5hbFRtcGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmluYWxUbXBsO1xufTtcbmV4cG9ydCB7IHJlbmRlciB9O1xuXG4vKipcbiAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICogQHBhcmFtICB7ZWxlbWVudH0gZWxcbiAqL1xuLy8gY29uc3QgcmVuZGVyVmFsaWRhdGUgPSBjb21waWxlU2NoZW1hKGdldFNjaGVtYShbXG4vLyAgICAgeyB0aXRsZTogJ2VsJyB9XG4vLyBdKSk7XG5jb25zdCBkZXN0cm95ID0gKGVsKSA9PiB7XG4gICAgLy8gZGVzdHJveVZhbGlkYXRlKFtlbF0pO1xuXG4gICAgLy8gQ2hlY2sgZWwgZGF0YVxuICAgIGlmIChlbCAhPT0gdW5kZWZpbmVkICYmIGVsICE9PSBudWxsKSB7XG4gICAgICAgIC8vIExldHMgcmVtb3ZlIHRoZSBodG1sIVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBlbFtpXS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgeyBkZXN0cm95IH07XG5cbi8vIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAvLyBDbGFzc1xuXG5jb25zdCBjb25zdHJ1Y3RvclZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuICAgIC8vIHsgdGl0bGU6ICdlbCcgfSxcbiAgICB7IHRpdGxlOiAnZGF0YScsIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZWxzOiB7IHByb3BlcnRpZXM6IHt9IH0sXG4gICAgICAgIHJlbmRlcjogeyB0eXBlOiAnYm9vbGVhbicgfVxuICAgIH0gfVxuXSkpO1xuLy8gY29uc3Qgc2V0VG1wbFZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuLy8gICAgIHsgdGl0bGU6ICd0bXBsJyB9XG4vLyBdKSk7XG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIENvbXAge1xuICAgIC8vIENvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3IoZWwsIGRhdGEgPSB7fSkge1xuICAgICAgICBjb25zdHJ1Y3RvclZhbGlkYXRlKFtkYXRhXSk7XG5cbiAgICAgICAgc3VwZXIoeyBjb21wczogZGF0YS5jb21wcywgc3RhdGU6IGRhdGEuc3RhdGUgfSk7XG5cbiAgICAgICAgLy8gTGV0cyBjYWNoZSBzdHVmZlxuICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICB0aGlzLl9lbHMgPSBkYXRhLmVscyB8fCB0aGlzLl9lbHMgfHwge307XG4gICAgICAgIHRoaXMuX3JlbmRlciA9IGRhdGEucmVuZGVyIHx8IHRoaXMuX3JlbmRlciB8fCBmYWxzZTtcblxuICAgICAgICB0aGlzLnRtcGwgPSBkYXRhLnRtcGw7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGUuLi5cbiAgICBzZXQgdG1wbCh0bXBsKSB7XG4gICAgICAgIC8vIHNldFRtcGxWYWxpZGF0ZShbdG1wbF0pO1xuICAgICAgICB0aGlzLl90bXBsID0gZ2V0VG1wbEZuKHRtcGwpO1xuICAgIH1cblxuICAgIGdldCB0bXBsKCkgeyByZXR1cm4gdGhpcy5fdG1wbDsgfVxuXG4gICAgLy8gUmVuZGVyXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5fcmVuZGVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWNoZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRUbXBsID0gcmVuZGVyKHRoaXMuX2VsLCB0aGlzLl90bXBsLCB0aGlzLnN0YXRlLCB0aGlzLl9yZW5kZXJlZFRtcGwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3lcbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyBGaW5hbGx5IGRlc3Ryb3kgdGhpc1xuICAgICAgICB0aGlzLl9yZW5kZXIgJiYgZGVzdHJveSh0aGlzLl9lbCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnQgeyBDb21wb25lbnQgfTtcbiJdfQ==