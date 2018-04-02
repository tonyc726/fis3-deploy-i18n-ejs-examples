define('node_modules/lodash/fp/toInteger', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toInteger', require('node_modules/lodash/toInteger'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
