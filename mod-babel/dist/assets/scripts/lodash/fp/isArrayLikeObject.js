define('node_modules/lodash/fp/isArrayLikeObject', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isArrayLikeObject', require('node_modules/lodash/isArrayLikeObject'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
