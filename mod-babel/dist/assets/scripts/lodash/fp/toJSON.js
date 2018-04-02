define('node_modules/lodash/fp/toJSON', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toJSON', require('node_modules/lodash/toJSON'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
