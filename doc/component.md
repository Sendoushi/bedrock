# Bedrock: Component

Module to create general components for frontend usage.

You may check the components already provided in the [bedrock-components](https://github.com/Sendoushi/bedrock-components).

### Usage

#### Simple component without DOM

```js
import {Component} from 'bedrock/src/component/common.js';

const comp = new Comp(el, {
    state: {
        bar: 'bar'
    }
})

// Set the state
comp.state = { foo: 'foo' }; // State = { bar: 'bar', foo: 'foo' }
comp.state = { bar: '_bar' }; // State = { bar: '_bar', foo: 'foo' }

// Cache components
comp.comps.foo = new Comp(el);

// Destroy the component and the nested ones
comp.destroy();
```

#### Vanilla

```js
import doT from 'dot';
import {Component} from 'bedrock/src/component/vanilla.js';

const el = document.body;
const tmpl = doT.template('<div></div>');
const comp = new Comp(el, {
    tmpl: (comp, state) => tmpl(state), // String accepted. It is optional,
    render: true,
    state: { // It will be available in the template
        bar: 'bar'
    }
})

// Set the state
comp.state = { foo: 'foo' }; // State = { bar: 'bar', foo: 'foo' }
comp.state = { bar: '_bar' }; // State = { bar: '_bar', foo: 'foo' }

// It won't happen if you don't use template ability
comp.render();

// Cache elements jquery and components
comp.els.bar = document.getElementById('bar');;
comp.comps.foo = new Comp(el);

// Destroy the component and the nested ones
comp.destroy();
```

#### jQuery

```js
import $ from 'jquery';
import doT from 'dot';
import {Component} from 'bedrock/src/component/jquery.js';

const el = $('.foo');
const tmpl = doT.template('<div></div>');
const comp = new Comp(el, {
    tmpl: (comp, state) => tmpl(state), // String accepted. It is optional,
    render: true,
    state: { // It will be available in the template
        bar: 'bar'
    }
})

// Set the state
comp.state = { foo: 'foo' }; // State = { bar: 'bar', foo: 'foo' }
comp.state = { bar: '_bar' }; // State = { bar: '_bar', foo: 'foo' }

// It won't happen if you don't use template ability
comp.render();

// Cache elements jquery and components
comp.$els.bar = comp.el.find('.bar');
comp.comps.foo = new Comp(el);

// Destroy the component and the nested ones
comp.destroy();
```

### Extend it...

```js
import {Component as Comp} from 'bedrock/src/component/vanilla.js';
class Component extends Comp {
    // Constructor
    constructor(el, data = {}) {
        super(nativeEl, {
            els: nativeEls,
            tmpl: data.tmpl,
            noRender: data.noRender,
            comps: data.comps,
            state: data.state
        });

        // Lets cache some stuff
        this._foo = data.foo;
    }

    // Render
    render() {
        super.render();

        return this;
    }

    // Destroy
    destroy() {
        super.destroy();

        return this;
    }
}
export { Component };
```
