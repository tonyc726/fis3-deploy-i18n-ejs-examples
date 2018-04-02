define('node_modules/lodash/fp/isString', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isString', require('node_modules/lodash/isString'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
