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
    var keys = Object.keys(actions);
    var newActions /* :: :Actions */ = {};

    for (var i = 0; i < keys.length; i += 1) {
        newActions[keys[i]] = actions[keys[i]](store);
    }

    return newActions;
};

// --------------------------------
// Export

exports.default = { init: init };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImluaXQiLCJzdG9yZSIsImFjdGlvbnMiLCJrZXlzIiwiT2JqZWN0IiwibmV3QWN0aW9ucyIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQU1BLElBQU1BLEtBQUksZ0JBQUosR0FBdUIsU0FBdkJBLElBQXVCLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUM3QyxRQUFNQyxPQUFPQyxPQUFPRCxJQUFQLENBQVlELE9BQVosQ0FBYjtBQUNBLFFBQU1HLFdBQVUsaUJBQVYsR0FBOEIsRUFBcEM7O0FBRUEsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILEtBQUtJLE1BQXpCLEVBQWlDRCxLQUFLLENBQXRDLEVBQXlDO0FBQ3JDRCxtQkFBV0YsS0FBS0csQ0FBTCxDQUFYLElBQXNCSixRQUFRQyxLQUFLRyxDQUFMLENBQVIsRUFBaUJMLEtBQWpCLENBQXRCO0FBQ0g7O0FBRUQsV0FBT0ksVUFBUDtBQUNILENBVEQ7O0FBV0E7QUFDQTs7a0JBRWUsRUFBRUwsVUFBRixFIiwiZmlsZSI6ImFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqLy8qIDo6IGltcG9ydCB0eXBlIHtBY3Rpb25zLCBGbkluaXR9IGZyb20gJy4vX3Rlc3QvYWN0aW9ucy5mbG93LmpzJzsgKi9cbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFjdGlvbnMgd2l0aCBhIHN0b3JlXG4gKiBAcGFyYW0gIHsqfSBzdG9yZVxuICogQHBhcmFtICB7b2JqZWN0fSBhY3Rpb25zXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmNvbnN0IGluaXQvKiA6OiA6Rm5Jbml0ICovID0gKHN0b3JlLCBhY3Rpb25zKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbnMpO1xuICAgIGNvbnN0IG5ld0FjdGlvbnMvKiA6OiA6QWN0aW9ucyAqLyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIG5ld0FjdGlvbnNba2V5c1tpXV0gPSBhY3Rpb25zW2tleXNbaV1dKHN0b3JlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3QWN0aW9ucztcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG4iXX0=