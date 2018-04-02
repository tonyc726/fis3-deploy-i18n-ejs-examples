define('node_modules/lodash/fp/now', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('now', require('node_modules/lodash/now'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
