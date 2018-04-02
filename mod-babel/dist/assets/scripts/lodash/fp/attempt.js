define('node_modules/lodash/fp/attempt', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('attempt', require('node_modules/lodash/attempt'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
