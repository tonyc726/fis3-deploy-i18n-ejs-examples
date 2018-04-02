define('node_modules/lodash/fp/chunk', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('chunk', require('node_modules/lodash/chunk'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
