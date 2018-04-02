define('node_modules/lodash/fp/reject', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('reject', require('node_modules/lodash/reject'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
