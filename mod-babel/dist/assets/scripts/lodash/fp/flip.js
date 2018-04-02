define('node_modules/lodash/fp/flip', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('flip', require('node_modules/lodash/flip'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
