define('node_modules/lodash/fp/isSafeInteger', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isSafeInteger', require('node_modules/lodash/isSafeInteger'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
