define('node_modules/lodash/fp/cond', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('cond', require('node_modules/lodash/cond'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
