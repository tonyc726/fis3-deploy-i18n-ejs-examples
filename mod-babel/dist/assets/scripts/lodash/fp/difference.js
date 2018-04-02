define('node_modules/lodash/fp/difference', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('difference', require('node_modules/lodash/difference'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
