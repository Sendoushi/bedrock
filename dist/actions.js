/* :: import type {Actions, Init} from './_test/actions.flow.js'; */
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
var init /* :: :Init */ = function init(store, actions) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImluaXQiLCJzdG9yZSIsImFjdGlvbnMiLCJrZXlzIiwiT2JqZWN0IiwibmV3QWN0aW9ucyIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQU1BLElBQU1BLEtBQUksY0FBSixHQUFxQixTQUFyQkEsSUFBcUIsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQzNDLFFBQU1DLEtBQUksa0JBQUosR0FBeUJDLE9BQU9ELElBQVAsQ0FBWUQsT0FBWixDQUEvQjtBQUNBLFFBQU1HLFdBQVUsaUJBQVYsR0FBOEIsRUFBcEM7O0FBRUEsU0FBSyxJQUFJQyxFQUFDLGdCQUFELEdBQW9CLENBQTdCLEVBQWdDQSxJQUFJSCxLQUFLSSxNQUF6QyxFQUFpREQsS0FBSyxDQUF0RCxFQUF5RDtBQUNyREQsbUJBQVdGLEtBQUtHLENBQUwsQ0FBWCxJQUFzQkosUUFBUUMsS0FBS0csQ0FBTCxDQUFSLEVBQWlCTCxLQUFqQixDQUF0QjtBQUNIOztBQUVELFdBQU9JLFVBQVA7QUFDSCxDQVREOztBQVdBO0FBQ0E7O2tCQUVlLEVBQUVMLFVBQUYsRSIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi8vKiA6OiBpbXBvcnQgdHlwZSB7QWN0aW9ucywgSW5pdH0gZnJvbSAnLi9fdGVzdC9hY3Rpb25zLmZsb3cuanMnOyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYWN0aW9ucyB3aXRoIGEgc3RvcmVcbiAqIEBwYXJhbSAgeyp9IHN0b3JlXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFjdGlvbnNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuY29uc3QgaW5pdC8qIDo6IDpJbml0ICovID0gKHN0b3JlLCBhY3Rpb25zKSA9PiB7XG4gICAgY29uc3Qga2V5cy8qIDo6IDpzdHJpbmdbXSAqLyA9IE9iamVjdC5rZXlzKGFjdGlvbnMpO1xuICAgIGNvbnN0IG5ld0FjdGlvbnMvKiA6OiA6QWN0aW9ucyAqLyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaS8qIDo6IDpudW1iZXIgKi8gPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBuZXdBY3Rpb25zW2tleXNbaV1dID0gYWN0aW9uc1trZXlzW2ldXShzdG9yZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0FjdGlvbnM7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuIl19