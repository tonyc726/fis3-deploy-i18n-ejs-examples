define('node_modules/lodash/fp/toSafeInteger', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toSafeInteger', require('node_modules/lodash/toSafeInteger'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
