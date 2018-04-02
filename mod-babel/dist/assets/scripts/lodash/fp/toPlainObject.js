define('node_modules/lodash/fp/toPlainObject', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toPlainObject', require('node_modules/lodash/toPlainObject'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
