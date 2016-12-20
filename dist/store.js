
/* :: import type {S, FnGetState, FnGetInitial, Store, FnConnect, FnInit} from './_test/store.flow.js'; */
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
var connect /* :: :FnConnect */ = function connect(store) {
    var unsubscribe /* :: :Function */ = store.subscribe(function () {
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
var init /* :: :FnInit */ = function init(storeReducers) {
    var INITIAL_STATE = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var reducers /* :: :Function */ = _redux2.default.combineReducers(storeReducers);
    var isDev /* :: :boolean */ = process && process.env && process.env.NODE_ENV === 'development' || false;
    var devTools /* :: :?Function */ = window.devToolsExtension;
    var finalCreateStore /* :: :Function */ = _redux2.default.compose(isDev && devTools ? devTools() : function (f) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJERUZBVUxUUyIsImV2ZW50cyIsInVwZGF0ZSIsImluaXRpYWxSZXEiLCJnZXQiLCJjb25uZWN0Iiwic3RvcmUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJzZW5kIiwib24iLCJjYiIsInN0YXRlRm4iLCJnZXRJbml0aWFsIiwiaW5pdCIsInN0b3JlUmVkdWNlcnMiLCJJTklUSUFMX1NUQVRFIiwicmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJpc0RldiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImRldlRvb2xzIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmaW5hbENyZWF0ZVN0b3JlIiwiY29tcG9zZSIsImYiLCJjcmVhdGVTdG9yZSIsImluaXRpYWxGbiJdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVc7QUFDYkMsWUFBUTtBQUNKQyxnQkFBUSxjQURKO0FBRUpDLG9CQUFZLG1CQUZSO0FBR0pDLGFBQUs7QUFIRDtBQURLLENBQWpCOztBQVFBO0FBQ0E7O0FBRUE7Ozs7O0FBS0EsSUFBTUMsUUFBTyxtQkFBUCxHQUE2QixTQUE3QkEsT0FBNkIsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFDLFFBQU1DLFlBQVcsa0JBQVgsR0FBZ0NELE1BQU1FLFNBQU4sQ0FBZ0IsWUFBTTtBQUN4RCxZQUFNQyxNQUFLLFdBQUwsR0FBbUJILE1BQU1JLFFBQU4sRUFBekI7O0FBRUE7QUFDQSwwQkFBUUMsSUFBUixDQUFhWCxTQUFTQyxNQUFULENBQWdCQyxNQUE3QixFQUFxQ08sS0FBckM7QUFDSCxLQUxxQyxDQUF0Qzs7QUFPQTtBQUNBLHNCQUFRRyxFQUFSLENBQVdaLFNBQVNDLE1BQVQsQ0FBZ0JFLFVBQTNCLEVBQXVDLFVBQUNVLEVBQUQsRUFBUTtBQUMzQyxZQUFNQyxRQUFPLDZCQUFQLEdBQXVDUixNQUFNUyxVQUFOLElBQW9CVCxNQUFNSSxRQUF2RTtBQUNBRyxXQUFHQyxTQUFIO0FBQ0gsS0FIRDtBQUlBLHNCQUFRRixFQUFSLENBQVdaLFNBQVNDLE1BQVQsQ0FBZ0JHLEdBQTNCLEVBQWdDLFVBQUNTLEVBQUQ7QUFBQSxlQUFRQSxHQUFHUCxNQUFNSSxRQUFOLEVBQUgsQ0FBUjtBQUFBLEtBQWhDOztBQUVBLFdBQU9ILFdBQVA7QUFDSCxDQWhCRDs7QUFrQkE7Ozs7OztBQU1BLElBQU1TLEtBQUksZ0JBQUosR0FBdUIsU0FBdkJBLElBQXVCLENBQUNDLGFBQUQsRUFBdUM7QUFBQSxRQUF2QkMsYUFBdUIsdUVBQVAsRUFBTzs7QUFDaEUsUUFBTUMsU0FBUSxrQkFBUixHQUE2QixnQkFBTUMsZUFBTixDQUFzQkgsYUFBdEIsQ0FBbkM7QUFDQSxRQUFNSSxNQUFLLGlCQUFMLEdBQXlCQyxXQUFXQSxRQUFRQyxHQUFuQixJQUEwQkQsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQW5ELElBQW9FLEtBQW5HO0FBQ0EsUUFBTUMsU0FBUSxtQkFBUixHQUE4QkMsT0FBT0MsaUJBQTNDO0FBQ0EsUUFBTUMsaUJBQWdCLGtCQUFoQixHQUFxQyxnQkFBTUMsT0FBTixDQUFlUixTQUFTSSxRQUFWLEdBQXNCQSxVQUF0QixHQUFtQyxVQUFDSyxDQUFEO0FBQUEsZUFBT0EsQ0FBUDtBQUFBLEtBQWpELEVBQTJELGdCQUFNQyxXQUFqRSxDQUEzQztBQUNBLFFBQU16QixNQUFLLGVBQUwsR0FBdUJzQixpQkFBaUJULFFBQWpCLENBQTdCO0FBQ0EsUUFBTWEsVUFBUyxvQkFBVCxHQUFnQyxTQUFoQ0EsU0FBZ0M7QUFBQSxlQUFNZCxhQUFOO0FBQUEsS0FBdEM7O0FBRUE7QUFDQVosVUFBTVMsVUFBTixHQUFtQmlCLFNBQW5COztBQUVBLFdBQU8xQixLQUFQO0FBQ0gsQ0FaRDs7QUFjQTtBQUNBOztrQkFFZSxFQUFFVSxVQUFGLEVBQVFYLGdCQUFSLEUiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuLyogOjogaW1wb3J0IHR5cGUge1MsIEZuR2V0U3RhdGUsIEZuR2V0SW5pdGlhbCwgU3RvcmUsIEZuQ29ubmVjdCwgRm5Jbml0fSBmcm9tICcuL190ZXN0L3N0b3JlLmZsb3cuanMnOyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgcmVkdXggZnJvbSAncmVkdXgnO1xuaW1wb3J0IG1haWxib3ggZnJvbSAnLi9tYWlsYm94LmpzJztcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gICAgZXZlbnRzOiB7XG4gICAgICAgIHVwZGF0ZTogJ3N0b3JlLnVwZGF0ZScsXG4gICAgICAgIGluaXRpYWxSZXE6ICdzdG9yZS5pbml0aWFsLnJlcScsXG4gICAgICAgIGdldDogJ3N0b3JlLnJlcSdcbiAgICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogQ29ubmVjdHMgc3RvcmVcbiAqIEBwYXJhbSAge3JlZHV4fSBzdG9yZVxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmNvbnN0IGNvbm5lY3QvKiA6OiA6Rm5Db25uZWN0ICovID0gKHN0b3JlKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUvKiA6OiA6RnVuY3Rpb24gKi8gPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZS8qIDo6IDpTICovID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICAvLyBJbmZvcm0gb2YgY2hhbmdlc1xuICAgICAgICBtYWlsYm94LnNlbmQoREVGQVVMVFMuZXZlbnRzLnVwZGF0ZSwgc3RhdGUpO1xuICAgIH0pO1xuXG4gICAgLy8gU2V0IGdlbmVyYWwgZXZlbnRzXG4gICAgbWFpbGJveC5vbihERUZBVUxUUy5ldmVudHMuaW5pdGlhbFJlcSwgKGNiKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlRm4vKiA6OiA6R2V0SW5pdGlhbHxHZXRTdGF0ZSAqLyA9IHN0b3JlLmdldEluaXRpYWwgfHwgc3RvcmUuZ2V0U3RhdGU7XG4gICAgICAgIGNiKHN0YXRlRm4oKSk7XG4gICAgfSk7XG4gICAgbWFpbGJveC5vbihERUZBVUxUUy5ldmVudHMuZ2V0LCAoY2IpID0+IGNiKHN0b3JlLmdldFN0YXRlKCkpKTtcblxuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgc3RvcmVcbiAqIEBwYXJhbSAge29iamVjdH0gc3RvcmVSZWR1Y2Vyc1xuICogQHBhcmFtICB7Kn0gSU5JVElBTF9TVEFURVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5jb25zdCBpbml0LyogOjogOkZuSW5pdCAqLyA9IChzdG9yZVJlZHVjZXJzLCBJTklUSUFMX1NUQVRFID0ge30pID0+IHtcbiAgICBjb25zdCByZWR1Y2Vycy8qIDo6IDpGdW5jdGlvbiAqLyA9IHJlZHV4LmNvbWJpbmVSZWR1Y2VycyhzdG9yZVJlZHVjZXJzKTtcbiAgICBjb25zdCBpc0Rldi8qIDo6IDpib29sZWFuICovID0gcHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB8fCBmYWxzZTtcbiAgICBjb25zdCBkZXZUb29scy8qIDo6IDo/RnVuY3Rpb24gKi8gPSB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb247XG4gICAgY29uc3QgZmluYWxDcmVhdGVTdG9yZS8qIDo6IDpGdW5jdGlvbiAqLyA9IHJlZHV4LmNvbXBvc2UoKGlzRGV2ICYmIGRldlRvb2xzKSA/IGRldlRvb2xzKCkgOiAoZikgPT4gZikocmVkdXguY3JlYXRlU3RvcmUpO1xuICAgIGNvbnN0IHN0b3JlLyogOjogOlN0b3JlICovID0gZmluYWxDcmVhdGVTdG9yZShyZWR1Y2Vycyk7XG4gICAgY29uc3QgaW5pdGlhbEZuLyogOjogOkdldEluaXRpYWwgKi8gPSAoKSA9PiBJTklUSUFMX1NUQVRFO1xuXG4gICAgLy8gUmVnaXN0ZXIgbW9yZSBtZXRob2RzXG4gICAgc3RvcmUuZ2V0SW5pdGlhbCA9IGluaXRpYWxGbjtcblxuICAgIHJldHVybiBzdG9yZTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0LCBjb25uZWN0IH07XG4iXX0=