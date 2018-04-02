define('node_modules/lodash/fp/xorBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('xorBy', require('node_modules/lodash/xorBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
