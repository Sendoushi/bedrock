# Bedrock API: Controller (extends Rock)

This files simply documents the API that the bedrock uses although it is pretty simple and straight forward looking in the files itself.

Most of the methods have a ```self``` argument. This opens the ability for you to use it in functional programming just passing the rock inherited or the scope you want to use inside.

------

Here is where you set the logic of your app/game. Loops, states...

```js
import Controller from 'Bedrock/Controller';

let FooController = Controller.extend({
    name: 'FooController',
    states: {
        'bar': 'barIndex'
    },

    barIndex: state => { /*...*/ }
});

let controller = new FooController();
```

#### List of methods
##### getState
```js
/**
 * Returns the current state
 * @param  {*} self
 * @return {object} The current state
 */
let getState = (self) => { /*...*/ }
```

##### setState
```js
/**
 * Sets state of the controller
 * @param  {*} self
 * @param  {string} state Key to set the state
 */
let setState = (self, state) => { /*...*/ }
```

```js
let FooController = Controller.extend({
    name: 'FooController',
    states: {
        'bar': 'barIndex'
    },

    barIndex: state => {
        // This will happen after setState
    }
});

let controller = new FooController();

// Different ways you may use it
Controller.prototype.setState(controller, 'bar');
controller.setState('bar');
```
