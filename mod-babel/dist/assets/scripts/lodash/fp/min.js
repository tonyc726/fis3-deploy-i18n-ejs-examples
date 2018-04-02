define('node_modules/lodash/fp/min', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('min', require('node_modules/lodash/min'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
