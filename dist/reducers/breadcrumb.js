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
var pushCrumbValidate = void 0;
var pushCrumb = function pushCrumb() {
    var breadcrumb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var crumb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    pushCrumbValidate([breadcrumb, crumb]);

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
var setContentValidate = void 0;
var setContent = function setContent(action, schema) {
    setContentValidate([action, schema]);

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
var reducerValidate = void 0;
var reducer = function reducer() {
    var INITIAL_STATE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var BREADCRUMB_SCHEMA = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    reducerValidate([INITIAL_STATE, BREADCRUMB_SCHEMA]);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9icmVhZGNydW1iLmpzIl0sIm5hbWVzIjpbInB1c2hDcnVtYlZhbGlkYXRlIiwicHVzaENydW1iIiwiYnJlYWRjcnVtYiIsImNydW1iIiwicGFyYW1zIiwidHlwZSIsIm5hbWUiLCJwdXNoIiwicm91dGVUeXBlIiwic2V0Q29udGVudFZhbGlkYXRlIiwic2V0Q29udGVudCIsImFjdGlvbiIsInNjaGVtYSIsImNvbnRlbnQiLCJicmVhZGNydW1iVHlwZSIsImhhc093blByb3BlcnR5IiwicGFyZW50VHlwZSIsInJldmVyc2UiLCJyZWR1Y2VyVmFsaWRhdGUiLCJyZWR1Y2VyIiwiSU5JVElBTF9TVEFURSIsIkJSRUFEQ1JVTUJfU0NIRU1BIiwic3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQTs7Ozs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsMEJBQU47QUFRQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksR0FBaUM7QUFBQSxRQUFoQ0MsVUFBZ0MsdUVBQW5CLEVBQW1CO0FBQUEsUUFBZkMsS0FBZSx1RUFBUCxFQUFPOztBQUMvQ0gsc0JBQWtCLENBQUNFLFVBQUQsRUFBYUMsS0FBYixDQUFsQjs7QUFFQSxRQUFNQyxTQUFTRCxNQUFNQyxNQUFyQjtBQUNBLFFBQU1DLE9BQU9GLE1BQU1FLElBQW5CO0FBQ0EsUUFBTUMsT0FBT0gsTUFBTUcsSUFBbkI7O0FBRUE7QUFDQSxRQUFJLENBQUMsQ0FBQ0QsSUFBRixJQUFVLENBQUMsQ0FBQ0MsSUFBaEIsRUFBc0I7QUFDbEJKLG1CQUFXSyxJQUFYLENBQWdCLEVBQUVELFVBQUYsRUFBUUUsV0FBV0gsSUFBbkIsRUFBeUJELGNBQXpCLEVBQWhCO0FBQ0g7O0FBRUQsV0FBT0YsVUFBUDtBQUNILENBYkQ7O0FBZUE7Ozs7OztBQU1BLElBQU1PLDJCQUFOO0FBU0EsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUNuQ0gsdUJBQW1CLENBQUNFLE1BQUQsRUFBU0MsTUFBVCxDQUFuQjs7QUFFQSxRQUFNUixTQUFTTyxPQUFPRSxPQUFQLENBQWVULE1BQTlCO0FBQ0EsUUFBSUYsYUFBYSxFQUFqQjtBQUNBLFFBQUlHLE9BQU9NLE9BQU9FLE9BQVAsQ0FBZVIsSUFBMUI7QUFDQSxRQUFJUyxpQkFBaUJGLE9BQU9QLElBQVAsS0FBZ0IsRUFBckM7O0FBRUE7QUFDQSxXQUFPUyxlQUFlQyxjQUFmLENBQThCLFlBQTlCLENBQVAsRUFBb0Q7QUFDaEQ7QUFDQWIscUJBQWFELFVBQVVDLFVBQVYsRUFBc0IsRUFBRUksTUFBTVEsa0JBQWtCQSxlQUFlUixJQUF6QyxFQUErQ0QsVUFBL0MsRUFBcURELGNBQXJELEVBQXRCLENBQWI7O0FBRUE7QUFDQUMsZUFBT1MsZUFBZUUsVUFBdEI7QUFDQUYseUJBQWlCRixPQUFPUCxJQUFQLENBQWpCOztBQUVBLFlBQUksQ0FBQ1MsY0FBTCxFQUFxQjtBQUNqQjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQVosaUJBQWFELFVBQVVDLFVBQVYsRUFBc0IsRUFBRUksTUFBTVEsa0JBQWtCQSxlQUFlUixJQUF6QyxFQUErQ0QsVUFBL0MsRUFBcURELGNBQXJELEVBQXRCLENBQWI7O0FBRUE7QUFDQSxXQUFPRixXQUFXZSxPQUFYLEVBQVA7QUFDSCxDQTNCRDs7QUE2QkE7Ozs7OztBQU1BLElBQU1DLHdCQUFOO0FBSUEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQWdEO0FBQUEsUUFBL0NDLGFBQStDLHVFQUEvQixFQUErQjtBQUFBLFFBQTNCQyxpQkFBMkIsdUVBQVAsRUFBTzs7QUFDNURILG9CQUFnQixDQUFDRSxhQUFELEVBQWdCQyxpQkFBaEIsQ0FBaEI7O0FBRUEsV0FBTyxZQUF3QztBQUFBLFlBQXZDQyxLQUF1Qyx1RUFBL0JGLGFBQStCO0FBQUEsWUFBaEJULE1BQWdCLHVFQUFQLEVBQU87O0FBQzNDLGdCQUFRQSxPQUFPTixJQUFmO0FBQ0EsaUJBQUssYUFBTDtBQUNJLHVCQUFPSyxXQUFXQyxNQUFYLEVBQW1CVSxpQkFBbkIsQ0FBUDtBQUNKO0FBQ0ksdUJBQU8scUJBQU0sRUFBTixFQUFVQyxLQUFWLENBQVA7QUFKSjtBQU1ILEtBUEQ7QUFRSCxDQVhEOztBQWFBO0FBQ0E7O2tCQUVlSCxPIiwiZmlsZSI6ImJyZWFkY3J1bWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gvbWVyZ2UuanMnO1xuaW1wb3J0IHsgY29tcGlsZVNjaGVtYSwgZ2V0U2NoZW1hIH0gZnJvbSAnYmVkcm9jay11dGlscy9zcmMvdmFsaWRhdGUuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogU2V0cyBjcnVtYiBpbiBicmVhZGNydW1iXG4gKiBAcGFyYW0gIHthcnJheX0gYnJlYWRjcnVtYlxuICogQHBhcmFtICB7b2JqZWN0fSBjcnVtYlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmNvbnN0IHB1c2hDcnVtYlZhbGlkYXRlID0gY29tcGlsZVNjaGVtYShnZXRTY2hlbWEoW1xuICAgIHsgdGl0bGU6ICdicmVhZGNydW1iJywgdHlwZTogJ2FycmF5JywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICB7IHRpdGxlOiAnY3J1bWInLCBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIHBhcmFtczoge30sXG4gICAgICAgIHR5cGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgfSwgcmVxdWlyZWQ6IHRydWUgfVxuXSkpO1xuY29uc3QgcHVzaENydW1iID0gKGJyZWFkY3J1bWIgPSBbXSwgY3J1bWIgPSB7fSkgPT4ge1xuICAgIHB1c2hDcnVtYlZhbGlkYXRlKFticmVhZGNydW1iLCBjcnVtYl0pO1xuXG4gICAgY29uc3QgcGFyYW1zID0gY3J1bWIucGFyYW1zO1xuICAgIGNvbnN0IHR5cGUgPSBjcnVtYi50eXBlO1xuICAgIGNvbnN0IG5hbWUgPSBjcnVtYi5uYW1lO1xuXG4gICAgLy8gQWRkIHRoZSB0eXBlIHdpdGhvdXQgcGFyZW50VHlwZVxuICAgIGlmICghIXR5cGUgJiYgISFuYW1lKSB7XG4gICAgICAgIGJyZWFkY3J1bWIucHVzaCh7IG5hbWUsIHJvdXRlVHlwZTogdHlwZSwgcGFyYW1zIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBicmVhZGNydW1iO1xufTtcblxuLyoqXG4gKiBTZXQgY29udGVudCByZWxhdGVkXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFjdGlvblxuICogQHBhcmFtICB7b2JqZWN0fSBzY2hlbWFcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5jb25zdCBzZXRDb250ZW50VmFsaWRhdGUgPSBjb21waWxlU2NoZW1hKGdldFNjaGVtYShbXG4gICAgeyB0aXRsZTogJ2FjdGlvbicsIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY29udGVudDogeyBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgdHlwZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICAgIH0gfVxuICAgIH0sIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgeyB0aXRsZTogJ3NjaGVtYScsIHByb3BlcnRpZXM6IHt9LCByZXF1aXJlZDogdHJ1ZSB9XG5dKSk7XG5jb25zdCBzZXRDb250ZW50ID0gKGFjdGlvbiwgc2NoZW1hKSA9PiB7XG4gICAgc2V0Q29udGVudFZhbGlkYXRlKFthY3Rpb24sIHNjaGVtYV0pO1xuXG4gICAgY29uc3QgcGFyYW1zID0gYWN0aW9uLmNvbnRlbnQucGFyYW1zO1xuICAgIGxldCBicmVhZGNydW1iID0gW107XG4gICAgbGV0IHR5cGUgPSBhY3Rpb24uY29udGVudC50eXBlO1xuICAgIGxldCBicmVhZGNydW1iVHlwZSA9IHNjaGVtYVt0eXBlXSB8fCB7fTtcblxuICAgIC8vIExvb3AgdG8gZ2V0IGFsbCBicmVhZGNydW1icyB3aXRoIHBhcmVudFxuICAgIHdoaWxlIChicmVhZGNydW1iVHlwZS5oYXNPd25Qcm9wZXJ0eSgncGFyZW50VHlwZScpKSB7XG4gICAgICAgIC8vIFNldCBhIG5ldyBicmVhZGNydW1iXG4gICAgICAgIGJyZWFkY3J1bWIgPSBwdXNoQ3J1bWIoYnJlYWRjcnVtYiwgeyBuYW1lOiBicmVhZGNydW1iVHlwZSAmJiBicmVhZGNydW1iVHlwZS5uYW1lLCB0eXBlLCBwYXJhbXMgfSk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBuZXcgYnJlYWRjcnVtYiBmb3IgdGhlIHBhcmVudFxuICAgICAgICB0eXBlID0gYnJlYWRjcnVtYlR5cGUucGFyZW50VHlwZTtcbiAgICAgICAgYnJlYWRjcnVtYlR5cGUgPSBzY2hlbWFbdHlwZV07XG5cbiAgICAgICAgaWYgKCFicmVhZGNydW1iVHlwZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIHR5cGUgd2l0aG91dCBwYXJlbnRUeXBlXG4gICAgYnJlYWRjcnVtYiA9IHB1c2hDcnVtYihicmVhZGNydW1iLCB7IG5hbWU6IGJyZWFkY3J1bWJUeXBlICYmIGJyZWFkY3J1bWJUeXBlLm5hbWUsIHR5cGUsIHBhcmFtcyB9KTtcblxuICAgIC8vIEZpbmFsbHkgaW5mb3JtIG9mIHRoZSBicmVhZGNydW1iXG4gICAgcmV0dXJuIGJyZWFkY3J1bWIucmV2ZXJzZSgpO1xufTtcblxuLyoqXG4gKiBMb2FkaW5nIHJlZHVjZXIgbWFrZXJcbiAqIEBwYXJhbSAge2FycmF5fSAgSU5JVElBTF9TVEFURVxuICogQHBhcmFtICB7b2JqZWN0fSBCUkVBRENSVU1CX1NDSEVNQVxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmNvbnN0IHJlZHVjZXJWYWxpZGF0ZSA9IGNvbXBpbGVTY2hlbWEoZ2V0U2NoZW1hKFtcbiAgICB7IHRpdGxlOiAnSU5JVElBTF9TVEFURScsIHR5cGU6ICdhcnJheScsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgeyB0aXRsZTogJ0JSRUFEQ1JVTUJfU0NIRU1BJywgcHJvcGVydGllczoge30sIHJlcXVpcmVkOiB0cnVlIH1cbl0pKTtcbmNvbnN0IHJlZHVjZXIgPSAoSU5JVElBTF9TVEFURSA9IFtdLCBCUkVBRENSVU1CX1NDSEVNQSA9IHt9KSA9PiB7XG4gICAgcmVkdWNlclZhbGlkYXRlKFtJTklUSUFMX1NUQVRFLCBCUkVBRENSVU1CX1NDSEVNQV0pO1xuXG4gICAgcmV0dXJuIChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbiA9IHt9KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VUX0NPTlRFTlQnOlxuICAgICAgICAgICAgcmV0dXJuIHNldENvbnRlbnQoYWN0aW9uLCBCUkVBRENSVU1CX1NDSEVNQSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2UoW10sIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXX0=