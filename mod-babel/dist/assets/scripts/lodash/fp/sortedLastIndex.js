define('node_modules/lodash/fp/sortedLastIndex', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sortedLastIndex', require('node_modules/lodash/sortedLastIndex'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
