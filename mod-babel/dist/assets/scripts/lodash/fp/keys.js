define('node_modules/lodash/fp/keys', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('keys', require('node_modules/lodash/keys'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
