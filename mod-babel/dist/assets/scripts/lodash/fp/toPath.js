define('node_modules/lodash/fp/toPath', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toPath', require('node_modules/lodash/toPath'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
