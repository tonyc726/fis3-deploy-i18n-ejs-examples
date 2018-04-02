define('node_modules/lodash/fp/isPlainObject', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isPlainObject', require('node_modules/lodash/isPlainObject'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
