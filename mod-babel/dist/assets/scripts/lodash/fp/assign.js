define('node_modules/lodash/fp/assign', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('assign', require('node_modules/lodash/assign'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
