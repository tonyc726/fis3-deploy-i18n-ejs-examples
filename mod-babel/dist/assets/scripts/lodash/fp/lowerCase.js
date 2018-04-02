define('node_modules/lodash/fp/lowerCase', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('lowerCase', require('node_modules/lodash/lowerCase'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
