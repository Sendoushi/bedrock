'use strict';
import deepMixIn from 'mout/object/deepMixIn.js';
import uniqueId from './utils/uniqueId.js';
import Backbone from 'backbone';

// -----------------------------------------
// VARS
let rockConfig = {
    name: 'Rock',
    cid: null
};

// Functions to be defined later
let bindToSelf, announceDown, announceUp, getRoot, getParent, setParent;

// -----------------------------------------
// PUBLIC FUNCTIONS

/**
 * Functions from another mother
 */
let extend = Backbone.Model.extend;
let extendBackbone = Backbone.Events;

/**
 * Initialize this
 * It is called on the constructor method
 * @param  {object} options
 * @return {this}
 */
let initialize = function (options = {}) {
    // Set vars
    this.siblings = [];
    this.cid = uniqueId(this.name);

    // Bind functions to self
    this.dontBind = options.dontBind;
    bindToSelf(this, [
        'adopt',
        'unadopt',
        'announce',
        'destroySiblings',
        'destroy'
    ]);

    return this;
};

/*
 * Join function keys to be bind
 * @param  {*} self
 * @param  {array} keys
 */
bindToSelf = function (self, keys) {
    if (!keys) {
        keys = self;
        self = this;
    }

    if (self.dontBind) {
        return;
    }

    for (let key of keys) {
        if (key === 'undelegateEvents') {
            console.log(self);
        }
        self[key] = self[key].bind(null, self);
    }
};

/**
 * Adopts the child
 * @param  {*} self
 * @param  {*} child Child inheriting Rock
 * @return {child}
 */
let adopt = (self, child) => {
    // Check if he is being double adopted
    if (getParent(child)) {
        console.warn('[' + self.name + '] Child already has a parent.');
        return child;
    }

    // Check if there is already and warn
    for (let i = 0; i < self.siblings.length; i += 1) {
        if (child.name === self.siblings[i].name && child.cid === self.siblings[i].cid) {
            console.warn('[' + self.name + '] Child was already adopted by this.');
            return child;
        }
    }

    self.siblings.push(child);

    // Child parent
    setParent(child, self);

    console.log('[' + self.name + '] Child was adopted.');
    return child;
};

/**
 * Unadopts the child
 * @param  {*} self
 * @param  {*} child Child inheriting Rock
 * @return {child}
 */
let unadopt = (self, child) => {
    if (!self.siblings || !self.siblings.length) {
        console.warn('[' + self.name + '] There are no adopted.');
        return child;
    }

    for (let i = 0; i < self.siblings.length; i += 1) {
        if (child.name === self.siblings[i].name && child.cid === self.siblings[i].cid) {
            self.siblings.splice(i, 1);
            setParent(child);

            console.log('[' + self.name + '] Child was unadopted.');
            return child;
        }
    }

    console.warn('[' + self.name + '] Child wasn\'t adopted by this.');
    return child;
};

/**
 * Announce to all family the event
 * @param  {*} self
 * @param  {string} key Key to be listened by events
 * @param  {object} options Optionals a 'go' key with 'down', 'up' or 'null' and a 'data' key
 */
let announce = (self, key, options = {}) => {
    if (options.go === 'down') {
        announceDown(self, key, options.data);
    } else if (options.go === 'up') {
        announceUp(self, key, options.data);
    } else {
        announceDown(getRoot(self), key, options.data);
    }
};

/**
 * Destroys the rock siblings
 * @param  {*} self
 */
let destroySiblings = (self) => {
    if (!self.siblings || !self.siblings.length) {
        return;
    }

    // Go through each sible and destroy
    self.siblings.forEach(val => {
        val.destroySiblings();
        val.destroy();
    });

    // Reset siblings
    self.siblings = null;
};

/**
 * Destroys the rock
 * @param  {*} self
 * @param  {*} arg It will be passed to backbone
 */
let destroy = (self, arg) => {
    self.stopListening();
    self.destroySiblings();

    // Call the parent destroy
    self.extendBackbone.prototype.destroy.call(self, arg);
};

// -----------------------------------------
// PRIVATE FUNCTIONS

/**
 * Returns the parent
 * @param  {object} self
 * @return {*} This instance parent
 */
getParent = self => self.parent;

/**
 * Gets the root of someone
 * @param {rock} self
 * @return {*} Root self
 */
getRoot = self => {
    while (!!getParent(self)) {
        self = getParent(self);
    }

    return self;
};

/**
 * Sets a parent to a child
 * @param  {object} self
 * @param  {rock} parent Parent inheriting Rock
 */
setParent = (self, parent) => {
    if (self.parent) {
        console.warn('[' + self.name + '] This already have a parent!');
        return;
    }

    self.parent = parent;
    console.log('[' + self.name + '] Parent was set.');
};

/**
 * Make the announcement to all relatives
 * @param  {object} self
 * @param  {String} key Key to be listened on the events
 * @param  {*} data Data to be passed to the listeners
 */
announceDown = (self, key, data) => {
    // Go through each sible and announce
    self.siblings.forEach(val => {
        // Make child announce to his children
        val.announce(key, { go: 'down', data: data });

        // Trigger the event
        val.trigger(key, data);
    });
};

/**
 * Make the announcement to all parents
 * @param  {object} self
 * @param   {String} key Key to be listened on the events
 * @param   {*} data Data to be passed to the listeners
 */
announceUp = (self, key, data) => {
    // TODO: When caught it shouldn't go up
    if (self.parent) {
        // Make parent announce to his parents'
        self.parent.announce(key, { go: 'up', data: data });
    }

    // Trigger the event in this
    self.trigger(key, data);
};

// -----------------------------------------
// EXPORT

let Rock = function () {
    return this.initialize.apply(this, arguments);
};
Rock.extend = extend;

Rock.prototype = deepMixIn(Rock.prototype, extendBackbone, rockConfig, {
    extend, extendBackbone,
    initialize, bindToSelf,
    adopt, unadopt, announce,
    destroySiblings, destroy
});

export default Rock;
