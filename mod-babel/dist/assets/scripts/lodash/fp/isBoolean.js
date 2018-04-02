define('node_modules/lodash/fp/isBoolean', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isBoolean', require('node_modules/lodash/isBoolean'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
