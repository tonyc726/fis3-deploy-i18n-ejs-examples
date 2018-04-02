define('node_modules/lodash/fp/keysIn', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('keysIn', require('node_modules/lodash/keysIn'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
