define('node_modules/lodash/fp/sortedLastIndexBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sortedLastIndexBy', require('node_modules/lodash/sortedLastIndexBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
