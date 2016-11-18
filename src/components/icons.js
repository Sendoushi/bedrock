var doT = require('dot');
var component = require('bedrock/src/component.js');

// -----------------------------------------
// VARS

var DEFAULTS = {
    rawTmpl: '',
    tmpl: function (comp, data) { return comp.rawTmpl(data); }
};

// -----------------------------------------
// FUNCTIONS

/**
 * Renders the component
 * @param  {object} comp
 */
var render = function (comp) {
    comp = component.render(comp, {});

    return comp;
};

/**
 * Initializes
 * @param  {object} comp
 * @return {object}
 */
var init = function (comp) {
    // Lets remove any width, height and viewbox
    var rawTmpl = comp.rawTmpl
        .replace(/ width="([^"]+)"/g, '')
        .replace(/ height="([^"]+)"/g, '')
        .replace(/ viewBox="([^"]+)"/g, '')
        .replace(/ viewbox="([^"]+)"/g, '');

    comp.rawTmpl = doT.template(rawTmpl);

    return comp;
};

// -------------------------------------------
// EXPORT

module.exports = {
    init: function (el, data) {
        var comp = component.getComp(data, DEFAULTS);
        comp = component.init(el, comp);
        return init(comp);
    },
    render: render,
    destroy: component.destroy
};
