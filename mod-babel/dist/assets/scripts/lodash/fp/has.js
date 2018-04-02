define('node_modules/lodash/fp/has', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('has', require('node_modules/lodash/has'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
