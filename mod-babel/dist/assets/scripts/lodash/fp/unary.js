define('node_modules/lodash/fp/unary', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('unary', require('node_modules/lodash/unary'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
