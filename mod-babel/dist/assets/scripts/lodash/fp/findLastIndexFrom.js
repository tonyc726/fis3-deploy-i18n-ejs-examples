define('node_modules/lodash/fp/findLastIndexFrom', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('findLastIndexFrom', require('node_modules/lodash/findLastIndex'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
