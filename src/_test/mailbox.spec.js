/* eslint-disable strict */'use strict';/* eslint-enable */
/* global describe it beforeEach */

import { expect } from 'chai';
import mailbox from '../../src/mailbox.js';

// --------------------------------
// Functions

// --------------------------------
// Suite of tests

describe('mailbox', () => {
    beforeEach(() => {
        mailbox.reset();
    });

    // on
    describe('on', () => {
        it('should return an id', () => {
            const id = mailbox.on('foo', () => {});
            expect(id).to.be.a('string');
            expect(id).to.have.length.above(0);
        });

        it('should return a custom id', () => {
            const id = mailbox.on('foo', 'bar', () => {});
            expect(id).to.be.a('string');
            expect(id).to.eql('bar');
        });

        it('should listen to events', (done) => {
            mailbox.on('foo', done);
            mailbox.send('foo');
        });

        it('should error without a message', (done) => {
            try {
                mailbox.on(null, () => {});
                done('An error should have happened');
            } catch (err) {
                done();
            }
        });

        it('should error without a listener', (done) => {
            try {
                mailbox.on('foo');
                done('An error should have happened');
            } catch (err) {
                done();
            }
        });
    });

    // off
    describe('off', () => {
        it('should not listen', (done) => {
            let setDone;
            /* eslint-disable prefer-const */
            let timer;
            /* eslint-enable prefer-const */
            const id = mailbox.on('foo', () => {
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

        it('should not remove all id msg listeners', (done) => {
            /* eslint-disable prefer-const */
            let timer;
            /* eslint-enable prefer-const */
            let otherSet = false;
            const id = mailbox.on('foo', () => {
                timer && clearTimeout(timer);
                done('It should not listen to the one with id!');
            });

            mailbox.on('foo', () => { otherSet = true; });
            mailbox.off('foo', id);
            mailbox.send('foo');

            // Now lets wait for nothing to happen
            timer = setTimeout(() => {
                done(!otherSet ? 'Other isn\'t set!' : null);
            }, 500);
        });

        it('should remove all id msg listeners', (done) => {
            let setDone = false;
            /* eslint-disable prefer-const */
            let timer;
            /* eslint-enable prefer-const */
            const listener = function (num) {
                timer && clearTimeout(timer);

                if (setDone) { return; }
                setDone = true;

                done(`It should not listen to the ${num}!`);
            };

            mailbox.on('foo', listener.bind(null, 'first'));
            mailbox.on('foo', listener.bind(null, 'second'));

            mailbox.off('foo');
            mailbox.send('foo');

            // Now lets wait for nothing to happen
            timer = setTimeout(done, 500);
        });
    });

    // send
    describe('send', () => {
        it('should send message', (done) => {
            mailbox.on('foo', () => done());
            mailbox.send('foo');
        });

        it('should send message with data', (done) => {
            mailbox.on('foo', (data) => {
                expect(data).to.be.an('string');
                expect(data).to.eql('bar');

                done();
            });
            mailbox.send('foo', 'bar');
        });

        it('should send message with data object', (done) => {
            mailbox.on('foo', (data) => {
                expect(data).to.be.an('object');
                expect(data).to.contain.keys(['foo']);
                expect(data.foo).to.eql('bar');

                done();
            });
            mailbox.send('foo', { foo: 'bar' });
        });
    });

    // reset
    describe('reset', () => {
        it('should reset', (done) => {
            /* eslint-disable prefer-const */
            let timer;
            /* eslint-enable prefer-const */

            mailbox.on('foo', () => {
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
