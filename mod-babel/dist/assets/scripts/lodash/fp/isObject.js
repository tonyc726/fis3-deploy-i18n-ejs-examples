define('node_modules/lodash/fp/isObject', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isObject', require('node_modules/lodash/isObject'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
