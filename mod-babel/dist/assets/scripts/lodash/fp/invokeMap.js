define('node_modules/lodash/fp/invokeMap', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('invokeMap', require('node_modules/lodash/invokeMap'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
