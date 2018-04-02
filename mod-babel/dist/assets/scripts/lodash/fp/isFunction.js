define('node_modules/lodash/fp/isFunction', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isFunction', require('node_modules/lodash/isFunction'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
