/* :: import type {Actions, FnInit} from './_test/actions.flow.js'; */
'use strict';

// -----------------------------------------
// Functions

/**
 * Initializes actions with a store
 * @param  {*} store
 * @param  {object} actions
 * @return {object}
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var init /* :: :FnInit */ = function init(store, actions) {
    var keys /* :: :string[] */ = Object.keys(actions);
    var newActions /* :: :Actions */ = {};

    for (var i /* :: :number */ = 0; i < keys.length; i += 1) {
        newActions[keys[i]] = actions[keys[i]](store);
    }

    return newActions;
};

// --------------------------------
// Export

exports.default = { init: init };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImluaXQiLCJzdG9yZSIsImFjdGlvbnMiLCJrZXlzIiwiT2JqZWN0IiwibmV3QWN0aW9ucyIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQU1BLElBQU1BLEtBQUksZ0JBQUosR0FBdUIsU0FBdkJBLElBQXVCLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUM3QyxRQUFNQyxLQUFJLGtCQUFKLEdBQXlCQyxPQUFPRCxJQUFQLENBQVlELE9BQVosQ0FBL0I7QUFDQSxRQUFNRyxXQUFVLGlCQUFWLEdBQThCLEVBQXBDOztBQUVBLFNBQUssSUFBSUMsRUFBQyxnQkFBRCxHQUFvQixDQUE3QixFQUFnQ0EsSUFBSUgsS0FBS0ksTUFBekMsRUFBaURELEtBQUssQ0FBdEQsRUFBeUQ7QUFDckRELG1CQUFXRixLQUFLRyxDQUFMLENBQVgsSUFBc0JKLFFBQVFDLEtBQUtHLENBQUwsQ0FBUixFQUFpQkwsS0FBakIsQ0FBdEI7QUFDSDs7QUFFRCxXQUFPSSxVQUFQO0FBQ0gsQ0FURDs7QUFXQTtBQUNBOztrQkFFZSxFQUFFTCxVQUFGLEUiLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovLyogOjogaW1wb3J0IHR5cGUge0FjdGlvbnMsIEZuSW5pdH0gZnJvbSAnLi9fdGVzdC9hY3Rpb25zLmZsb3cuanMnOyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYWN0aW9ucyB3aXRoIGEgc3RvcmVcbiAqIEBwYXJhbSAgeyp9IHN0b3JlXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFjdGlvbnNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuY29uc3QgaW5pdC8qIDo6IDpGbkluaXQgKi8gPSAoc3RvcmUsIGFjdGlvbnMpID0+IHtcbiAgICBjb25zdCBrZXlzLyogOjogOnN0cmluZ1tdICovID0gT2JqZWN0LmtleXMoYWN0aW9ucyk7XG4gICAgY29uc3QgbmV3QWN0aW9ucy8qIDo6IDpBY3Rpb25zICovID0ge307XG5cbiAgICBmb3IgKGxldCBpLyogOjogOm51bWJlciAqLyA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIG5ld0FjdGlvbnNba2V5c1tpXV0gPSBhY3Rpb25zW2tleXNbaV1dKHN0b3JlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3QWN0aW9ucztcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG4iXX0=