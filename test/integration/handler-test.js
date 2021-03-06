'use strict'
const chai = require('chai'),
  should = chai.should(),
  handler = require('./../../handler'),
  context = null;

describe('handler - integration test', function () {
  it('should add provided numbers and provide success response object', function () {
    let event = {
      body: "{\"operation\": \"add\", \"num1\": 2, \"num2\": 3}"
    };
    handler.calculate(event, context, function (err, response) {
      //console.log(response);
      response.statusCode.should.equal(200);
      let body = JSON.parse(response.body);
      body.result.should.equal(5);

    });
  });
  it('should provide failure response object', function () {
    let event = {
      body: "{\"garbage\": \"garbage\"}"
    };
    handler.calculate(event, context, function (err, response) {

      //console.log(err);
      //console.log(response);
      response.statusCode.should.equal(500);
      let body = JSON.parse(response.body);
      body.error.should.equal('invalid event structure');

    });
  });
});