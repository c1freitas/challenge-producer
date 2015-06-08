
var mocha = require('mocha');
var chai = require('chai');

var assert = chai.assert;

var validOperations = ['+', '-', '*', '/'];

var  Producer = require('../lib/Producer.js');

describe('Helper Functions', function() {
  describe('Random Number', function() {
    it('should return a number between 1 and 100', function() {
      var p = new Producer();
      for (var i = 0; i < 100; i++) {
        var num = p.generateNumber();
        assert.isAbove(num, 0, 'Number should be above 0');
        assert.isBelow(num, 101, 'Number should be equal to or below 100');
      }

    })
  })

  describe('Random Operator', function() {
    it('should return a semi-random valid operator', function() {
      var p = new Producer();
      for (var i = 0; i < 100; i++) {
        var op = p.randomOperator();
        assert.include(validOperations, op, 'Needs to return valid operator');
      }

    })
  })
})

describe('Producer', function() {
  describe('Create Operation', function() {
    it('should return valid math operation', function() {
      var p = new Producer();
      for (var i = 0; i < 100; i++) {
        var op = p.createOperation();
        assert.match(op, /^[0-9]{1,3}[\+\-\*\/]{1}[0-9]{1,3}[\=]/, 'regexp matches');
      }

    })
  })

})
