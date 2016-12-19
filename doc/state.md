# Bedrock: State

Takes care of state objects.

### Usage

```js
import { getNew } from 'bedrock/src/state.js';

const oldState = { foo: 1 };
const newState = getNew(oldState, { foo: 2, bar: 3 });

if (!newState.diff) {
    // No need to change state if there are no differences
    newState = oldState;
} else {
    // Finally set the new state
    newState = newState.state;
}
```
