define('node_modules/lodash/fp/toIterator', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toIterator', require('node_modules/lodash/toIterator'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
