# Bedrock API: Rock

This files simply documents the API that the bedrock uses although it is pretty simple and straight forward looking in the files itself.

Most of the methods have a ```self``` argument. This opens the ability for you to use it in functional programming just passing the rock inherited or the scope you want to use inside.

------

Everyone should extend the Rock. It's the foundation of all Bedrock. He is the one who knows the siblings and how to announce.

```js
import Rock from 'Bedrock/Rock';

let FooRock = Rock.extend({
    name: 'FooRock'
});

let rock = new FooRock();
```

#### List of methods
##### initialize
```js
/*
 * Initialize this
 * It is called on the constructor method
 * @param  {object} options
 * @return {this}
 */
let initialize = function (options = {}) { /*...*/ }
```

##### bindToSelf
```js
/*
 * Join function keys to be bind
 * @param  {*} self
 * @param  {array} keys
 */
let bindToSelf = function (self, keys) { /*...*/ }
```

This method is used to bind methods to a rock inherited.
It just helps when a ```this``` is needed for example.

```js
let foo = {
    initialize: function (options = {}) {
        Rock.prototype.initialize.call(this, options);

        // Bind functions to self
        // Different ways you may use it
        Rock.prototype.bindToSelf(this, ['bar']);
        this.bindToSelf(['bar']);
    },
    bar = (self, str) => {
        /* Self is this */
        /* Str is: this is a string! */
    }
};

// Now you may simply call and
// a scope is already provided
bar('this is a string!');

let Bar = Rock.extend(foo);
```

##### adopt
```js
/**
 * Adopts the child
 * @param  {*} self
 * @param  {*} child Child inheriting Rock
 * @return {child}
 */
let adopt = (self, child) => { /*...*/ }
```

This is important so that relatives know how to trigger events between them.

```js
let parent = new Rock();
let child = new Rock();

// Different ways you may use it
Rock.prototype.adopt(parent, child);
parent.adopt(child);
```

##### unadopt
```js
/**
 * Unadopts the child
 * @param  {*} self
 * @param  {*} child Child inheriting Rock
 * @return {child}
 */
let unadopt = (self, child) => { /*...*/ }
```

Just the opposite of adopt method.

```js
let parent = new Rock();
let child = new Rock();
parent.adopt(child);

// Different ways you may use it
Rock.prototype.unadopt(parent, child);
parent.unadopt(child);
```

##### announce
```js
/**
 * Announce to all family the event
 * @param  {*} self
 * @param  {string} key Key to be listened by events
 * @param  {object} options Optionals a 'go' key with 'down', 'up' or 'null' and a 'data' key
 */
let announce = (self, key, options = {}) => { /*...*/ }
```

Just the opposite of adopt method.

```js
let parent = new Rock();
parent.adopt(new Rock()).on('foo', data => {
    // data will be { bar: 'test' }
});

// Different ways you may use it
Rock.prototype.announce(parent, 'foo', {
    // 'down' will announce down the family tree
    // 'up' will announce up the family tree
    // Nothing set will announce to everyone
    go: 'down',
    // This data will be provided on the listening
    data: { bar: 'test' }
});
parent.announce('foo', { go: 'down', data: { bar: 'test' } });
```

##### destroySiblings
```js
/**
 * Destroys the rock siblings
 * @param  {*} self
 */
let destroySiblings = (self) => { /*...*/ }
```

As it states, destroys all rock siblings. It will also destroy down the family tree.

```js
let parent = new Rock();
let child = new Rock();
parent.adopt(child);

// Different ways you may use it
Rock.prototype.destroySiblings(parent);
parent.destroySiblings();

// Child was destroyed!
```

##### destroy
```js
/**
 * Destroys the rock
 * @param  {*} self
 * @param  {*} arg It will be passed to backbone
 */
let destroy = (self, arg) => { /*...*/ }
```

As it states, destroys rock. It will also destroy down the family tree.

```js
let parent = new Rock();
let child = new Rock();
parent.adopt(child);

// Different ways you may use it
Rock.prototype.destroy(parent);
parent.destroy();

// Child was destroyed!
// Parent was destroyed!
```
