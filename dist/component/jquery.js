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
    return _common2.default.render(comp.tmpl, state);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvanF1ZXJ5LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRTIiwiZWwiLCJ0bXBsIiwicmVuZGVyIiwiY29tcCIsInN0YXRlIiwiZGVzdHJveSIsImVtcHR5IiwiaW5pdCIsImRhdGEiLCJnZXRDb21wIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLFdBQVc7QUFDYkMsUUFBSSxJQURTO0FBRWJDLFVBQU07QUFGTyxDQUFqQjs7QUFLQTtBQUNBOztBQUVBOzs7Ozs7QUFNQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FBaUIsaUJBQU9GLE1BQVAsQ0FBY0MsS0FBS0YsSUFBbkIsRUFBeUJHLEtBQXpCLENBQWpCO0FBQUEsQ0FBZjs7QUFFQTs7Ozs7QUFLQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0YsSUFBRCxFQUFVO0FBQ3RCLHFCQUFPRSxPQUFQLENBQWVGLElBQWY7O0FBRUE7QUFDQUEsU0FBS0YsSUFBTCxJQUFhRSxLQUFLSCxFQUFsQixJQUF3QkcsS0FBS0gsRUFBTCxDQUFRTSxLQUFSLEVBQXhCOztBQUVBLFdBQU9ILElBQVA7QUFDSCxDQVBEOztBQVNBOzs7Ozs7QUFNQSxJQUFNSSxRQUFPLFNBQVBBLEtBQU8sQ0FBQ0osSUFBRDtBQUFBLFdBQVVBLElBQVY7QUFBQSxDQUFiOztBQUVBO0FBQ0E7O2tCQUVlO0FBQ1hJLFVBQU0sY0FBQ1AsRUFBRCxFQUFLUSxJQUFMLEVBQWM7QUFDaEIsWUFBSUwsT0FBTyxpQkFBT00sT0FBUCxDQUFlRCxJQUFmLEVBQXFCVCxRQUFyQixDQUFYO0FBQ0FJLGVBQU8saUJBQU9JLElBQVAsQ0FBWVAsRUFBWixFQUFnQkcsSUFBaEIsQ0FBUDs7QUFFQSxlQUFRLENBQUNILEVBQUQsSUFBTyxDQUFDQSxHQUFHVSxNQUFaLEdBQXNCUCxJQUF0QixHQUE2QkksTUFBS0osSUFBTCxDQUFwQztBQUNILEtBTlU7QUFPWE0sYUFBUyxpQkFBT0EsT0FQTDtBQVFYUCxrQkFSVyxFQVFIRztBQVJHLEMiLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uLmpzJztcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gICAgZWw6IG51bGwsXG4gICAgdG1wbDogbnVsbFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIFJlbmRlcnNcbiAqIEBwYXJhbSAge29iamVjdH0gY29tcFxuICogQHBhcmFtICB7b2JqZWN0fSBzdGF0ZVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5jb25zdCByZW5kZXIgPSAoY29tcCwgc3RhdGUpID0+IGNvbW1vbi5yZW5kZXIoY29tcC50bXBsLCBzdGF0ZSk7XG5cbi8qKlxuICogRGVzdHJveXMgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbXBcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmNvbnN0IGRlc3Ryb3kgPSAoY29tcCkgPT4ge1xuICAgIGNvbW1vbi5kZXN0cm95KGNvbXApO1xuXG4gICAgLy8gTGV0cyBpbmZvcm0hXG4gICAgY29tcC50bXBsICYmIGNvbXAuZWwgJiYgY29tcC5lbC5lbXB0eSgpO1xuXG4gICAgcmV0dXJuIGNvbXA7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmNvbnN0IGluaXQgPSAoY29tcCkgPT4gY29tcDtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogKGVsLCBkYXRhKSA9PiB7XG4gICAgICAgIGxldCBjb21wID0gY29tbW9uLmdldENvbXAoZGF0YSwgREVGQVVMVFMpO1xuICAgICAgICBjb21wID0gY29tbW9uLmluaXQoZWwsIGNvbXApO1xuXG4gICAgICAgIHJldHVybiAoIWVsIHx8ICFlbC5sZW5ndGgpID8gY29tcCA6IGluaXQoY29tcCk7XG4gICAgfSxcbiAgICBnZXRDb21wOiBjb21tb24uZ2V0Q29tcCxcbiAgICByZW5kZXIsIGRlc3Ryb3lcbn07XG4iXX0=