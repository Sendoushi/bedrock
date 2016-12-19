'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _merge = require('lodash/merge.js');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -----------------------------------------
// Functions

/**
 * Sets crumb in breadcrumb
 * @param  {array} breadcrumb
 * @param  {object} crumb
 * @return {array}
 */
var pushCrumb = function pushCrumb() {
    var breadcrumb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var crumb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var params = crumb.params;
    var type = crumb.type;
    var name = crumb.name;

    // Add the type without parentType
    if (!!type && !!name) {
        breadcrumb.push({ name: name, routeType: type, params: params });
    }

    return breadcrumb;
};

/**
 * Set content related
 * @param  {object} action
 * @param  {object} schema
 * @return {array}
 */
var setContent = function setContent(action, schema) {
    var params = action.content.params;
    var breadcrumb = [];
    var type = action.content.type;
    var breadcrumbType = schema[type] || {};

    // Loop to get all breadcrumbs with parent
    while (breadcrumbType.hasOwnProperty('parentType')) {
        // Set a new breadcrumb
        breadcrumb = pushCrumb(breadcrumb, { name: breadcrumbType && breadcrumbType.name, type: type, params: params });

        // Set the new breadcrumb for the parent
        type = breadcrumbType.parentType;
        breadcrumbType = schema[type];

        if (!breadcrumbType) {
            break;
        }
    }

    // Add the type without parentType
    breadcrumb = pushCrumb(breadcrumb, { name: breadcrumbType && breadcrumbType.name, type: type, params: params });

    // Finally inform of the breadcrumb
    return breadcrumb.reverse();
};

/**
 * Loading reducer maker
 * @param  {array}  INITIAL_STATE
 * @param  {object} BREADCRUMB_SCHEMA
 * @return {function}
 */
var reducer = function reducer() {
    var INITIAL_STATE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var BREADCRUMB_SCHEMA = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        switch (action.type) {
            case 'SET_CONTENT':
                return setContent(action, BREADCRUMB_SCHEMA);
            default:
                return (0, _merge2.default)([], state);
        }
    };
};

// -----------------------------------------
// Export

