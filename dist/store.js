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
var connectValidate = void 0;
var connect = function connect(store) {
    connectValidate([store]);

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
var initValidate = void 0;
var init = function init(storeReducers) {
    var INITIAL_STATE = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    initValidate([storeReducers]);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJERUZBVUxUUyIsImV2ZW50cyIsInVwZGF0ZSIsImluaXRpYWxSZXEiLCJnZXQiLCJjb25uZWN0VmFsaWRhdGUiLCJjb25uZWN0Iiwic3RvcmUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJzZW5kIiwib24iLCJjYiIsInN0YXRlRm4iLCJnZXRJbml0aWFsIiwiaW5pdFZhbGlkYXRlIiwiaW5pdCIsInN0b3JlUmVkdWNlcnMiLCJJTklUSUFMX1NUQVRFIiwicmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJpc0RldiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImRldlRvb2xzIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmaW5hbENyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImYiLCJjcmVhdGVTdG9yZSIsImluaXRpYWxGbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLFdBQVc7QUFDYkMsWUFBUTtBQUNKQyxnQkFBUSxjQURKO0FBRUpDLG9CQUFZLG1CQUZSO0FBR0pDLGFBQUs7QUFIRDtBQURLLENBQWpCOztBQVFBO0FBQ0E7O0FBRUE7Ozs7O0FBS0EsSUFBTUMsd0JBQU47QUFHQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCRixvQkFBZ0IsQ0FBQ0UsS0FBRCxDQUFoQjs7QUFFQSxRQUFNQyxjQUFjRCxNQUFNRSxTQUFOLENBQWdCLFlBQU07QUFDdEMsWUFBTUMsUUFBUUgsTUFBTUksUUFBTixFQUFkOztBQUVBO0FBQ0EsMEJBQVFDLElBQVIsQ0FBYVosU0FBU0MsTUFBVCxDQUFnQkMsTUFBN0IsRUFBcUNRLEtBQXJDO0FBQ0gsS0FMbUIsQ0FBcEI7O0FBT0E7QUFDQSxzQkFBUUcsRUFBUixDQUFXYixTQUFTQyxNQUFULENBQWdCRSxVQUEzQixFQUF1QyxVQUFDVyxFQUFELEVBQVE7QUFDM0MsWUFBTUMsVUFBVVIsTUFBTVMsVUFBTixJQUFvQlQsTUFBTUksUUFBMUM7QUFDQUcsV0FBR0MsU0FBSDtBQUNILEtBSEQ7QUFJQSxzQkFBUUYsRUFBUixDQUFXYixTQUFTQyxNQUFULENBQWdCRyxHQUEzQixFQUFnQyxVQUFDVSxFQUFEO0FBQUEsZUFBUUEsR0FBR1AsTUFBTUksUUFBTixFQUFILENBQVI7QUFBQSxLQUFoQzs7QUFFQSxXQUFPSCxXQUFQO0FBQ0gsQ0FsQkQ7O0FBb0JBOzs7Ozs7QUFNQSxJQUFNUyxxQkFBTjtBQUlBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxhQUFELEVBQXVDO0FBQUEsUUFBdkJDLGFBQXVCLHVFQUFQLEVBQU87O0FBQ2hESCxpQkFBYSxDQUFDRSxhQUFELENBQWI7O0FBRUEsUUFBTUUsV0FBVyxnQkFBTUMsZUFBTixDQUFzQkgsYUFBdEIsQ0FBakI7QUFDQSxRQUFNSSxRQUFRQyxXQUFXQSxRQUFRQyxHQUFuQixJQUEwQkQsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQW5ELElBQW9FLEtBQWxGO0FBQ0EsUUFBTUMsV0FBV0MsT0FBT0MsaUJBQXhCO0FBQ0EsUUFBTUMsbUJBQW1CLGdCQUFNQyxPQUFOLENBQWVSLFNBQVNJLFFBQVYsR0FBc0JBLFVBQXRCLEdBQW1DLFVBQUNLLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsS0FBakQsRUFBMkQsZ0JBQU1DLFdBQWpFLENBQXpCO0FBQ0EsUUFBTTFCLFFBQVF1QixpQkFBaUJULFFBQWpCLENBQWQ7QUFDQSxRQUFNYSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxlQUFNZCxhQUFOO0FBQUEsS0FBbEI7O0FBRUE7QUFDQWIsVUFBTVMsVUFBTixHQUFtQmtCLFNBQW5COztBQUVBLFdBQU8zQixLQUFQO0FBQ0gsQ0FkRDs7QUFnQkE7QUFDQTs7a0JBRWUsRUFBRVcsVUFBRixFQUFRWixnQkFBUixFIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgcmVkdXggZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcGlsZVNjaGVtYSwgZ2V0U2NoZW1hIH0gZnJvbSAnYmVkcm9jay11dGlscy9zcmMvdmFsaWRhdGUuanMnO1xuaW1wb3J0IG1haWxib3ggZnJvbSAnLi9tYWlsYm94LmpzJztcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gICAgZXZlbnRzOiB7XG4gICAgICAgIHVwZGF0ZTogJ3N0b3JlLnVwZGF0ZScsXG4gICAgICAgIGluaXRpYWxSZXE6ICdzdG9yZS5pbml0aWFsLnJlcScsXG4gICAgICAgIGdldDogJ3N0b3JlLnJlcSdcbiAgICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogQ29ubmVjdHMgc3RvcmVcbiAqIEBwYXJhbSAge3JlZHV4fSBzdG9yZVxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmNvbnN0IGNvbm5lY3RWYWxpZGF0ZSA9IGNvbXBpbGVTY2hlbWEoZ2V0U2NoZW1hKFtcbiAgICB7IHRpdGxlOiAnc3RvcmUnLCBwcm9wZXJ0aWVzOiB7fSwgcmVxdWlyZWQ6IHRydWUgfVxuXSkpO1xuY29uc3QgY29ubmVjdCA9IChzdG9yZSkgPT4ge1xuICAgIGNvbm5lY3RWYWxpZGF0ZShbc3RvcmVdKTtcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIC8vIEluZm9ybSBvZiBjaGFuZ2VzXG4gICAgICAgIG1haWxib3guc2VuZChERUZBVUxUUy5ldmVudHMudXBkYXRlLCBzdGF0ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgZ2VuZXJhbCBldmVudHNcbiAgICBtYWlsYm94Lm9uKERFRkFVTFRTLmV2ZW50cy5pbml0aWFsUmVxLCAoY2IpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVGbiA9IHN0b3JlLmdldEluaXRpYWwgfHwgc3RvcmUuZ2V0U3RhdGU7XG4gICAgICAgIGNiKHN0YXRlRm4oKSk7XG4gICAgfSk7XG4gICAgbWFpbGJveC5vbihERUZBVUxUUy5ldmVudHMuZ2V0LCAoY2IpID0+IGNiKHN0b3JlLmdldFN0YXRlKCkpKTtcblxuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgc3RvcmVcbiAqIEBwYXJhbSAge29iamVjdH0gc3RvcmVSZWR1Y2Vyc1xuICogQHBhcmFtICB7Kn0gSU5JVElBTF9TVEFURVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5jb25zdCBpbml0VmFsaWRhdGUgPSBjb21waWxlU2NoZW1hKGdldFNjaGVtYShbXG4gICAgeyB0aXRsZTogJ3N0b3JlUmVkdWNlcnMnLCBwcm9wZXJ0aWVzOiB7fSwgcmVxdWlyZWQ6IHRydWUgfVxuICAgIC8vIHsgdGl0bGU6ICdJTklUSUFMX1NUQVRFJyB9XG5dKSk7XG5jb25zdCBpbml0ID0gKHN0b3JlUmVkdWNlcnMsIElOSVRJQUxfU1RBVEUgPSB7fSkgPT4ge1xuICAgIGluaXRWYWxpZGF0ZShbc3RvcmVSZWR1Y2Vyc10pO1xuXG4gICAgY29uc3QgcmVkdWNlcnMgPSByZWR1eC5jb21iaW5lUmVkdWNlcnMoc3RvcmVSZWR1Y2Vycyk7XG4gICAgY29uc3QgaXNEZXYgPSBwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8IGZhbHNlO1xuICAgIGNvbnN0IGRldlRvb2xzID0gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uO1xuICAgIGNvbnN0IGZpbmFsQ3JlYXRlU3RvcmUgPSByZWR1eC5jb21wb3NlKChpc0RldiAmJiBkZXZUb29scykgPyBkZXZUb29scygpIDogKGYpID0+IGYpKHJlZHV4LmNyZWF0ZVN0b3JlKTtcbiAgICBjb25zdCBzdG9yZSA9IGZpbmFsQ3JlYXRlU3RvcmUocmVkdWNlcnMpO1xuICAgIGNvbnN0IGluaXRpYWxGbiA9ICgpID0+IElOSVRJQUxfU1RBVEU7XG5cbiAgICAvLyBSZWdpc3RlciBtb3JlIG1ldGhvZHNcbiAgICBzdG9yZS5nZXRJbml0aWFsID0gaW5pdGlhbEZuO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQsIGNvbm5lY3QgfTtcbiJdfQ==