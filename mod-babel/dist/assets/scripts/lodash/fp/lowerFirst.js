define('node_modules/lodash/fp/lowerFirst', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('lowerFirst', require('node_modules/lodash/lowerFirst'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
