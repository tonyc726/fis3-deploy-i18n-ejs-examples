define('node_modules/lodash/fp/kebabCase', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('kebabCase', require('node_modules/lodash/kebabCase'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
