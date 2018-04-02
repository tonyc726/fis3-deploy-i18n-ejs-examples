define('node_modules/lodash/fp/union', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('union', require('node_modules/lodash/union'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
