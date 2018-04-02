define('node_modules/lodash/fp/sortedIndex', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sortedIndex', require('node_modules/lodash/sortedIndex'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
