define('node_modules/lodash/fp/toString', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toString', require('node_modules/lodash/toString'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
