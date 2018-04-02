define('node_modules/lodash/fp/isMatch', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isMatch', require('node_modules/lodash/isMatch'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
