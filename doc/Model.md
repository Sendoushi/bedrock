# Bedrock API: Model (extends Rock and [Backbone Model](http://backbonejs.org/#Model))

This files simply documents the API that the bedrock uses although it is pretty simple and straight forward looking in the files itself.

Most of the methods have a ```self``` argument. This opens the ability for you to use it in functional programming just passing the rock inherited or the scope you want to use inside.

------

Used for data control. You set here your JSONs, connections to the databases, modifications in data...

```js
import Model from 'Bedrock/Model';

let FooModel = Model.extend({
    name: 'FooModel'
});

let model = new FooModel();
```

#### List of methods

At the moment there are no methods besides the ones in backbone and rock.
