define('node_modules/lodash/fp/sortedIndexOf', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sortedIndexOf', require('node_modules/lodash/sortedIndexOf'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
