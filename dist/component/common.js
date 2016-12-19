'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
var render = function render(comp, state) {
    var tmpl = comp.tmpl;

    // Cache the data
    // TODO: Should we check diffs in state?
    comp.state = state || comp.state;

    if (tmpl && typeof tmpl === 'function') {
        tmpl = tmpl(comp, comp.state);
    }

    if (!tmpl || typeof tmpl !== 'string') {
        return null;
    }

    // Maybe there aren't changes
    if (tmpl !== comp.renderedTmpl) {
        // Lets cache tmpl for future usage...
        comp.renderedTmpl = tmpl;

        return tmpl;
    }

    return null;
};

/**
 * Gets comp object
 * @param  {object} data
 * @param  {object} DEFAULTS
 * @return {object}
 */
var getComp = function getComp() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var DEFAULTS_COMP = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var defaults = (0, _cloneDeep2.default)(DEFAULTS_COMP);
    var compData = (0, _cloneDeep2.default)(data);

    return (0, _merge2.default)({}, defaults, compData);
};

/**
 * Destroys component
 * @param  {object} comp
 */
var destroy = function destroy(comp) {
    return comp;
};

/**
 * Initializes
 *
 * @param {object} comp
 * @returns {object}
 */
var _init = function _init(comp) {
    return comp;
};

// --------------------------------
// Export

exports.default = {
    init: function init(el) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var comp = getComp(data, DEFAULTS);

        // Merge will mess with elements
        comp.el = el;
        comp.els = data.els || comp.els;
        comp.comps = data.comps || comp.comps;

        return !el ? comp : _init(comp);
    },
    getComp: getComp, render: render, destroy: destroy
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvY29tbW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRTIiwiZWwiLCJlbHMiLCJjb21wcyIsInN0YXRlIiwidG1wbCIsInJlbmRlciIsImNvbXAiLCJyZW5kZXJlZFRtcGwiLCJnZXRDb21wIiwiZGF0YSIsIkRFRkFVTFRTX0NPTVAiLCJkZWZhdWx0cyIsImNvbXBEYXRhIiwiZGVzdHJveSIsImluaXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXO0FBQ2JDLFFBQUksSUFEUztBQUViQyxTQUFLLEVBRlE7QUFHYkMsV0FBTyxFQUhNO0FBSWJDLFdBQU8sRUFKTTtBQUtiQyxVQUFNO0FBTE8sQ0FBakI7O0FBUUE7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0gsS0FBUCxFQUFpQjtBQUM1QixRQUFJQyxPQUFPRSxLQUFLRixJQUFoQjs7QUFFQTtBQUNBO0FBQ0FFLFNBQUtILEtBQUwsR0FBYUEsU0FBU0csS0FBS0gsS0FBM0I7O0FBRUEsUUFBSUMsUUFBUSxPQUFPQSxJQUFQLEtBQWdCLFVBQTVCLEVBQXdDO0FBQ3BDQSxlQUFPQSxLQUFLRSxJQUFMLEVBQVdBLEtBQUtILEtBQWhCLENBQVA7QUFDSDs7QUFFRCxRQUFJLENBQUNDLElBQUQsSUFBUyxPQUFPQSxJQUFQLEtBQWdCLFFBQTdCLEVBQXVDO0FBQ25DLGVBQU8sSUFBUDtBQUNIOztBQUVEO0FBQ0EsUUFBSUEsU0FBU0UsS0FBS0MsWUFBbEIsRUFBZ0M7QUFDNUI7QUFDQUQsYUFBS0MsWUFBTCxHQUFvQkgsSUFBcEI7O0FBRUEsZUFBT0EsSUFBUDtBQUNIOztBQUVELFdBQU8sSUFBUDtBQUNILENBeEJEOztBQTBCQTs7Ozs7O0FBTUEsSUFBTUksVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsUUFBbENDLElBQWtDLHVFQUEzQixFQUEyQjtBQUFBLFFBQXZCQyxhQUF1Qix1RUFBUCxFQUFPOztBQUMvQyxRQUFNQyxXQUFXLHlCQUFVRCxhQUFWLENBQWpCO0FBQ0EsUUFBTUUsV0FBVyx5QkFBVUgsSUFBVixDQUFqQjs7QUFFQSxXQUFPLHFCQUFNLEVBQU4sRUFBVUUsUUFBVixFQUFvQkMsUUFBcEIsQ0FBUDtBQUNILENBTEQ7O0FBT0E7Ozs7QUFJQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ1AsSUFBRDtBQUFBLFdBQVVBLElBQVY7QUFBQSxDQUFoQjs7QUFFQTs7Ozs7O0FBTUEsSUFBTVEsUUFBTyxTQUFQQSxLQUFPLENBQUNSLElBQUQ7QUFBQSxXQUFVQSxJQUFWO0FBQUEsQ0FBYjs7QUFFQTtBQUNBOztrQkFFZTtBQUNYUSxVQUFNLGNBQUNkLEVBQUQsRUFBbUI7QUFBQSxZQUFkUyxJQUFjLHVFQUFQLEVBQU87O0FBQ3JCLFlBQU1ILE9BQU9FLFFBQVFDLElBQVIsRUFBY1YsUUFBZCxDQUFiOztBQUVBO0FBQ0FPLGFBQUtOLEVBQUwsR0FBVUEsRUFBVjtBQUNBTSxhQUFLTCxHQUFMLEdBQVdRLEtBQUtSLEdBQUwsSUFBWUssS0FBS0wsR0FBNUI7QUFDQUssYUFBS0osS0FBTCxHQUFhTyxLQUFLUCxLQUFMLElBQWNJLEtBQUtKLEtBQWhDOztBQUVBLGVBQVEsQ0FBQ0YsRUFBRixHQUFRTSxJQUFSLEdBQWVRLE1BQUtSLElBQUwsQ0FBdEI7QUFDSCxLQVZVO0FBV1hFLG9CQVhXLEVBV0ZILGNBWEUsRUFXTVE7QUFYTixDIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwLmpzJztcbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gvbWVyZ2UuanMnO1xuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgICBlbDogbnVsbCxcbiAgICBlbHM6IHt9LFxuICAgIGNvbXBzOiB7fSxcbiAgICBzdGF0ZToge30sXG4gICAgdG1wbDogbnVsbFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIFJlbmRlcnNcbiAqIEBwYXJhbSAge29iamVjdH0gY29tcFxuICogQHBhcmFtICB7b2JqZWN0fSBzdGF0ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCByZW5kZXIgPSAoY29tcCwgc3RhdGUpID0+IHtcbiAgICBsZXQgdG1wbCA9IGNvbXAudG1wbDtcblxuICAgIC8vIENhY2hlIHRoZSBkYXRhXG4gICAgLy8gVE9ETzogU2hvdWxkIHdlIGNoZWNrIGRpZmZzIGluIHN0YXRlP1xuICAgIGNvbXAuc3RhdGUgPSBzdGF0ZSB8fCBjb21wLnN0YXRlO1xuXG4gICAgaWYgKHRtcGwgJiYgdHlwZW9mIHRtcGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdG1wbCA9IHRtcGwoY29tcCwgY29tcC5zdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCF0bXBsIHx8IHR5cGVvZiB0bXBsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBNYXliZSB0aGVyZSBhcmVuJ3QgY2hhbmdlc1xuICAgIGlmICh0bXBsICE9PSBjb21wLnJlbmRlcmVkVG1wbCkge1xuICAgICAgICAvLyBMZXRzIGNhY2hlIHRtcGwgZm9yIGZ1dHVyZSB1c2FnZS4uLlxuICAgICAgICBjb21wLnJlbmRlcmVkVG1wbCA9IHRtcGw7XG5cbiAgICAgICAgcmV0dXJuIHRtcGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldHMgY29tcCBvYmplY3RcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICogQHBhcmFtICB7b2JqZWN0fSBERUZBVUxUU1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5jb25zdCBnZXRDb21wID0gKGRhdGEgPSB7fSwgREVGQVVMVFNfQ09NUCA9IHt9KSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBjbG9uZURlZXAoREVGQVVMVFNfQ09NUCk7XG4gICAgY29uc3QgY29tcERhdGEgPSBjbG9uZURlZXAoZGF0YSk7XG5cbiAgICByZXR1cm4gbWVyZ2Uoe30sIGRlZmF1bHRzLCBjb21wRGF0YSk7XG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICogQHBhcmFtICB7b2JqZWN0fSBjb21wXG4gKi9cbmNvbnN0IGRlc3Ryb3kgPSAoY29tcCkgPT4gY29tcDtcblxuLyoqXG4gKiBJbml0aWFsaXplc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5jb25zdCBpbml0ID0gKGNvbXApID0+IGNvbXA7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IChlbCwgZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXAgPSBnZXRDb21wKGRhdGEsIERFRkFVTFRTKTtcblxuICAgICAgICAvLyBNZXJnZSB3aWxsIG1lc3Mgd2l0aCBlbGVtZW50c1xuICAgICAgICBjb21wLmVsID0gZWw7XG4gICAgICAgIGNvbXAuZWxzID0gZGF0YS5lbHMgfHwgY29tcC5lbHM7XG4gICAgICAgIGNvbXAuY29tcHMgPSBkYXRhLmNvbXBzIHx8IGNvbXAuY29tcHM7XG5cbiAgICAgICAgcmV0dXJuICghZWwpID8gY29tcCA6IGluaXQoY29tcCk7XG4gICAgfSxcbiAgICBnZXRDb21wLCByZW5kZXIsIGRlc3Ryb3lcbn07XG4iXX0=