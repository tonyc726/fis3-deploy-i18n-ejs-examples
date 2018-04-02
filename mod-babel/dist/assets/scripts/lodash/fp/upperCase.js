define('node_modules/lodash/fp/upperCase', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('upperCase', require('node_modules/lodash/upperCase'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
