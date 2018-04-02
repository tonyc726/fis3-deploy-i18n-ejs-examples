define('node_modules/lodash/fp/flattenDepth', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('flattenDepth', require('node_modules/lodash/flattenDepth'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
