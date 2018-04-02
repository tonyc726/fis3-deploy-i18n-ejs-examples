define('node_modules/lodash/fp/tail', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('tail', require('node_modules/lodash/tail'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
