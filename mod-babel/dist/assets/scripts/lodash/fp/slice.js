define('node_modules/lodash/fp/slice', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('slice', require('node_modules/lodash/slice'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
