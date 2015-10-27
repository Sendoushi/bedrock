# Bedrock API: Router (extends Rock and [Backbone Router](http://backbonejs.org/#Router))

This files simply documents the API that the bedrock uses although it is pretty simple and straight forward looking in the files itself.

Most of the methods have a ```self``` argument. This opens the ability for you to use it in functional programming just passing the rock inherited or the scope you want to use inside.

------

Set your routes for the states in the Controller right here!

```js
import Router from 'Bedrock/Router';

let states = {
    '': 'index'
};

let FooRouter = Router.extend({
    name: 'FooRouter'
});

let router = new FooRouter(states, { noHistory: true });

// Router adopts the main controller
router.on('router#change', state => {
    // This event is usually used with a setState
    // for the application controller like so
    // app.setState(state.name);
    // Where the state name will be: 'index'
});

// Starts router
router.start({});
```

#### List of methods
##### start
```js
/**
 * Starts the routing
 * @param {*} self
 * @param {object} config
 */
let start = function (self, config) { /*...*/ }
```

```js
import Router from 'Bedrock/Router';

let router = new Router();
let config = {
    "env": "dev",
    "dev": {
        "debug": true,
        "cacheBust": true
    },
    "prod": {
        "baseUrl": "",
        "debug": false,
        "cacheBust": false
    }
};

// Different ways you may use it
Router.prototype.start(router, config);
router.start(config);
```
