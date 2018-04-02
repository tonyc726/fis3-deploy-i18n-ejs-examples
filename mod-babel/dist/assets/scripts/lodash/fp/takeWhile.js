define('node_modules/lodash/fp/takeWhile', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('takeWhile', require('node_modules/lodash/takeWhile'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
