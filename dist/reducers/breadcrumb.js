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
// { title: 'breadcrumb', type: 'array', default: [] },
// { title: 'crumb', properties: {
//     params: {},
//     type: { type: 'string' },
//     name: { type: 'string' }
// }, default: {} }
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
// { title: 'action', properties: {
//     content: { properties: {
//         params: {},
//         type: { type: 'string' }
//     } }
// }, required: true },
// { title: 'schema', properties: {}, required: true }
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
// { title: 'INITIAL_STATE', type: 'array', default: [] },
// { title: 'BREADCRUMB_SCHEMA', properties: {}, default: [] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9icmVhZGNydW1iLmpzIl0sIm5hbWVzIjpbInB1c2hDcnVtYiIsImJyZWFkY3J1bWIiLCJjcnVtYiIsInBhcmFtcyIsInR5cGUiLCJuYW1lIiwicHVzaCIsInJvdXRlVHlwZSIsInNldENvbnRlbnQiLCJhY3Rpb24iLCJzY2hlbWEiLCJjb250ZW50IiwiYnJlYWRjcnVtYlR5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcmVudFR5cGUiLCJyZXZlcnNlIiwicmVkdWNlciIsIklOSVRJQUxfU1RBVEUiLCJCUkVBRENSVU1CX1NDSEVNQSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUE7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxHQUFpQztBQUFBLFFBQWhDQyxVQUFnQyx1RUFBbkIsRUFBbUI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEVBQU87O0FBQy9DLFFBQU1DLFNBQVNELE1BQU1DLE1BQXJCO0FBQ0EsUUFBTUMsT0FBT0YsTUFBTUUsSUFBbkI7QUFDQSxRQUFNQyxPQUFPSCxNQUFNRyxJQUFuQjs7QUFFQTtBQUNBLFFBQUksQ0FBQyxDQUFDRCxJQUFGLElBQVUsQ0FBQyxDQUFDQyxJQUFoQixFQUFzQjtBQUNsQkosbUJBQVdLLElBQVgsQ0FBZ0IsRUFBRUQsVUFBRixFQUFRRSxXQUFXSCxJQUFuQixFQUF5QkQsY0FBekIsRUFBaEI7QUFDSDs7QUFFRCxXQUFPRixVQUFQO0FBQ0gsQ0FYRDs7QUFhQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNTyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQW9CO0FBQ25DLFFBQU1QLFNBQVNNLE9BQU9FLE9BQVAsQ0FBZVIsTUFBOUI7QUFDQSxRQUFJRixhQUFhLEVBQWpCO0FBQ0EsUUFBSUcsT0FBT0ssT0FBT0UsT0FBUCxDQUFlUCxJQUExQjtBQUNBLFFBQUlRLGlCQUFpQkYsT0FBT04sSUFBUCxLQUFnQixFQUFyQzs7QUFFQTtBQUNBLFdBQU9RLGVBQWVDLGNBQWYsQ0FBOEIsWUFBOUIsQ0FBUCxFQUFvRDtBQUNoRDtBQUNBWixxQkFBYUQsVUFBVUMsVUFBVixFQUFzQixFQUFFSSxNQUFNTyxrQkFBa0JBLGVBQWVQLElBQXpDLEVBQStDRCxVQUEvQyxFQUFxREQsY0FBckQsRUFBdEIsQ0FBYjs7QUFFQTtBQUNBQyxlQUFPUSxlQUFlRSxVQUF0QjtBQUNBRix5QkFBaUJGLE9BQU9OLElBQVAsQ0FBakI7O0FBRUEsWUFBSSxDQUFDUSxjQUFMLEVBQXFCO0FBQ2pCO0FBQ0g7QUFDSjs7QUFFRDtBQUNBWCxpQkFBYUQsVUFBVUMsVUFBVixFQUFzQixFQUFFSSxNQUFNTyxrQkFBa0JBLGVBQWVQLElBQXpDLEVBQStDRCxVQUEvQyxFQUFxREQsY0FBckQsRUFBdEIsQ0FBYjs7QUFFQTtBQUNBLFdBQU9GLFdBQVdjLE9BQVgsRUFBUDtBQUNILENBekJEOztBQTJCQTs7Ozs7O0FBTUE7QUFDQTtBQUNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVTtBQUFBLFFBQUNDLGFBQUQsdUVBQWlCLEVBQWpCO0FBQUEsUUFBcUJDLGlCQUFyQix1RUFBeUMsRUFBekM7QUFBQSxXQUFnRCxZQUF3QztBQUFBLFlBQXZDQyxLQUF1Qyx1RUFBL0JGLGFBQStCO0FBQUEsWUFBaEJSLE1BQWdCLHVFQUFQLEVBQU87O0FBQ3BHLGdCQUFRQSxPQUFPTCxJQUFmO0FBQ0EsaUJBQUssYUFBTDtBQUNJLHVCQUFPSSxXQUFXQyxNQUFYLEVBQW1CUyxpQkFBbkIsQ0FBUDtBQUNKO0FBQ0ksdUJBQU8scUJBQU0sRUFBTixFQUFVQyxLQUFWLENBQVA7QUFKSjtBQU1ILEtBUGU7QUFBQSxDQUFoQjs7QUFTQTtBQUNBOztrQkFFZUgsTyIsImZpbGUiOiJicmVhZGNydW1iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlLmpzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIFNldHMgY3J1bWIgaW4gYnJlYWRjcnVtYlxuICogQHBhcmFtICB7YXJyYXl9IGJyZWFkY3J1bWJcbiAqIEBwYXJhbSAge29iamVjdH0gY3J1bWJcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG4vLyB7IHRpdGxlOiAnYnJlYWRjcnVtYicsIHR5cGU6ICdhcnJheScsIGRlZmF1bHQ6IFtdIH0sXG4vLyB7IHRpdGxlOiAnY3J1bWInLCBwcm9wZXJ0aWVzOiB7XG4vLyAgICAgcGFyYW1zOiB7fSxcbi8vICAgICB0eXBlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4vLyAgICAgbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4vLyB9LCBkZWZhdWx0OiB7fSB9XG5jb25zdCBwdXNoQ3J1bWIgPSAoYnJlYWRjcnVtYiA9IFtdLCBjcnVtYiA9IHt9KSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gY3J1bWIucGFyYW1zO1xuICAgIGNvbnN0IHR5cGUgPSBjcnVtYi50eXBlO1xuICAgIGNvbnN0IG5hbWUgPSBjcnVtYi5uYW1lO1xuXG4gICAgLy8gQWRkIHRoZSB0eXBlIHdpdGhvdXQgcGFyZW50VHlwZVxuICAgIGlmICghIXR5cGUgJiYgISFuYW1lKSB7XG4gICAgICAgIGJyZWFkY3J1bWIucHVzaCh7IG5hbWUsIHJvdXRlVHlwZTogdHlwZSwgcGFyYW1zIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBicmVhZGNydW1iO1xufTtcblxuLyoqXG4gKiBTZXQgY29udGVudCByZWxhdGVkXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFjdGlvblxuICogQHBhcmFtICB7b2JqZWN0fSBzY2hlbWFcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG4vLyB7IHRpdGxlOiAnYWN0aW9uJywgcHJvcGVydGllczoge1xuLy8gICAgIGNvbnRlbnQ6IHsgcHJvcGVydGllczoge1xuLy8gICAgICAgICBwYXJhbXM6IHt9LFxuLy8gICAgICAgICB0eXBlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbi8vICAgICB9IH1cbi8vIH0sIHJlcXVpcmVkOiB0cnVlIH0sXG4vLyB7IHRpdGxlOiAnc2NoZW1hJywgcHJvcGVydGllczoge30sIHJlcXVpcmVkOiB0cnVlIH1cbmNvbnN0IHNldENvbnRlbnQgPSAoYWN0aW9uLCBzY2hlbWEpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBhY3Rpb24uY29udGVudC5wYXJhbXM7XG4gICAgbGV0IGJyZWFkY3J1bWIgPSBbXTtcbiAgICBsZXQgdHlwZSA9IGFjdGlvbi5jb250ZW50LnR5cGU7XG4gICAgbGV0IGJyZWFkY3J1bWJUeXBlID0gc2NoZW1hW3R5cGVdIHx8IHt9O1xuXG4gICAgLy8gTG9vcCB0byBnZXQgYWxsIGJyZWFkY3J1bWJzIHdpdGggcGFyZW50XG4gICAgd2hpbGUgKGJyZWFkY3J1bWJUeXBlLmhhc093blByb3BlcnR5KCdwYXJlbnRUeXBlJykpIHtcbiAgICAgICAgLy8gU2V0IGEgbmV3IGJyZWFkY3J1bWJcbiAgICAgICAgYnJlYWRjcnVtYiA9IHB1c2hDcnVtYihicmVhZGNydW1iLCB7IG5hbWU6IGJyZWFkY3J1bWJUeXBlICYmIGJyZWFkY3J1bWJUeXBlLm5hbWUsIHR5cGUsIHBhcmFtcyB9KTtcblxuICAgICAgICAvLyBTZXQgdGhlIG5ldyBicmVhZGNydW1iIGZvciB0aGUgcGFyZW50XG4gICAgICAgIHR5cGUgPSBicmVhZGNydW1iVHlwZS5wYXJlbnRUeXBlO1xuICAgICAgICBicmVhZGNydW1iVHlwZSA9IHNjaGVtYVt0eXBlXTtcblxuICAgICAgICBpZiAoIWJyZWFkY3J1bWJUeXBlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgdHlwZSB3aXRob3V0IHBhcmVudFR5cGVcbiAgICBicmVhZGNydW1iID0gcHVzaENydW1iKGJyZWFkY3J1bWIsIHsgbmFtZTogYnJlYWRjcnVtYlR5cGUgJiYgYnJlYWRjcnVtYlR5cGUubmFtZSwgdHlwZSwgcGFyYW1zIH0pO1xuXG4gICAgLy8gRmluYWxseSBpbmZvcm0gb2YgdGhlIGJyZWFkY3J1bWJcbiAgICByZXR1cm4gYnJlYWRjcnVtYi5yZXZlcnNlKCk7XG59O1xuXG4vKipcbiAqIExvYWRpbmcgcmVkdWNlciBtYWtlclxuICogQHBhcmFtICB7YXJyYXl9ICBJTklUSUFMX1NUQVRFXG4gKiBAcGFyYW0gIHtvYmplY3R9IEJSRUFEQ1JVTUJfU0NIRU1BXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuLy8geyB0aXRsZTogJ0lOSVRJQUxfU1RBVEUnLCB0eXBlOiAnYXJyYXknLCBkZWZhdWx0OiBbXSB9LFxuLy8geyB0aXRsZTogJ0JSRUFEQ1JVTUJfU0NIRU1BJywgcHJvcGVydGllczoge30sIGRlZmF1bHQ6IFtdIH1cbmNvbnN0IHJlZHVjZXIgPSAoSU5JVElBTF9TVEFURSA9IFtdLCBCUkVBRENSVU1CX1NDSEVNQSA9IHt9KSA9PiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24gPSB7fSkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfQ09OVEVOVCc6XG4gICAgICAgIHJldHVybiBzZXRDb250ZW50KGFjdGlvbiwgQlJFQURDUlVNQl9TQ0hFTUEpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtZXJnZShbXSwgc3RhdGUpO1xuICAgIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdfQ==