define('node_modules/lodash/fp/toUpper', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toUpper', require('node_modules/lodash/toUpper'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
