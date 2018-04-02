define('node_modules/lodash/fp/pick', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('pick', require('node_modules/lodash/pick'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
