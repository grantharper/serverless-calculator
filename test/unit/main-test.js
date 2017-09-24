'use strict'
const chai = require('chai'),
  should = chai.should(),
  main = require('./../../src/main').execute;


describe('main - unit test', function () {
  it('should add provided numbers', function () {
    let event = {
      operation: 'add',
      num1: 12,
      num2: 14
    };
    main(event, function (err, response) {
      response.result.should.equal(event.num1 + event.num2);
    });
  });
  it('should subtract provided numbers', function () {
    let event = {
      operation: 'subtract',
      num1: 12,
      num2: 14
    };
    main(event, function (err, response) {
      response.result.should.equal(event.num1 - event.num2);
    });
  });

  it('should result in error when numbers are not provided', function () {
    let event = {
      operation: 'add',
      num1: 'blah blah',
      num2: 'strings'
    };
    main(event, function (err, response) {
      should.exist(err);
      err.message.should.equal('invalid number input');
    });
  });

  it('should result in error when operation is not correct data type', function () {
    let event = {
      operation: 1,
      num1: 12,
      num2: 14
    };
    main(event, function (err, response) {
      should.exist(err);
    });
  });

  it('should result in error when event is not structured correctly', function () {
    let event = {
      something: 1,
      num1: 12,
      num2: 14
    };
    main(event, function (err, response) {
      should.exist(err);
    });
  });

  it('should result in error when the operation is not supported', function () {
    let event = {
      operation: 'log',
      num1: 12,
      num2: 14
    };
    main(event, function (err, response) {
      should.exist(err);
    });
  });

});