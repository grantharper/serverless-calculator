'use strict';

const main = require('./src/main');

module.exports.calculate = (event, context, callback) => {
  console.log(event);
  let eventBody = JSON.parse(event.body);
  main.execute(eventBody, function (err, output) {
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
