define('node_modules/lodash/fp/throttle', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('throttle', require('node_modules/lodash/throttle'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
