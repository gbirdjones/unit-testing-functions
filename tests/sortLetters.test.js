'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	})
	it( 'should throw an exception if the input is invalid', function() {
		expect(function() {functions.sortLetters('string')}).to.not.throw('invalid input');
	})

});