exports.default = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9icmVhZGNydW1iLmpzIl0sIm5hbWVzIjpbInB1c2hDcnVtYiIsImJyZWFkY3J1bWIiLCJjcnVtYiIsInBhcmFtcyIsInR5cGUiLCJuYW1lIiwicHVzaCIsInJvdXRlVHlwZSIsInNldENvbnRlbnQiLCJhY3Rpb24iLCJzY2hlbWEiLCJjb250ZW50IiwiYnJlYWRjcnVtYlR5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcmVudFR5cGUiLCJyZXZlcnNlIiwicmVkdWNlciIsIklOSVRJQUxfU1RBVEUiLCJCUkVBRENSVU1CX1NDSEVNQSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUE7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BLElBQU1BLFlBQVksU0FBWkEsU0FBWSxHQUFpQztBQUFBLFFBQWhDQyxVQUFnQyx1RUFBbkIsRUFBbUI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEVBQU87O0FBQy9DLFFBQU1DLFNBQVNELE1BQU1DLE1BQXJCO0FBQ0EsUUFBTUMsT0FBT0YsTUFBTUUsSUFBbkI7QUFDQSxRQUFNQyxPQUFPSCxNQUFNRyxJQUFuQjs7QUFFQTtBQUNBLFFBQUksQ0FBQyxDQUFDRCxJQUFGLElBQVUsQ0FBQyxDQUFDQyxJQUFoQixFQUFzQjtBQUNsQkosbUJBQVdLLElBQVgsQ0FBZ0IsRUFBRUQsVUFBRixFQUFRRSxXQUFXSCxJQUFuQixFQUF5QkQsY0FBekIsRUFBaEI7QUFDSDs7QUFFRCxXQUFPRixVQUFQO0FBQ0gsQ0FYRDs7QUFhQTs7Ozs7O0FBTUEsSUFBTU8sYUFBYSxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUNuQyxRQUFNUCxTQUFTTSxPQUFPRSxPQUFQLENBQWVSLE1BQTlCO0FBQ0EsUUFBSUYsYUFBYSxFQUFqQjtBQUNBLFFBQUlHLE9BQU9LLE9BQU9FLE9BQVAsQ0FBZVAsSUFBMUI7QUFDQSxRQUFJUSxpQkFBaUJGLE9BQU9OLElBQVAsS0FBZ0IsRUFBckM7O0FBRUE7QUFDQSxXQUFPUSxlQUFlQyxjQUFmLENBQThCLFlBQTlCLENBQVAsRUFBb0Q7QUFDaEQ7QUFDQVoscUJBQWFELFVBQVVDLFVBQVYsRUFBc0IsRUFBRUksTUFBTU8sa0JBQWtCQSxlQUFlUCxJQUF6QyxFQUErQ0QsVUFBL0MsRUFBcURELGNBQXJELEVBQXRCLENBQWI7O0FBRUE7QUFDQUMsZUFBT1EsZUFBZUUsVUFBdEI7QUFDQUYseUJBQWlCRixPQUFPTixJQUFQLENBQWpCOztBQUVBLFlBQUksQ0FBQ1EsY0FBTCxFQUFxQjtBQUNqQjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQVgsaUJBQWFELFVBQVVDLFVBQVYsRUFBc0IsRUFBRUksTUFBTU8sa0JBQWtCQSxlQUFlUCxJQUF6QyxFQUErQ0QsVUFBL0MsRUFBcURELGNBQXJELEVBQXRCLENBQWI7O0FBRUE7QUFDQSxXQUFPRixXQUFXYyxPQUFYLEVBQVA7QUFDSCxDQXpCRDs7QUEyQkE7Ozs7OztBQU1BLElBQU1DLFVBQVUsU0FBVkEsT0FBVTtBQUFBLFFBQUNDLGFBQUQsdUVBQWlCLEVBQWpCO0FBQUEsUUFBcUJDLGlCQUFyQix1RUFBeUMsRUFBekM7QUFBQSxXQUFnRCxZQUF3QztBQUFBLFlBQXZDQyxLQUF1Qyx1RUFBL0JGLGFBQStCO0FBQUEsWUFBaEJSLE1BQWdCLHVFQUFQLEVBQU87O0FBQ3BHLGdCQUFRQSxPQUFPTCxJQUFmO0FBQ0EsaUJBQUssYUFBTDtBQUNJLHVCQUFPSSxXQUFXQyxNQUFYLEVBQW1CUyxpQkFBbkIsQ0FBUDtBQUNKO0FBQ0ksdUJBQU8scUJBQU0sRUFBTixFQUFVQyxLQUFWLENBQVA7QUFKSjtBQU1ILEtBUGU7QUFBQSxDQUFoQjs7QUFTQTtBQUNBOztrQkFFZUgsTyIsImZpbGUiOiJicmVhZGNydW1iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIFNldHMgY3J1bWIgaW4gYnJlYWRjcnVtYlxuICogQHBhcmFtICB7YXJyYXl9IGJyZWFkY3J1bWJcbiAqIEBwYXJhbSAge29iamVjdH0gY3J1bWJcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5jb25zdCBwdXNoQ3J1bWIgPSAoYnJlYWRjcnVtYiA9IFtdLCBjcnVtYiA9IHt9KSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gY3J1bWIucGFyYW1zO1xuICAgIGNvbnN0IHR5cGUgPSBjcnVtYi50eXBlO1xuICAgIGNvbnN0IG5hbWUgPSBjcnVtYi5uYW1lO1xuXG4gICAgLy8gQWRkIHRoZSB0eXBlIHdpdGhvdXQgcGFyZW50VHlwZVxuICAgIGlmICghIXR5cGUgJiYgISFuYW1lKSB7XG4gICAgICAgIGJyZWFkY3J1bWIucHVzaCh7IG5hbWUsIHJvdXRlVHlwZTogdHlwZSwgcGFyYW1zIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBicmVhZGNydW1iO1xufTtcblxuLyoqXG4gKiBTZXQgY29udGVudCByZWxhdGVkXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFjdGlvblxuICogQHBhcmFtICB7b2JqZWN0fSBzY2hlbWFcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5jb25zdCBzZXRDb250ZW50ID0gKGFjdGlvbiwgc2NoZW1hKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gYWN0aW9uLmNvbnRlbnQucGFyYW1zO1xuICAgIGxldCBicmVhZGNydW1iID0gW107XG4gICAgbGV0IHR5cGUgPSBhY3Rpb24uY29udGVudC50eXBlO1xuICAgIGxldCBicmVhZGNydW1iVHlwZSA9IHNjaGVtYVt0eXBlXSB8fCB7fTtcblxuICAgIC8vIExvb3AgdG8gZ2V0IGFsbCBicmVhZGNydW1icyB3aXRoIHBhcmVudFxuICAgIHdoaWxlIChicmVhZGNydW1iVHlwZS5oYXNPd25Qcm9wZXJ0eSgncGFyZW50VHlwZScpKSB7XG4gICAgICAgIC8vIFNldCBhIG5ldyBicmVhZGNydW1iXG4gICAgICAgIGJyZWFkY3J1bWIgPSBwdXNoQ3J1bWIoYnJlYWRjcnVtYiwgeyBuYW1lOiBicmVhZGNydW1iVHlwZSAmJiBicmVhZGNydW1iVHlwZS5uYW1lLCB0eXBlLCBwYXJhbXMgfSk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBuZXcgYnJlYWRjcnVtYiBmb3IgdGhlIHBhcmVudFxuICAgICAgICB0eXBlID0gYnJlYWRjcnVtYlR5cGUucGFyZW50VHlwZTtcbiAgICAgICAgYnJlYWRjcnVtYlR5cGUgPSBzY2hlbWFbdHlwZV07XG5cbiAgICAgICAgaWYgKCFicmVhZGNydW1iVHlwZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIHR5cGUgd2l0aG91dCBwYXJlbnRUeXBlXG4gICAgYnJlYWRjcnVtYiA9IHB1c2hDcnVtYihicmVhZGNydW1iLCB7IG5hbWU6IGJyZWFkY3J1bWJUeXBlICYmIGJyZWFkY3J1bWJUeXBlLm5hbWUsIHR5cGUsIHBhcmFtcyB9KTtcblxuICAgIC8vIEZpbmFsbHkgaW5mb3JtIG9mIHRoZSBicmVhZGNydW1iXG4gICAgcmV0dXJuIGJyZWFkY3J1bWIucmV2ZXJzZSgpO1xufTtcblxuLyoqXG4gKiBMb2FkaW5nIHJlZHVjZXIgbWFrZXJcbiAqIEBwYXJhbSAge2FycmF5fSAgSU5JVElBTF9TVEFURVxuICogQHBhcmFtICB7b2JqZWN0fSBCUkVBRENSVU1CX1NDSEVNQVxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmNvbnN0IHJlZHVjZXIgPSAoSU5JVElBTF9TVEFURSA9IFtdLCBCUkVBRENSVU1CX1NDSEVNQSA9IHt9KSA9PiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24gPSB7fSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfQ09OVEVOVCc6XG4gICAgICAgIHJldHVybiBzZXRDb250ZW50KGFjdGlvbiwgQlJFQURDUlVNQl9TQ0hFTUEpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtZXJnZShbXSwgc3RhdGUpO1xuICAgIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdfQ==