'use strict';

// -----------------------------------------
// Functions

/**
 * Initializes actions with a store
 * @param  {*} store
 * @param  {object} actions
 * @return {object}
 */
// { title: 'store', properties: {}, required: true },
// { title: 'actions', properties: {}, required: true }

Object.defineProperty(exports, "__esModule", {
    value: true
});
var init = function init(store, actions) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImluaXQiLCJzdG9yZSIsImFjdGlvbnMiLCJrZXlzIiwiT2JqZWN0IiwibmV3QWN0aW9ucyIsImkiLCJsZW5ndGgiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQTs7Ozs7QUFDQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQzdCLFFBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUQsT0FBWixDQUFiO0FBQ0EsUUFBTUcsYUFBYSxFQUFuQjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsS0FBS0ksTUFBekIsRUFBaUNELEtBQUssQ0FBdEMsRUFBeUM7QUFDckMsWUFBSSxPQUFPSixRQUFRQyxLQUFLRyxDQUFMLENBQVIsQ0FBUCxLQUE0QixVQUFoQyxFQUE0QztBQUN4QyxrQkFBTSxJQUFJRSxLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUNIOztBQUVESCxtQkFBV0YsS0FBS0csQ0FBTCxDQUFYLElBQXNCSixRQUFRQyxLQUFLRyxDQUFMLENBQVIsRUFBaUJMLEtBQWpCLENBQXRCO0FBQ0g7O0FBRUQsV0FBT0ksVUFBUDtBQUNILENBYkQ7O0FBZUE7QUFDQTs7a0JBRWUsRUFBRUwsVUFBRixFIiwiZmlsZSI6ImFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhY3Rpb25zIHdpdGggYSBzdG9yZVxuICogQHBhcmFtICB7Kn0gc3RvcmVcbiAqIEBwYXJhbSAge29iamVjdH0gYWN0aW9uc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG4vLyB7IHRpdGxlOiAnc3RvcmUnLCBwcm9wZXJ0aWVzOiB7fSwgcmVxdWlyZWQ6IHRydWUgfSxcbi8vIHsgdGl0bGU6ICdhY3Rpb25zJywgcHJvcGVydGllczoge30sIHJlcXVpcmVkOiB0cnVlIH1cbmNvbnN0IGluaXQgPSAoc3RvcmUsIGFjdGlvbnMpID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9ucyk7XG4gICAgY29uc3QgbmV3QWN0aW9ucyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uc1trZXlzW2ldXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gbmVlZHMgdG8gYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3QWN0aW9uc1trZXlzW2ldXSA9IGFjdGlvbnNba2V5c1tpXV0oc3RvcmUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdBY3Rpb25zO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcbiJdfQ==