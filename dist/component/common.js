/* :: import type {Comp, Tmpl, FnRender, FnDestroy, FnInit, FnGetComp} from './_test/common.flow.js' */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _cloneDeep = require('lodash/cloneDeep.js');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _merge = require('lodash/merge.js');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULTS = {
    el: null,
    els: {},
    comps: {},
    state: {},
    tmpl: null
};

// -----------------------------------------
// Functions

/**
 * Renders
 * @param  {object} comp
 * @param  {object} state
 * @return {string}
 */
var render /* :: :FnRender*/ = function render(comp, state) {
    var tmpl /* :: :Tmpl */ = comp.tmpl;

    // Cache the data
    // TODO: Should we check diffs in state?
    comp.state = state || comp.state;

    if (tmpl && typeof tmpl === 'function') {
        tmpl = tmpl(comp, comp.state);
    }

    if (!tmpl || typeof tmpl !== 'string') {
        return comp;
    }

    // Maybe there aren't changes
    if (tmpl !== comp.renderedTmpl) {
        // Lets cache tmpl for future usage...
        comp.renderedTmpl = tmpl;

        if (comp.el) {
            var el = comp.el;

            if (_typeof(comp.el) !== 'object' || !comp.el.hasOwnProperty('length')) {
                el = [el];
            }

            for (var i = 0; i < el.length; i += 1) {
                el[i].innerHtml = tmpl;
            }
        }
    }

    return comp;
};

/**
 * Gets comp object
 * @param  {object} data
 * @param  {object} DEFAULTS
 * @return {object}
 */
var getComp /* :: :FnGetComp*/ = function getComp() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var DEFAULTS_COMP = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var defaults = (0, _cloneDeep2.default)(DEFAULTS_COMP);
    var compData = (0, _cloneDeep2.default)(data);
    var comp /* :: :Comp */ = (0, _merge2.default)({}, defaults, compData);

    return comp;
};

/**
 * Destroys component
 * @param  {object} comp
 */
var destroy /* :: :FnDestroy */ = function destroy(comp) {
    return comp;
};

/**
 * Initializes
 *
 * @param {object} comp
 * @returns {object}
 */
var _init /* :: :FnInit */ = function _init(comp) {
    return comp;
};

// --------------------------------
// Export

