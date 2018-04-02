define('node_modules/lodash/fp/once', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('once', require('node_modules/lodash/once'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
