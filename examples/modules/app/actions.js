// -----------------------------------------
// VARS

// -----------------------------------------
// FUNCTIONS

/**
 * Sets content of app
 */
var setContent = function (store, action) {
    store.dispatch({ type: 'SET_CONTENT', content: action });
};

/**
 * Sets modal of app
 */
var setModal = function (store, action) {
    store.dispatch({ type: 'SET_MODAL', modal: action });
};

// -----------------------------------------
// EXPORT

module.exports = function (store) {
    return {
        setContent: function (action) {
            return setContent(store, action);
        },
        setModal: function (action) {
            return setModal(store, action);
        }
    };
};
