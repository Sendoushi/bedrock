'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _redux2 = _interopRequireDefault(_redux);

var _mailbox = require('./mailbox.js');

var _mailbox2 = _interopRequireDefault(_mailbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULTS = {
    events: {
        update: 'store.update',
        initialReq: 'store.initial.req',
        get: 'store.req'
    }
};

// -----------------------------------------
// Functions

/**
 * Connects store
 * @param  {redux} store
 * @return {function}
 */
// { title: 'store', properties: {}, required: true }
var connect = function connect(store) {
    var unsubscribe = store.subscribe(function () {
        var state = store.getState();

        // Inform of changes
        _mailbox2.default.send(DEFAULTS.events.update, state);
    });

    // Set general events
    _mailbox2.default.on(DEFAULTS.events.initialReq, function (cb) {
        var stateFn = store.getInitial || store.getState;
        cb(stateFn());
    });
    _mailbox2.default.on(DEFAULTS.events.get, function (cb) {
        return cb(store.getState());
    });

    return unsubscribe;
};

/**
 * Initializes store
 * @param  {object} storeReducers
 * @param  {*} INITIAL_STATE
 * @return {object}
 */
// { title: 'storeReducers', properties: {}, required: true }
// { title: 'INITIAL_STATE', default: {} }
var init = function init(storeReducers) {
    var INITIAL_STATE = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var reducers = _redux2.default.combineReducers(storeReducers);
    var isDev = process && process.env && process.env.NODE_ENV === 'development' || false;
    var devTools = window.devToolsExtension;
    var finalCreateStore = _redux2.default.compose(isDev && devTools ? devTools() : function (f) {
        return f;
    })(_redux2.default.createStore);
    var store = finalCreateStore(reducers);
    var initialFn = function initialFn() {
        return INITIAL_STATE;
    };

    // Register more methods
    store.getInitial = initialFn;

    return store;
};

// --------------------------------
// Export

exports.default = { init: init, connect: connect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJERUZBVUxUUyIsImV2ZW50cyIsInVwZGF0ZSIsImluaXRpYWxSZXEiLCJnZXQiLCJjb25uZWN0Iiwic3RvcmUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJzZW5kIiwib24iLCJjYiIsInN0YXRlRm4iLCJnZXRJbml0aWFsIiwiaW5pdCIsInN0b3JlUmVkdWNlcnMiLCJJTklUSUFMX1NUQVRFIiwicmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJpc0RldiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImRldlRvb2xzIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmaW5hbENyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImYiLCJjcmVhdGVTdG9yZSIsImluaXRpYWxGbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVc7QUFDYkMsWUFBUTtBQUNKQyxnQkFBUSxjQURKO0FBRUpDLG9CQUFZLG1CQUZSO0FBR0pDLGFBQUs7QUFIRDtBQURLLENBQWpCOztBQVFBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLFFBQU1DLGNBQWNELE1BQU1FLFNBQU4sQ0FBZ0IsWUFBTTtBQUN0QyxZQUFNQyxRQUFRSCxNQUFNSSxRQUFOLEVBQWQ7O0FBRUE7QUFDQSwwQkFBUUMsSUFBUixDQUFhWCxTQUFTQyxNQUFULENBQWdCQyxNQUE3QixFQUFxQ08sS0FBckM7QUFDSCxLQUxtQixDQUFwQjs7QUFPQTtBQUNBLHNCQUFRRyxFQUFSLENBQVdaLFNBQVNDLE1BQVQsQ0FBZ0JFLFVBQTNCLEVBQXVDLFVBQUNVLEVBQUQsRUFBUTtBQUMzQyxZQUFNQyxVQUFVUixNQUFNUyxVQUFOLElBQW9CVCxNQUFNSSxRQUExQztBQUNBRyxXQUFHQyxTQUFIO0FBQ0gsS0FIRDtBQUlBLHNCQUFRRixFQUFSLENBQVdaLFNBQVNDLE1BQVQsQ0FBZ0JHLEdBQTNCLEVBQWdDLFVBQUNTLEVBQUQ7QUFBQSxlQUFRQSxHQUFHUCxNQUFNSSxRQUFOLEVBQUgsQ0FBUjtBQUFBLEtBQWhDOztBQUVBLFdBQU9ILFdBQVA7QUFDSCxDQWhCRDs7QUFrQkE7Ozs7OztBQU1BO0FBQ0E7QUFDQSxJQUFNUyxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsYUFBRCxFQUF1QztBQUFBLFFBQXZCQyxhQUF1Qix1RUFBUCxFQUFPOztBQUNoRCxRQUFNQyxXQUFXLGdCQUFNQyxlQUFOLENBQXNCSCxhQUF0QixDQUFqQjtBQUNBLFFBQU1JLFFBQVFDLFdBQVdBLFFBQVFDLEdBQW5CLElBQTBCRCxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsYUFBbkQsSUFBb0UsS0FBbEY7QUFDQSxRQUFNQyxXQUFXQyxPQUFPQyxpQkFBeEI7QUFDQSxRQUFNQyxtQkFBbUIsZ0JBQU1DLE9BQU4sQ0FBZVIsU0FBU0ksUUFBVixHQUFzQkEsVUFBdEIsR0FBbUMsVUFBQ0ssQ0FBRDtBQUFBLGVBQU9BLENBQVA7QUFBQSxLQUFqRCxFQUEyRCxnQkFBTUMsV0FBakUsQ0FBekI7QUFDQSxRQUFNekIsUUFBUXNCLGlCQUFpQlQsUUFBakIsQ0FBZDtBQUNBLFFBQU1hLFlBQVksU0FBWkEsU0FBWTtBQUFBLGVBQU1kLGFBQU47QUFBQSxLQUFsQjs7QUFFQTtBQUNBWixVQUFNUyxVQUFOLEdBQW1CaUIsU0FBbkI7O0FBRUEsV0FBTzFCLEtBQVA7QUFDSCxDQVpEOztBQWNBO0FBQ0E7O2tCQUVlLEVBQUVVLFVBQUYsRUFBUVgsZ0JBQVIsRSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHJlZHV4IGZyb20gJ3JlZHV4JztcbmltcG9ydCBtYWlsYm94IGZyb20gJy4vbWFpbGJveC5qcyc7XG5cbmNvbnN0IERFRkFVTFRTID0ge1xuICAgIGV2ZW50czoge1xuICAgICAgICB1cGRhdGU6ICdzdG9yZS51cGRhdGUnLFxuICAgICAgICBpbml0aWFsUmVxOiAnc3RvcmUuaW5pdGlhbC5yZXEnLFxuICAgICAgICBnZXQ6ICdzdG9yZS5yZXEnXG4gICAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZ1bmN0aW9uc1xuXG4vKipcbiAqIENvbm5lY3RzIHN0b3JlXG4gKiBAcGFyYW0gIHtyZWR1eH0gc3RvcmVcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG4vLyB7IHRpdGxlOiAnc3RvcmUnLCBwcm9wZXJ0aWVzOiB7fSwgcmVxdWlyZWQ6IHRydWUgfVxuY29uc3QgY29ubmVjdCA9IChzdG9yZSkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIC8vIEluZm9ybSBvZiBjaGFuZ2VzXG4gICAgICAgIG1haWxib3guc2VuZChERUZBVUxUUy5ldmVudHMudXBkYXRlLCBzdGF0ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgZ2VuZXJhbCBldmVudHNcbiAgICBtYWlsYm94Lm9uKERFRkFVTFRTLmV2ZW50cy5pbml0aWFsUmVxLCAoY2IpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVGbiA9IHN0b3JlLmdldEluaXRpYWwgfHwgc3RvcmUuZ2V0U3RhdGU7XG4gICAgICAgIGNiKHN0YXRlRm4oKSk7XG4gICAgfSk7XG4gICAgbWFpbGJveC5vbihERUZBVUxUUy5ldmVudHMuZ2V0LCAoY2IpID0+IGNiKHN0b3JlLmdldFN0YXRlKCkpKTtcblxuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgc3RvcmVcbiAqIEBwYXJhbSAge29iamVjdH0gc3RvcmVSZWR1Y2Vyc1xuICogQHBhcmFtICB7Kn0gSU5JVElBTF9TVEFURVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG4vLyB7IHRpdGxlOiAnc3RvcmVSZWR1Y2VycycsIHByb3BlcnRpZXM6IHt9LCByZXF1aXJlZDogdHJ1ZSB9XG4vLyB7IHRpdGxlOiAnSU5JVElBTF9TVEFURScsIGRlZmF1bHQ6IHt9IH1cbmNvbnN0IGluaXQgPSAoc3RvcmVSZWR1Y2VycywgSU5JVElBTF9TVEFURSA9IHt9KSA9PiB7XG4gICAgY29uc3QgcmVkdWNlcnMgPSByZWR1eC5jb21iaW5lUmVkdWNlcnMoc3RvcmVSZWR1Y2Vycyk7XG4gICAgY29uc3QgaXNEZXYgPSBwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8IGZhbHNlO1xuICAgIGNvbnN0IGRldlRvb2xzID0gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uO1xuICAgIGNvbnN0IGZpbmFsQ3JlYXRlU3RvcmUgPSByZWR1eC5jb21wb3NlKChpc0RldiAmJiBkZXZUb29scykgPyBkZXZUb29scygpIDogKGYpID0+IGYpKHJlZHV4LmNyZWF0ZVN0b3JlKTtcbiAgICBjb25zdCBzdG9yZSA9IGZpbmFsQ3JlYXRlU3RvcmUocmVkdWNlcnMpO1xuICAgIGNvbnN0IGluaXRpYWxGbiA9ICgpID0+IElOSVRJQUxfU1RBVEU7XG5cbiAgICAvLyBSZWdpc3RlciBtb3JlIG1ldGhvZHNcbiAgICBzdG9yZS5nZXRJbml0aWFsID0gaW5pdGlhbEZuO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQsIGNvbm5lY3QgfTtcbiJdfQ==