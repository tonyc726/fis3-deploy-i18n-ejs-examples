define('node_modules/lodash/fp/isWeakMap', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isWeakMap', require('node_modules/lodash/isWeakMap'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
