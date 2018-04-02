define('node_modules/lodash/fp/isArrayBuffer', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isArrayBuffer', require('node_modules/lodash/isArrayBuffer'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
