# Bedrock API: Collection (extends Rock and [Backbone Collection](http://backbonejs.org/#Collection))

This files simply documents the API that the bedrock uses although it is pretty simple and straight forward looking in the files itself.

Most of the methods have a ```self``` argument. This opens the ability for you to use it in functional programming just passing the rock inherited or the scope you want to use inside.

------

Collection is just a group of models.

```js
import Collection from 'Bedrock/Collection';

let FooCollection = Collection.extend({
    name: 'FooCollection'
});

let collection = new FooCollection();
```

#### List of methods

At the moment there are no methods besides the ones in backbone and rock.
