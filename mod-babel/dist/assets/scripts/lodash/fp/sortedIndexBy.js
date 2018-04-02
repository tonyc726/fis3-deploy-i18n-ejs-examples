define('node_modules/lodash/fp/sortedIndexBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sortedIndexBy', require('node_modules/lodash/sortedIndexBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
