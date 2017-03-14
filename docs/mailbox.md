# Bedrock: Mailbox

Send messages between components that have nothing to do with each other.

**Note:** You should namespace your listeners so that they don't collide.

### Usage

```js
import mailbox from 'bedrock/src/mailbox.js';

const onUpdate = (data) => console.log("New data coming in:", data);

// Listen to events
mailbox.on('update', onUpdate);

// Send events
mailbox.send('update', { newData: true });

// Remove a single event
mailbox.off('update', onUpdate);

// Remove all events
mailbox.off('update');
```
