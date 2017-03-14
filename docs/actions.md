# Bedrock: Actions

Actions following redux rules.

### Usage

```js
import actions from 'bedrock/src/actions.js';

const action = actions.init(store, {
    project: (store) => ({
        saveOn: (action) => store.dispatch({ type: 'SAVE_ON', data: action });
    })
});

action.project.saveOn({ data: 'foo' });
```
