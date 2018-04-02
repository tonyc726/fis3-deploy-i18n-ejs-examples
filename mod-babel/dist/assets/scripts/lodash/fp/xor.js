define('node_modules/lodash/fp/xor', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('xor', require('node_modules/lodash/xor'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
