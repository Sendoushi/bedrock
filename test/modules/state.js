/* eslint-disable strict */'use strict';/* eslint-enable */
/* global describe it */

var expect = require('chai').expect;
var state = require('../../src/state.js');

// --------------------------------
// Functions

// --------------------------------
// Suite of tests

describe('state', function () {
    // getNew
    describe('getNew', function () {
        it('should get a new object', function () {
            var result = state.getNew(null, { foo: 'bar' });

            expect(result).to.be.an('object');
            expect(result).to.contain.keys(['diff', 'state']);
            expect(result.state).to.be.an('object');
            expect(result.state).to.contain.keys(['foo']);
            expect(result.state.foo).to.be.a('string');
            expect(result.state.foo).to.eql('bar');
        });

        it('should merge states', function () {
            var result = state.getNew({ bar: 'foo' }, { foo: 'bar' });

            expect(result).to.be.an('object');
            expect(result).to.contain.keys(['diff', 'state']);
            expect(result.state).to.be.an('object');
            expect(result.state).to.contain.keys(['foo', 'bar']);
            expect(result.state.foo).to.be.a('string');
            expect(result.state.foo).to.eql('bar');
            expect(result.state.bar).to.be.a('string');
            expect(result.state.bar).to.eql('foo');
        });

        it('should merge states and get the difference', function () {
            var result = state.getNew({ bar: 'foo' }, { foo: 'bar' });

            expect(result).to.be.an('object');
            expect(result).to.contain.keys(['diff', 'state']);
            expect(result.diff).to.be.an('array');
            expect(result.diff).to.have.length.above(0);
        });

        it('should return no diff without differences', function () {
            var result = state.getNew({ foo: 'bar' }, { foo: 'bar' });

            expect(result).to.be.an('object');
            expect(result).to.contain.keys(['diff', 'state']);
            expect(result.diff).to.be.a('boolean');
            expect(result.diff).to.eql(false);
        });
    });
});
