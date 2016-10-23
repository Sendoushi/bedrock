// --------------------------------
// Vars / Imports

var merge = require('deepmerge');
var dom = require('../utils/dom.js');
var component = require('../component.js');
var mailbox = require('../mailbox.js');

var DEFAULTS = {
    classes: {
        wrap: 'modal',
        active: 'in',
        content: 'modal-content',
        disableScroll: 'disable-scroll',
        closeButton: 'modal-close'
    },
    events: {
        in: 'modal.in',
        out: 'modal.out'
    }
};

// --------------------------------
// Functions

/**
 * On toggle handler
 * @param  {object} comp
 * @param  {event} evt
 */
function onClose(comp, evt) {
    evt.preventDefault();

    comp.el[0].className = comp.classes.wrap;
    dom.removeClass(document.body, comp.classes.disableScroll);
}

/**
 * On modal open
 * @param  {object} comp
 * @param  {object} data
 */
function onOpen(comp, data) {
    var close;

    dom.html(comp._content, data.tmpl);

    comp.el[0].className = comp.classes.wrap + ' ' + comp.classes.active + ' ' + (data.class || '');
    dom.addClass(document.body, comp.classes.disableScroll);

    // Lets take care of other stuff
    close = dom.find(comp.el, '.' + comp.classes.closeButton);

    // Add events
    close.on('click', onClose.bind(null, comp));
}

/**
 * Creates a modal
 * @param  {object} comp
 * @return {object}
 */
function init(comp) {
    comp._content = dom.find(comp.el, '.' + comp.classes.content);

    // Add events
    comp.el.on('click', onClose.bind(null, comp));
    comp._content.on('click', function (evt) {
        evt.stopPropagation();
    });

    // Set of specific events
    mailbox.on(comp.events.in, onOpen.bind(null, comp));
    comp.el.on(comp.events.in, onOpen.bind(null, comp));
    mailbox.on(comp.events.out, onClose.bind(null, comp));
    comp.el.on(comp.events.out, onClose.bind(null, comp));

    return comp;
}

// --------------------------------
// Export

module.exports = {
    init: function (data) {
        var comp = merge(DEFAULTS, data, { clone: true });

        // Wait for document to be ready and go on!
        return component.init(comp).then(init);
    }
};