exports.default = {
    init: function init(el) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var comp /* :: :Comp */ = getComp(data, DEFAULTS);

        // Merge will mess with elements
        comp.el = el;
        comp.els = data.els || comp.els;
        comp.comps = data.comps || comp.comps;

        return !el ? comp : _init(comp);
    },
    getComp: getComp, render: render, destroy: destroy
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvY29tbW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRTIiwiZWwiLCJlbHMiLCJjb21wcyIsInN0YXRlIiwidG1wbCIsInJlbmRlciIsImNvbXAiLCJyZW5kZXJlZFRtcGwiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJsZW5ndGgiLCJpbm5lckh0bWwiLCJnZXRDb21wIiwiZGF0YSIsIkRFRkFVTFRTX0NPTVAiLCJkZWZhdWx0cyIsImNvbXBEYXRhIiwiZGVzdHJveSIsImluaXQiXSwibWFwcGluZ3MiOiJBQUFXO0FBQ1g7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVztBQUNiQyxRQUFJLElBRFM7QUFFYkMsU0FBSyxFQUZRO0FBR2JDLFdBQU8sRUFITTtBQUliQyxXQUFPLEVBSk07QUFLYkMsVUFBTTtBQUxPLENBQWpCOztBQVFBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BLElBQU1DLE9BQU0saUJBQU4sR0FBMEIsU0FBMUJBLE1BQTBCLENBQUNDLElBQUQsRUFBT0gsS0FBUCxFQUFpQjtBQUM3QyxRQUFJQyxLQUFJLGNBQUosR0FBcUJFLEtBQUtGLElBQTlCOztBQUVBO0FBQ0E7QUFDQUUsU0FBS0gsS0FBTCxHQUFhQSxTQUFTRyxLQUFLSCxLQUEzQjs7QUFFQSxRQUFJQyxRQUFRLE9BQU9BLElBQVAsS0FBZ0IsVUFBNUIsRUFBd0M7QUFDcENBLGVBQU9BLEtBQUtFLElBQUwsRUFBV0EsS0FBS0gsS0FBaEIsQ0FBUDtBQUNIOztBQUVELFFBQUksQ0FBQ0MsSUFBRCxJQUFTLE9BQU9BLElBQVAsS0FBZ0IsUUFBN0IsRUFBdUM7QUFDbkMsZUFBT0UsSUFBUDtBQUNIOztBQUVEO0FBQ0EsUUFBSUYsU0FBU0UsS0FBS0MsWUFBbEIsRUFBZ0M7QUFDNUI7QUFDQUQsYUFBS0MsWUFBTCxHQUFvQkgsSUFBcEI7O0FBRUEsWUFBSUUsS0FBS04sRUFBVCxFQUFhO0FBQ1QsZ0JBQUlBLEtBQUtNLEtBQUtOLEVBQWQ7O0FBRUEsZ0JBQUksUUFBT00sS0FBS04sRUFBWixNQUFtQixRQUFuQixJQUErQixDQUFDTSxLQUFLTixFQUFMLENBQVFRLGNBQVIsQ0FBdUIsUUFBdkIsQ0FBcEMsRUFBc0U7QUFDbEVSLHFCQUFLLENBQUNBLEVBQUQsQ0FBTDtBQUNIOztBQUVELGlCQUFLLElBQUlTLElBQUksQ0FBYixFQUFnQkEsSUFBSVQsR0FBR1UsTUFBdkIsRUFBK0JELEtBQUssQ0FBcEMsRUFBdUM7QUFDbkNULG1CQUFHUyxDQUFILEVBQU1FLFNBQU4sR0FBa0JQLElBQWxCO0FBQ0g7QUFDSjtBQUNKOztBQUVELFdBQU9FLElBQVA7QUFDSCxDQWxDRDs7QUFvQ0E7Ozs7OztBQU1BLElBQU1NLFFBQU8sa0JBQVAsR0FBNEIsU0FBNUJBLE9BQTRCLEdBQW1DO0FBQUEsUUFBbENDLElBQWtDLHVFQUEzQixFQUEyQjtBQUFBLFFBQXZCQyxhQUF1Qix1RUFBUCxFQUFPOztBQUNqRSxRQUFNQyxXQUFXLHlCQUFVRCxhQUFWLENBQWpCO0FBQ0EsUUFBTUUsV0FBVyx5QkFBVUgsSUFBVixDQUFqQjtBQUNBLFFBQU1QLEtBQUksY0FBSixHQUFxQixxQkFBTSxFQUFOLEVBQVVTLFFBQVYsRUFBb0JDLFFBQXBCLENBQTNCOztBQUVBLFdBQU9WLElBQVA7QUFDSCxDQU5EOztBQVFBOzs7O0FBSUEsSUFBTVcsUUFBTyxtQkFBUCxHQUE2QixTQUE3QkEsT0FBNkIsQ0FBQ1gsSUFBRDtBQUFBLFdBQVVBLElBQVY7QUFBQSxDQUFuQzs7QUFFQTs7Ozs7O0FBTUEsSUFBTVksTUFBSSxnQkFBSixHQUF1QixTQUF2QkEsS0FBdUIsQ0FBQ1osSUFBRDtBQUFBLFdBQVVBLElBQVY7QUFBQSxDQUE3Qjs7QUFFQTtBQUNBOztrQkFFZTtBQUNYWSxVQUFNLGNBQUNsQixFQUFELEVBQW1CO0FBQUEsWUFBZGEsSUFBYyx1RUFBUCxFQUFPOztBQUNyQixZQUFNUCxLQUFJLGNBQUosR0FBcUJNLFFBQVFDLElBQVIsRUFBY2QsUUFBZCxDQUEzQjs7QUFFQTtBQUNBTyxhQUFLTixFQUFMLEdBQVVBLEVBQVY7QUFDQU0sYUFBS0wsR0FBTCxHQUFXWSxLQUFLWixHQUFMLElBQVlLLEtBQUtMLEdBQTVCO0FBQ0FLLGFBQUtKLEtBQUwsR0FBYVcsS0FBS1gsS0FBTCxJQUFjSSxLQUFLSixLQUFoQzs7QUFFQSxlQUFRLENBQUNGLEVBQUYsR0FBUU0sSUFBUixHQUFlWSxNQUFLWixJQUFMLENBQXRCO0FBQ0gsS0FWVTtBQVdYTSxvQkFYVyxFQVdGUCxjQVhFLEVBV01ZO0FBWE4sQyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqLy8qIDo6IGltcG9ydCB0eXBlIHtDb21wLCBUbXBsLCBGblJlbmRlciwgRm5EZXN0cm95LCBGbkluaXQsIEZuR2V0Q29tcH0gZnJvbSAnLi9fdGVzdC9jb21tb24uZmxvdy5qcycgKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwLmpzJztcbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gvbWVyZ2UuanMnO1xuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgICBlbDogbnVsbCxcbiAgICBlbHM6IHt9LFxuICAgIGNvbXBzOiB7fSxcbiAgICBzdGF0ZToge30sXG4gICAgdG1wbDogbnVsbFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIFJlbmRlcnNcbiAqIEBwYXJhbSAge29iamVjdH0gY29tcFxuICogQHBhcmFtICB7b2JqZWN0fSBzdGF0ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCByZW5kZXIvKiA6OiA6Rm5SZW5kZXIqLyA9IChjb21wLCBzdGF0ZSkgPT4ge1xuICAgIGxldCB0bXBsLyogOjogOlRtcGwgKi8gPSBjb21wLnRtcGw7XG5cbiAgICAvLyBDYWNoZSB0aGUgZGF0YVxuICAgIC8vIFRPRE86IFNob3VsZCB3ZSBjaGVjayBkaWZmcyBpbiBzdGF0ZT9cbiAgICBjb21wLnN0YXRlID0gc3RhdGUgfHwgY29tcC5zdGF0ZTtcblxuICAgIGlmICh0bXBsICYmIHR5cGVvZiB0bXBsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRtcGwgPSB0bXBsKGNvbXAsIGNvbXAuc3RhdGUpO1xuICAgIH1cblxuICAgIGlmICghdG1wbCB8fCB0eXBlb2YgdG1wbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxuXG4gICAgLy8gTWF5YmUgdGhlcmUgYXJlbid0IGNoYW5nZXNcbiAgICBpZiAodG1wbCAhPT0gY29tcC5yZW5kZXJlZFRtcGwpIHtcbiAgICAgICAgLy8gTGV0cyBjYWNoZSB0bXBsIGZvciBmdXR1cmUgdXNhZ2UuLi5cbiAgICAgICAgY29tcC5yZW5kZXJlZFRtcGwgPSB0bXBsO1xuXG4gICAgICAgIGlmIChjb21wLmVsKSB7XG4gICAgICAgICAgICBsZXQgZWwgPSBjb21wLmVsO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuZWwgIT09ICdvYmplY3QnIHx8ICFjb21wLmVsLmhhc093blByb3BlcnR5KCdsZW5ndGgnKSkge1xuICAgICAgICAgICAgICAgIGVsID0gW2VsXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGVsW2ldLmlubmVySHRtbCA9IHRtcGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbn07XG5cbi8qKlxuICogR2V0cyBjb21wIG9iamVjdFxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0gIHtvYmplY3R9IERFRkFVTFRTXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmNvbnN0IGdldENvbXAvKiA6OiA6Rm5HZXRDb21wKi8gPSAoZGF0YSA9IHt9LCBERUZBVUxUU19DT01QID0ge30pID0+IHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IGNsb25lRGVlcChERUZBVUxUU19DT01QKTtcbiAgICBjb25zdCBjb21wRGF0YSA9IGNsb25lRGVlcChkYXRhKTtcbiAgICBjb25zdCBjb21wLyogOjogOkNvbXAgKi8gPSBtZXJnZSh7fSwgZGVmYXVsdHMsIGNvbXBEYXRhKTtcblxuICAgIHJldHVybiBjb21wO1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyBjb21wb25lbnRcbiAqIEBwYXJhbSAge29iamVjdH0gY29tcFxuICovXG5jb25zdCBkZXN0cm95LyogOjogOkZuRGVzdHJveSAqLyA9IChjb21wKSA9PiBjb21wO1xuXG4vKipcbiAqIEluaXRpYWxpemVzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmNvbnN0IGluaXQvKiA6OiA6Rm5Jbml0ICovID0gKGNvbXApID0+IGNvbXA7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IChlbCwgZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXAvKiA6OiA6Q29tcCAqLyA9IGdldENvbXAoZGF0YSwgREVGQVVMVFMpO1xuXG4gICAgICAgIC8vIE1lcmdlIHdpbGwgbWVzcyB3aXRoIGVsZW1lbnRzXG4gICAgICAgIGNvbXAuZWwgPSBlbDtcbiAgICAgICAgY29tcC5lbHMgPSBkYXRhLmVscyB8fCBjb21wLmVscztcbiAgICAgICAgY29tcC5jb21wcyA9IGRhdGEuY29tcHMgfHwgY29tcC5jb21wcztcblxuICAgICAgICByZXR1cm4gKCFlbCkgPyBjb21wIDogaW5pdChjb21wKTtcbiAgICB9LFxuICAgIGdldENvbXAsIHJlbmRlciwgZGVzdHJveVxufTtcbiJdfQ==