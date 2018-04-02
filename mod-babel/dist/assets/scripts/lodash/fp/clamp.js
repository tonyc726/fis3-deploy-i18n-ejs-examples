define('node_modules/lodash/fp/clamp', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('clamp', require('node_modules/lodash/clamp'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
