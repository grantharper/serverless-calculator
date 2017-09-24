// module.exports = {
//   execute: execute
// };

module.exports.execute = function(event, callback){
  //verify input
  let response = {};

  if(!event.operation || !event.num1 || !event.num2){
    return callback(new Error('invalid event structure'));
  }

  if(typeof event.num1 !== 'number' || typeof event.num2 !== 'number'){
    return callback(new Error('invalid number input'));
  }

  if(typeof event.operation !== 'string'){
    return callback(new Error('invalid operation input'))
  }

  let result;
  if(event.operation == 'add'){
    result = event.num1 + event.num2;
  } else if(event.operation == 'subtract'){
    result = event.num1 - event.num2;
  } else{
    return callback(new Error('unsupported operation'));
  }

  response.result = result;
  return callback(null, response);

}