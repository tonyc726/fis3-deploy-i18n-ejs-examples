define('node_modules/lodash/fp/parseInt', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('parseInt', require('node_modules/lodash/parseInt'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
