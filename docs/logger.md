# Bedrock: Logger

A superset of window console.

### Usage
```js
import 'bedrock/src/logger.js';

console.log('This was changed!');
console.warn('This was changed!');
console.error('This was changed!');

// You have all the logs here now
window.logger = {
    log: [{
        from: 'a trace will be here',
        msg: 'data will be here'
    }],
    warn: [],
    error: []
}

// All application errors will also under the logger
```
