define('node_modules/lodash/fp/eq', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('eq', require('node_modules/lodash/eq'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
