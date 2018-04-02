define('node_modules/lodash/fp/sortedLastIndexOf', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sortedLastIndexOf', require('node_modules/lodash/sortedLastIndexOf'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
