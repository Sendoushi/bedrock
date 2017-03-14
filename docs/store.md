# Bedrock: Store

Store following redux rules.

### Usage

```js
import redux from 'redux';
import merge from 'lodash/merge.js';
import mailbox from 'bedrock/src/mailbox.js';
import bedrockStore from 'bedrock/src/store.js';

const INITIAL_STATE = { project: {} };
const store = bedrockStore.init({
    project: (INITIAL) => (state = INITIAL, action) {
        switch (action.type) {
        case 'SAVE_ON':
            return merge({}, state, action.data);
        default:
            return merge({}, state);
        }
    }(INITIAL_STATE.project),
    general: redux.combineReducers({
        loading: require('bedrock/reducers/loading.js')(false),
        err: require('bedrock/reducers/err.js')(null)
    })
}, INITIAL_STATE);
const unsubscribe = bedrockStore.connect(store);

mailbox.on('store.update', (state) => console.log("Updated state:", state));
mailbox.send('store.initial.req', (state) => console.log("Initial state:", state));
mailbox.send('store.get', (state) => console.log("Actual state:", state));
```
