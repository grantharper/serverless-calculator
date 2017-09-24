'use strict'
const chai = require('chai'),
  should = chai.should(),
  sinon = require('sinon'),
  handler = require('./../../handler'),
  main = require('./../../src/main');

var context = null;

describe('handler - unit test', function () {
  it('should provide success response', function () {
    var mainStub = sinon.stub(main, 'execute');
    //this makes it so the callback will return this information instead of actually calling the function
    mainStub.callsArgWith(1, null, {result: 90});
    let event = {
      operation: 'add',
      num1: 12,
      num2: 14
    };
    handler.calculate(event, context, function (err, response) {
      should.not.exist(err);
      response.statusCode.should.equal(200);
      //console.log(response);
      let body = JSON.parse(response.body);
      should.exist(body.result);
      body.result.should.equal(90);
    });
    
    mainStub.restore();
  });

  it('should provide failure response', function(){
    var mainStub = sinon.stub(main, 'execute');

    mainStub.callsArgWith(1, new Error('invalid'));
    let event = {
      garbage: 'garbage'
    };
    handler.calculate(event, context, function(err, response){
      should.exist(err);
      response.statusCode.should.equal(500);
      let body = JSON.parse(response.body);
      body.error.should.equal('invalid');
    });
    mainStub.restore();
  });
});