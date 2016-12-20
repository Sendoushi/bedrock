# Bedrock: Component

Module to create general components for frontend usage.

You may check the components already provided in the [bedrock-components](https://github.com/Sendoushi/bedrock-components).

### Usage

```js
import doT from 'dot';
import component from 'bedrock/src/component/jquery.js';

const tmpl = doT.template('<div></div>');
const comp = component.init($('.foo'), {
    tmpl: (comp, data) => tmpl(data), // String accepted. It is optional
    state: { // It will render if no change happens in the render
        bar: 'bar'
    }
});

// It won't happen if you don't use template ability
// It will change the bar value on the state and render it instead
component.render(comp, { bar: 'foo' });

// Now you can cache elements
comp.els.bar = comp.el.find('.bar');

// And set new comps
comp.comps.foo = component.init(comp.els.bar);
```

### Extend it...

```js
import component from 'bedrock/src/component/jquery.js';

const init = (comp) => comp;
const render = (comp) => component.render(comp);
const destroy = (comp) => component.destroy(comp);

export default {
    init: (el, data) => {
        let comp = component.getComp(data, DEFAULTS);
        comp = component.init(el, comp);
        
        return (!el || !el.length) ? comp : init(comp);
    },
    render,
    destroy
};
```
