define('node_modules/lodash/fp/dropRightWhile', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('dropRightWhile', require('node_modules/lodash/dropRightWhile'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
