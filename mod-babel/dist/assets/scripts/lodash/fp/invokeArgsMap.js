define('node_modules/lodash/fp/invokeArgsMap', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('invokeArgsMap', require('node_modules/lodash/invokeMap'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
