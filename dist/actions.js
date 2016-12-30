'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


// -----------------------------------------
// Functions

/**
 * Initializes actions with a store
 * @param  {*} store
 * @param  {object} actions
 * @return {object}
 */
var initValidate = void 0;
var init = function init(store, actions) {
    initValidate([store, actions]);

    var keys = Object.keys(actions);
    var newActions = {};

    for (var i = 0; i < keys.length; i += 1) {
        if (typeof actions[keys[i]] !== 'function') {
            throw new Error('Action needs to be a function');
        }

        newActions[keys[i]] = actions[keys[i]](store);
    }

    return newActions;
};

// --------------------------------
// Export

exports.default = { init: init };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImluaXRWYWxpZGF0ZSIsImluaXQiLCJzdG9yZSIsImFjdGlvbnMiLCJrZXlzIiwiT2JqZWN0IiwibmV3QWN0aW9ucyIsImkiLCJsZW5ndGgiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFJQTtBQUNBOztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxxQkFBTjtBQUlBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDN0JILGlCQUFhLENBQUNFLEtBQUQsRUFBUUMsT0FBUixDQUFiOztBQUVBLFFBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUQsT0FBWixDQUFiO0FBQ0EsUUFBTUcsYUFBYSxFQUFuQjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsS0FBS0ksTUFBekIsRUFBaUNELEtBQUssQ0FBdEMsRUFBeUM7QUFDckMsWUFBSSxPQUFPSixRQUFRQyxLQUFLRyxDQUFMLENBQVIsQ0FBUCxLQUE0QixVQUFoQyxFQUE0QztBQUN4QyxrQkFBTSxJQUFJRSxLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUNIOztBQUVESCxtQkFBV0YsS0FBS0csQ0FBTCxDQUFYLElBQXNCSixRQUFRQyxLQUFLRyxDQUFMLENBQVIsRUFBaUJMLEtBQWpCLENBQXRCO0FBQ0g7O0FBRUQsV0FBT0ksVUFBUDtBQUNILENBZkQ7O0FBaUJBO0FBQ0E7O2tCQUVlLEVBQUVMLFVBQUYsRSIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBjb21waWxlU2NoZW1hLCBnZXRTY2hlbWEgfSBmcm9tICdiZWRyb2NrLXV0aWxzL3NyYy92YWxpZGF0ZS5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhY3Rpb25zIHdpdGggYSBzdG9yZVxuICogQHBhcmFtICB7Kn0gc3RvcmVcbiAqIEBwYXJhbSAge29iamVjdH0gYWN0aW9uc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5jb25zdCBpbml0VmFsaWRhdGUgPSBjb21waWxlU2NoZW1hKGdldFNjaGVtYShbXG4gICAgeyB0aXRsZTogJ3N0b3JlJywgcHJvcGVydGllczoge30sIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgeyB0aXRsZTogJ2FjdGlvbnMnLCBwcm9wZXJ0aWVzOiB7fSwgcmVxdWlyZWQ6IHRydWUgfVxuXSkpO1xuY29uc3QgaW5pdCA9IChzdG9yZSwgYWN0aW9ucykgPT4ge1xuICAgIGluaXRWYWxpZGF0ZShbc3RvcmUsIGFjdGlvbnNdKTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhY3Rpb25zKTtcbiAgICBjb25zdCBuZXdBY3Rpb25zID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25zW2tleXNbaV1dICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBuZWVkcyB0byBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdBY3Rpb25zW2tleXNbaV1dID0gYWN0aW9uc1trZXlzW2ldXShzdG9yZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0FjdGlvbnM7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuIl19