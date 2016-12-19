'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require('./common.js');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULTS = {
    el: null,
    tmpl: null
};

// -----------------------------------------
// Functions

/**
 * Renders
 * @param  {object} comp
 * @param  {object} state
 * @return {object}
 */
var render = function render(comp, state) {
    var tmpl = _common2.default.render(comp.tmpl, state);

    // Maybe there weren't any changes
    if (!tmpl || typeof tmpl !== 'string') {
        return comp;
    }

    // Lets set now!
    comp.el && tmpl && comp.el.html(tmpl);

    return comp;
};

/**
 * Destroys component
 * @param  {object} comp
 * @returns {object}
 */
var destroy = function destroy(comp) {
    _common2.default.destroy(comp);

    // Lets inform!
    comp.tmpl && comp.el && comp.el.empty();

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
    init: function init(el, data) {
        var comp = _common2.default.getComp(data, DEFAULTS);
        comp = _common2.default.init(el, comp);

        return !el || !el.length ? comp : _init(comp);
    },
    getComp: _common2.default.getComp,
    render: render, destroy: destroy
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvanF1ZXJ5LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRTIiwiZWwiLCJ0bXBsIiwicmVuZGVyIiwiY29tcCIsInN0YXRlIiwiaHRtbCIsImRlc3Ryb3kiLCJlbXB0eSIsImluaXQiLCJkYXRhIiwiZ2V0Q29tcCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXO0FBQ2JDLFFBQUksSUFEUztBQUViQyxVQUFNO0FBRk8sQ0FBakI7O0FBS0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QixRQUFNSCxPQUFPLGlCQUFPQyxNQUFQLENBQWNDLEtBQUtGLElBQW5CLEVBQXlCRyxLQUF6QixDQUFiOztBQUVBO0FBQ0EsUUFBSSxDQUFDSCxJQUFELElBQVMsT0FBT0EsSUFBUCxLQUFnQixRQUE3QixFQUF1QztBQUNuQyxlQUFPRSxJQUFQO0FBQ0g7O0FBRUQ7QUFDQUEsU0FBS0gsRUFBTCxJQUFXQyxJQUFYLElBQW1CRSxLQUFLSCxFQUFMLENBQVFLLElBQVIsQ0FBYUosSUFBYixDQUFuQjs7QUFFQSxXQUFPRSxJQUFQO0FBQ0gsQ0FaRDs7QUFjQTs7Ozs7QUFLQSxJQUFNRyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0gsSUFBRCxFQUFVO0FBQ3RCLHFCQUFPRyxPQUFQLENBQWVILElBQWY7O0FBRUE7QUFDQUEsU0FBS0YsSUFBTCxJQUFhRSxLQUFLSCxFQUFsQixJQUF3QkcsS0FBS0gsRUFBTCxDQUFRTyxLQUFSLEVBQXhCOztBQUVBLFdBQU9KLElBQVA7QUFDSCxDQVBEOztBQVNBOzs7Ozs7QUFNQSxJQUFNSyxRQUFPLFNBQVBBLEtBQU8sQ0FBQ0wsSUFBRDtBQUFBLFdBQVVBLElBQVY7QUFBQSxDQUFiOztBQUVBO0FBQ0E7O2tCQUVlO0FBQ1hLLFVBQU0sY0FBQ1IsRUFBRCxFQUFLUyxJQUFMLEVBQWM7QUFDaEIsWUFBSU4sT0FBTyxpQkFBT08sT0FBUCxDQUFlRCxJQUFmLEVBQXFCVixRQUFyQixDQUFYO0FBQ0FJLGVBQU8saUJBQU9LLElBQVAsQ0FBWVIsRUFBWixFQUFnQkcsSUFBaEIsQ0FBUDs7QUFFQSxlQUFRLENBQUNILEVBQUQsSUFBTyxDQUFDQSxHQUFHVyxNQUFaLEdBQXNCUixJQUF0QixHQUE2QkssTUFBS0wsSUFBTCxDQUFwQztBQUNILEtBTlU7QUFPWE8sYUFBUyxpQkFBT0EsT0FQTDtBQVFYUixrQkFSVyxFQVFISTtBQVJHLEMiLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uLmpzJztcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gICAgZWw6IG51bGwsXG4gICAgdG1wbDogbnVsbFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIFJlbmRlcnNcbiAqIEBwYXJhbSAge29iamVjdH0gY29tcFxuICogQHBhcmFtICB7b2JqZWN0fSBzdGF0ZVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5jb25zdCByZW5kZXIgPSAoY29tcCwgc3RhdGUpID0+IHtcbiAgICBjb25zdCB0bXBsID0gY29tbW9uLnJlbmRlcihjb21wLnRtcGwsIHN0YXRlKTtcblxuICAgIC8vIE1heWJlIHRoZXJlIHdlcmVuJ3QgYW55IGNoYW5nZXNcbiAgICBpZiAoIXRtcGwgfHwgdHlwZW9mIHRtcGwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjb21wO1xuICAgIH1cblxuICAgIC8vIExldHMgc2V0IG5vdyFcbiAgICBjb21wLmVsICYmIHRtcGwgJiYgY29tcC5lbC5odG1sKHRtcGwpO1xuXG4gICAgcmV0dXJuIGNvbXA7XG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICogQHBhcmFtICB7b2JqZWN0fSBjb21wXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5jb25zdCBkZXN0cm95ID0gKGNvbXApID0+IHtcbiAgICBjb21tb24uZGVzdHJveShjb21wKTtcblxuICAgIC8vIExldHMgaW5mb3JtIVxuICAgIGNvbXAudG1wbCAmJiBjb21wLmVsICYmIGNvbXAuZWwuZW1wdHkoKTtcblxuICAgIHJldHVybiBjb21wO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5jb25zdCBpbml0ID0gKGNvbXApID0+IGNvbXA7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IChlbCwgZGF0YSkgPT4ge1xuICAgICAgICBsZXQgY29tcCA9IGNvbW1vbi5nZXRDb21wKGRhdGEsIERFRkFVTFRTKTtcbiAgICAgICAgY29tcCA9IGNvbW1vbi5pbml0KGVsLCBjb21wKTtcblxuICAgICAgICByZXR1cm4gKCFlbCB8fCAhZWwubGVuZ3RoKSA/IGNvbXAgOiBpbml0KGNvbXApO1xuICAgIH0sXG4gICAgZ2V0Q29tcDogY29tbW9uLmdldENvbXAsXG4gICAgcmVuZGVyLCBkZXN0cm95XG59O1xuIl19