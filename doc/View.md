# Bedrock API: View (extends Rock and [Backbone View](http://backbonejs.org/#View))

This files simply documents the API that the bedrock uses although it is pretty simple and straight forward looking in the files itself.

Most of the methods have a ```self``` argument. This opens the ability for you to use it in functional programming just passing the rock inherited or the scope you want to use inside.

------

Everything you see should be set here. The only one who knows what x and y are or button events for example.

```js
import View from 'Bedrock/View';

let FooView = View.extend({
    name: 'FooView'
});

let view = new FooView();
```

#### List of methods
##### render
```js
/*
 * Render
 * @param  {*} self
 * @param  {object} data Object to be rendered
 */
let render = function (self, data) { /*...*/ }
```

This method is pretty important for the View. It is the method that renders the template for example. For now, the templating system being used is ```underscore``` but you may use whatever you want by changing the ```template``` key of the view.

```js
import View from 'Bedrock/View';

let FooView = View.extend({
    name: 'FooView',
    tagName: 'div',
    template: _.template(tmpl),
    className: 'foo-view',
    events: {
        'click .btn-toggle': 'onBtn'
    }
});

let view = new FooView();
view.render({ foo: 'bar' });

// Inside the template there will be a variable named 'foo'
```
