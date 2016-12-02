/* eslint-disable strict */'use strict';/* eslint-enable */
/* global describe it beforeEach */

var expect = require('chai').expect;
var mailbox = require('../../src/mailbox.js');

// --------------------------------
// Functions

// --------------------------------
// Suite of tests

describe('mailbox', function () {
    beforeEach(function () {
        mailbox.reset();
    });

    // on
    describe('on', function () {
        it('should return an id', function () {
            var id = mailbox.on('foo', () => {});
            expect(id).to.be.a('number');
        });

        it('should return a custom id', function () {
            var id = mailbox.on('foo', 'bar', () => {});
            expect(id).to.be.a('string');
            expect(id).to.eql('bar');
        });

        it('should listen to events', function (done) {
            mailbox.on('foo', done);
            mailbox.send('foo');
        });

        it('should error without a message', function (done) {
            try {
                mailbox.on(null, () => {});
                done('An error should have happened');
            } catch (err) {
                done();
            }
        });

        it('should error without a listener', function (done) {
            try {
                mailbox.on('foo');
                done('An error should have happened');
            } catch (err) {
                done();
            }
        });
    });

    // off
    describe('off', function () {
        it('should not listen', function (done) {
            var timer;
            var id = mailbox.on('foo', function () {
                timer && clearTimeout(timer);

                if (setDone) { return; }
                setDone = true;

                done('It should not listen!');
            });

            mailbox.off('foo', id);
            mailbox.send('foo');

            // Now lets wait for nothing to happen
            timer = setTimeout(done, 500);
        });

        it('should not remove all id msg listeners', function (done) {
            var timer;
            var otherSet = false;
            var id = mailbox.on('foo', function () {
                timer && clearTimeout(timer);
                done('It should not listen to the one with id!');
            });

            mailbox.on('foo', () => { otherSet = true; });
            mailbox.off('foo', id);
            mailbox.send('foo');

            // Now lets wait for nothing to happen
            timer = setTimeout(function () {
                done(!otherSet ? 'Other isn\'t set!' : null);
            }, 500);
        });

        it('should remove all id msg listeners', function (done) {
            var setDone = false;
            var listener = function (num) {
                timer && clearTimeout(timer);

                if (setDone) { return; }
                setDone = true;

                done('It should not listen to the ' + num + '!');
            };
            var timer;

            mailbox.on('foo', listener.bind(null, 'first'));
            mailbox.on('foo', listener.bind(null, 'second'));

            mailbox.off('foo');
            mailbox.send('foo');

            // Now lets wait for nothing to happen
            timer = setTimeout(done, 500);
        });
    });

    // send
    describe('send', function () {
        it('should send message', function (done) {
            mailbox.on('foo', function (data) {
                done();
            });
            mailbox.send('foo');
        });

        it('should send message with data', function (done) {
            mailbox.on('foo', function (data) {
                expect(data).to.be.an('string');
                expect(data).to.eql('bar');

                done();
            });
            mailbox.send('foo', 'bar');
        });

        it('should send message with data object', function (done) {
            mailbox.on('foo', function (data) {
                expect(data).to.be.an('object');
                expect(data).to.contain.keys(['foo']);
                expect(data.foo).to.eql('bar');

                done();
            });
            mailbox.send('foo', { foo: 'bar' });
        });
    });

    // reset
    describe('reset', function () {
        it('should reset', function (done) {
            var timer;

            mailbox.on('foo', function () {
                timer && clearTimeout(timer);
                done('It shouldn\'t happen!');
            });
            mailbox.reset();
            mailbox.send('foo');

            // Now lets wait for nothing to happen
            timer = setTimeout(done, 500);
        });
    });
});
