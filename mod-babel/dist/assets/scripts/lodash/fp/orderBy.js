define('node_modules/lodash/fp/orderBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('orderBy', require('node_modules/lodash/orderBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
