define('node_modules/lodash/fp/invertBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('invertBy', require('node_modules/lodash/invertBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
