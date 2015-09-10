'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	})
	it( 'should throw an exception if the input is invalid', function() {
		expect(function() {functions.absVal.parseInt()}).to.not.throw('invalid input');
	})

});