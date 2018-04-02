define('node_modules/lodash/fp/commit', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('commit', require('node_modules/lodash/commit'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
