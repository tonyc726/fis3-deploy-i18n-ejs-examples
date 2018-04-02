define('node_modules/lodash/fp/snakeCase', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('snakeCase', require('node_modules/lodash/snakeCase'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
