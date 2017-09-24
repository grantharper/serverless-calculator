'use strict';

const main = require('./src/main');

//expected input for event
//event.operation = (add|subtract)
//event.num1 = 12
//event.num2 = 14
//function will perform calculation

module.exports.calculate = (event, context, callback) => {
  main.execute(event, function (err, output) {
    let response = {};
    if (err) {
      response.statusCode = 500;
      let body = {};
      body.error = err.message;
      response.body = JSON.stringify(body);
      return callback(err, response);
    }else{
      response.statusCode = 200;
      response.body = JSON.stringify(output);
      return callback(null, response);
    }
  });
};
