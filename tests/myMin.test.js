'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	})
	it( 'should throw an exception if the input is a string', function() {
		expect(function() {functions.myMin('string')}).to.throw('invalid input');
	})
	it( 'should throw an exception if the input is an array', function() {
		expect(function() {functions.myMin([a])}).to.throw('invalid input');
	})

});