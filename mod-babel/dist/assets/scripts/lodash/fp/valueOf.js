define('node_modules/lodash/fp/valueOf', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('valueOf', require('node_modules/lodash/valueOf'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
