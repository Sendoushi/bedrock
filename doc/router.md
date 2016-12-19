# Bedrock: Router

Takes care of javascript/html routing.

Uses [page.js](https://visionmedia.github.io/page.js/) underneath.

### Usage

```js
import router from 'bedrock/src/router.js';
import mailbox from 'bedrock/src/mailbox.js';

router.add('/post/:id', ctx => console.log("Id is:", ctx.params.id));

mailbox.send('router.add', {
    route: '/post/:id',
    cb: ctx => console.log("Id is:", ctx.params.id)
});

router.start({ dispatch: true });
// Or: mailbox.send('router.start', { dispatch: true });
```
