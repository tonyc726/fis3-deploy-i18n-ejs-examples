define('node_modules/lodash/fp/invoke', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('invoke', require('node_modules/lodash/invoke'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
