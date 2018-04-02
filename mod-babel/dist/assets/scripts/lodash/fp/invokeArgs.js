define('node_modules/lodash/fp/invokeArgs', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('invokeArgs', require('node_modules/lodash/invoke'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
