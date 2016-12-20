'use strict';
/* global describe it beforeEach afterEach before after */

import { expect } from 'chai';
import is from '../is.js';

// --------------------------------
// Functions

// --------------------------------
// Suite of tests

describe('is', () => {
    // node
    describe('node', () => {
        it('should return true', () => {
            const result = is.node();

            expect(result).to.be.a('boolean');
            expect(result).to.equal(true);
        });

        it.skip('shouldn\'t return true', () => {
            // TODO: Stubs?
        });
    });

    // browser
    describe('browser', () => {
        it.skip('should return true', () => {
            // TODO: Stubs?
        });

        it('shouldn\'t return true', () => {
            const result = is.browser();

            expect(result).to.be.a('boolean');
            expect(result).to.equal(false);
        });
    });

    // ie
    describe('ie', () => {
        it.skip('should return true', () => {
            // TODO: Stubs?
        });

        it('shouldn\'t return true', () => {
            const result = is.ie();

            expect(result).to.be.a('boolean');
            expect(result).to.equal(false);
        });
    });

    // edge
    describe('edge', () => {
        it.skip('should return true', () => {
            // TODO: Stubs?
        });

        it('shouldn\'t return true', () => {
            const result = is.edge();

            expect(result).to.be.a('boolean');
            expect(result).to.equal(false);
        });
    });

    // ios
    describe('ios', () => {
        it.skip('should return true', () => {
            // TODO: Stubs?
        });

        it('shouldn\'t return true', () => {
            const result = is.ios();

            expect(result).to.be.a('boolean');
            expect(result).to.equal(false);
        });
    });

    // android
    describe('android', () => {
        it.skip('should return true', () => {
            // TODO: Stubs?
        });

        it('shouldn\'t return true', () => {
            const result = is.android();

            expect(result).to.be.a('boolean');
            expect(result).to.equal(false);
        });
    });

    // mobile
    describe('mobile', () => {
        it.skip('should return true', () => {
            // TODO: Stubs?
        });

        it('shouldn\'t return true', () => {
            const result = is.mobile();

            expect(result).to.be.a('boolean');
            expect(result).to.equal(false);
        });
    });

    // touch
    describe('touch', () => {
        it.skip('should return true', () => {
            // TODO: Stubs?
        });

        it('shouldn\'t return true', () => {
            const result = is.mobile();

            expect(result).to.be.a('boolean');
            expect(result).to.equal(false);
        });
    });

    // media
    describe('media', () => {
        it.skip('should return true', () => {
            // TODO: Stubs?
        });

        it('shouldn\'t return true', () => {
            const result = is.media();

            expect(result).to.be.a('boolean');
            expect(result).to.equal(false);
        });
    });

    // url
    describe('url', () => {
        it('should be true', () => {
            const urls = [
                'http://www.google.com',
                'http://google.com',
                'https://www.google.com',
                'https://google.com'
            ];
            let result;

            urls.forEach((url) => {
                result = is.url(url);

                expect(result).to.be.a('boolean');
                expect(result).to.equal(true);
            });
        });

        it('shouldn\'t be true', () => {
            const urls = [
                'www.google.com',
                'google.com',
                '/www.google.com',
                '/google.com',
                '/bar'
            ];
            let result;

            urls.forEach((url) => {
                result = is.url(url);

                expect(result).to.be.a('boolean');
                expect(result).to.equal(false);
            });
        });
    });
});
