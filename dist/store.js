
/* :: import type {S, GetState, GetInitial, Store, Connect, Init} from './_test/store.flow.js'; */
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
var connect /* :: :Connect */ = function connect(store) {
    var unsubscribe /* :: :function */ = store.subscribe(function () {
        var state /* :: :S */ = store.getState();

        // Inform of changes
        _mailbox2.default.send(DEFAULTS.events.update, state);
    });

    // Set general events
    _mailbox2.default.on(DEFAULTS.events.initialReq, function (cb) {
        var stateFn /* :: :GetInitial|GetState */ = store.getInitial || store.getState;
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
var init /* :: :Init */ = function init(storeReducers) {
    var INITIAL_STATE = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var reducers /* :: :function */ = _redux2.default.combineReducers(storeReducers);
    var isDev /* :: :boolean */ = process && process.env && process.env.NODE_ENV === 'development' || false;
    var devTools /* :: :?function */ = window.devToolsExtension;
    var finalCreateStore /* :: :function */ = _redux2.default.compose(isDev && devTools ? devTools() : function (f) {
        return f;
    })(_redux2.default.createStore);
    var store /* :: :Store */ = finalCreateStore(reducers);
    var initialFn /* :: :GetInitial */ = function initialFn() {
        return INITIAL_STATE;
    };

    // Register more methods
    store.getInitial = initialFn;

    return store;
};

// --------------------------------
// Export

exports.default = { init: init, connect: connect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJERUZBVUxUUyIsImV2ZW50cyIsInVwZGF0ZSIsImluaXRpYWxSZXEiLCJnZXQiLCJjb25uZWN0Iiwic3RvcmUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJzZW5kIiwib24iLCJjYiIsInN0YXRlRm4iLCJnZXRJbml0aWFsIiwiaW5pdCIsInN0b3JlUmVkdWNlcnMiLCJJTklUSUFMX1NUQVRFIiwicmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJpc0RldiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImRldlRvb2xzIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmaW5hbENyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImYiLCJjcmVhdGVTdG9yZSIsImluaXRpYWxGbiJdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVc7QUFDYkMsWUFBUTtBQUNKQyxnQkFBUSxjQURKO0FBRUpDLG9CQUFZLG1CQUZSO0FBR0pDLGFBQUs7QUFIRDtBQURLLENBQWpCOztBQVFBO0FBQ0E7O0FBRUE7Ozs7O0FBS0EsSUFBTUMsUUFBTyxpQkFBUCxHQUEyQixTQUEzQkEsT0FBMkIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hDLFFBQU1DLFlBQVcsa0JBQVgsR0FBZ0NELE1BQU1FLFNBQU4sQ0FBZ0IsWUFBTTtBQUN4RCxZQUFNQyxNQUFLLFdBQUwsR0FBbUJILE1BQU1JLFFBQU4sRUFBekI7O0FBRUE7QUFDQSwwQkFBUUMsSUFBUixDQUFhWCxTQUFTQyxNQUFULENBQWdCQyxNQUE3QixFQUFxQ08sS0FBckM7QUFDSCxLQUxxQyxDQUF0Qzs7QUFPQTtBQUNBLHNCQUFRRyxFQUFSLENBQVdaLFNBQVNDLE1BQVQsQ0FBZ0JFLFVBQTNCLEVBQXVDLFVBQUNVLEVBQUQsRUFBUTtBQUMzQyxZQUFNQyxRQUFPLDZCQUFQLEdBQXVDUixNQUFNUyxVQUFOLElBQW9CVCxNQUFNSSxRQUF2RTtBQUNBRyxXQUFHQyxTQUFIO0FBQ0gsS0FIRDtBQUlBLHNCQUFRRixFQUFSLENBQVdaLFNBQVNDLE1BQVQsQ0FBZ0JHLEdBQTNCLEVBQWdDLFVBQUNTLEVBQUQ7QUFBQSxlQUFRQSxHQUFHUCxNQUFNSSxRQUFOLEVBQUgsQ0FBUjtBQUFBLEtBQWhDOztBQUVBLFdBQU9ILFdBQVA7QUFDSCxDQWhCRDs7QUFrQkE7Ozs7OztBQU1BLElBQU1TLEtBQUksY0FBSixHQUFxQixTQUFyQkEsSUFBcUIsQ0FBQ0MsYUFBRCxFQUF1QztBQUFBLFFBQXZCQyxhQUF1Qix1RUFBUCxFQUFPOztBQUM5RCxRQUFNQyxTQUFRLGtCQUFSLEdBQTZCLGdCQUFNQyxlQUFOLENBQXNCSCxhQUF0QixDQUFuQztBQUNBLFFBQU1JLE1BQUssaUJBQUwsR0FBeUJDLFdBQVdBLFFBQVFDLEdBQW5CLElBQTBCRCxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsYUFBbkQsSUFBb0UsS0FBbkc7QUFDQSxRQUFNQyxTQUFRLG1CQUFSLEdBQThCQyxPQUFPQyxpQkFBM0M7QUFDQSxRQUFNQyxpQkFBZ0Isa0JBQWhCLEdBQXFDLGdCQUFNQyxPQUFOLENBQWVSLFNBQVNJLFFBQVYsR0FBc0JBLFVBQXRCLEdBQW1DLFVBQUNLLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsS0FBakQsRUFBMkQsZ0JBQU1DLFdBQWpFLENBQTNDO0FBQ0EsUUFBTXpCLE1BQUssZUFBTCxHQUF1QnNCLGlCQUFpQlQsUUFBakIsQ0FBN0I7QUFDQSxRQUFNYSxVQUFTLG9CQUFULEdBQWdDLFNBQWhDQSxTQUFnQztBQUFBLGVBQU1kLGFBQU47QUFBQSxLQUF0Qzs7QUFFQTtBQUNBWixVQUFNUyxVQUFOLEdBQW1CaUIsU0FBbkI7O0FBRUEsV0FBTzFCLEtBQVA7QUFDSCxDQVpEOztBQWNBO0FBQ0E7O2tCQUVlLEVBQUVVLFVBQUYsRUFBUVgsZ0JBQVIsRSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG4vKiA6OiBpbXBvcnQgdHlwZSB7UywgR2V0U3RhdGUsIEdldEluaXRpYWwsIFN0b3JlLCBDb25uZWN0LCBJbml0fSBmcm9tICcuL190ZXN0L3N0b3JlLmZsb3cuanMnOyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgcmVkdXggZnJvbSAncmVkdXgnO1xuaW1wb3J0IG1haWxib3ggZnJvbSAnLi9tYWlsYm94LmpzJztcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gICAgZXZlbnRzOiB7XG4gICAgICAgIHVwZGF0ZTogJ3N0b3JlLnVwZGF0ZScsXG4gICAgICAgIGluaXRpYWxSZXE6ICdzdG9yZS5pbml0aWFsLnJlcScsXG4gICAgICAgIGdldDogJ3N0b3JlLnJlcSdcbiAgICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogQ29ubmVjdHMgc3RvcmVcbiAqIEBwYXJhbSAge3JlZHV4fSBzdG9yZVxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmNvbnN0IGNvbm5lY3QvKiA6OiA6Q29ubmVjdCAqLyA9IChzdG9yZSkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlLyogOjogOmZ1bmN0aW9uICovID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUvKiA6OiA6UyAqLyA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgLy8gSW5mb3JtIG9mIGNoYW5nZXNcbiAgICAgICAgbWFpbGJveC5zZW5kKERFRkFVTFRTLmV2ZW50cy51cGRhdGUsIHN0YXRlKTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBnZW5lcmFsIGV2ZW50c1xuICAgIG1haWxib3gub24oREVGQVVMVFMuZXZlbnRzLmluaXRpYWxSZXEsIChjYikgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZUZuLyogOjogOkdldEluaXRpYWx8R2V0U3RhdGUgKi8gPSBzdG9yZS5nZXRJbml0aWFsIHx8IHN0b3JlLmdldFN0YXRlO1xuICAgICAgICBjYihzdGF0ZUZuKCkpO1xuICAgIH0pO1xuICAgIG1haWxib3gub24oREVGQVVMVFMuZXZlbnRzLmdldCwgKGNiKSA9PiBjYihzdG9yZS5nZXRTdGF0ZSgpKSk7XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHN0b3JlXG4gKiBAcGFyYW0gIHtvYmplY3R9IHN0b3JlUmVkdWNlcnNcbiAqIEBwYXJhbSAgeyp9IElOSVRJQUxfU1RBVEVcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuY29uc3QgaW5pdC8qIDo6IDpJbml0ICovID0gKHN0b3JlUmVkdWNlcnMsIElOSVRJQUxfU1RBVEUgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHJlZHVjZXJzLyogOjogOmZ1bmN0aW9uICovID0gcmVkdXguY29tYmluZVJlZHVjZXJzKHN0b3JlUmVkdWNlcnMpO1xuICAgIGNvbnN0IGlzRGV2LyogOjogOmJvb2xlYW4gKi8gPSBwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8IGZhbHNlO1xuICAgIGNvbnN0IGRldlRvb2xzLyogOjogOj9mdW5jdGlvbiAqLyA9IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbjtcbiAgICBjb25zdCBmaW5hbENyZWF0ZVN0b3JlLyogOjogOmZ1bmN0aW9uICovID0gcmVkdXguY29tcG9zZSgoaXNEZXYgJiYgZGV2VG9vbHMpID8gZGV2VG9vbHMoKSA6IChmKSA9PiBmKShyZWR1eC5jcmVhdGVTdG9yZSk7XG4gICAgY29uc3Qgc3RvcmUvKiA6OiA6U3RvcmUgKi8gPSBmaW5hbENyZWF0ZVN0b3JlKHJlZHVjZXJzKTtcbiAgICBjb25zdCBpbml0aWFsRm4vKiA6OiA6R2V0SW5pdGlhbCAqLyA9ICgpID0+IElOSVRJQUxfU1RBVEU7XG5cbiAgICAvLyBSZWdpc3RlciBtb3JlIG1ldGhvZHNcbiAgICBzdG9yZS5nZXRJbml0aWFsID0gaW5pdGlhbEZuO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQsIGNvbm5lY3QgfTtcbiJdfQ==