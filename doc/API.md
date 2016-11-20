# Bedrock: API

Sorry... Still have to complete this better!

## Mailbox

### Usage

```js
var mailbox = require('bedrock/mailbox.js');
var onUpdate = function (data) {
    console.log("New data coming in:", data); 
};

// Listen to events
mailbox.on('update', onUpdate);

// Send events
mailbox.send('update', { newData: true });

// Remove a single event
mailbox.off('update', onUpdate);

// Remove all events
mailbox.off('update');
```

## Router

Uses [page.js](https://visionmedia.github.io/page.js/) underneath.

### Usage

```js
var router = require('bedrock/router.js');
var mailbox = require('bedrock/mailbox.js');

router.add('/post/:id', function (ctx) {
    console.log("Id is:", ctx.params.id);
});

mailbox.send('router.add', {
    route: '/post/:id',
    cb: function (ctx) {
        console.log("Id is:", ctx.params.id);
    }
});

router.start({ dispatch: true });
// Or: mailbox.send('router.start', { dispatch: true });
```

## State

### Usage

```js
var getNewState = require('bedrock/state.js').getNew;
var oldState = { foo: 1 };
var newState = getNewState(oldState, { foo: 2, bar: 3 });

if (!newState.diff) {
    // No need to change state if there are no differences
    newState = oldState;
} else {
    // Finally set the new state
    newState = newState.state;
}
```

## Component

### Usage

```js
var component = require('bedrock/component.js');
var doT = require('dot');
var tmpl = doT.template('<div></div>');
var comp = component.init($('.foo'), {
    tmpl: function (comp, data) { return tmpl(data); } // String accepted. It is optional
});

// It won't happen if you don't use template ability
component.render(comp);
```

### Extend it...

```js
var component = require('bedrock/component.js');
var init = function init(comp) {
    return comp;
}

module.exports = {
    init: function (el, data) {
        var comp = component.getComp(data, DEFAULTS);
        comp = component.init(el, comp);
        return init(comp);
    },
    render: component.render,
    destroy: component.destroy
};
```

#### List of provided extensions

- [accordion](src/components/accordion.js)
- [completer](src/components/completer.js)
- [modal](src/components/modal.js)
- [select](src/components/select.js)

## Store

### Usage

```js 
var INITIAL_STATE = { project: {} };
var redux = require('redux');
var deepMixIn = require('mout/object/deepMixIn.js');
var bedrockStore = require('bedrock/store.js');
var store = bedrockStore.init({
    project: function (INITIAL) {
        return function (state, action) {
            state = state || INITIAL;

            switch (action.type) {
            case 'SAVE_ON':
                return deepMixIn({}, state, action.data);
            default:
                return deepMixIn({}, state);
            }
        };
    }(INITIAL_STATE.project),
    general: redux.combineReducers({
        loading: require('bedrock/reducers/loading.js')(false),
        err: require('bedrock/reducers/err.js')(null)
    })
}, INITIAL_STATE);

var mailbox = require('bedrock/mailbox.js');
var unsubscribe = bedrockStore.connect(store);

mailbox.on('store.update', function (state) {
    console.log("Updated state:", state);
});

mailbox.send('store.initial.req', function (state) {
    console.log("Initial state:", state);
});

mailbox.send('store.get', function (state) {
    console.log("Actual state:", state);
});
```

## Actions

### Usage

```js
var actions = require('bedrock/actions.js').init(store, {
    project: function (store) {
        return {
            saveOn: function (action) {
                store.dispatch({ type: 'SAVE_ON', data: action });
            }
        };
    }
});
actions.project.saveOn({ data: 'foo' });
```
