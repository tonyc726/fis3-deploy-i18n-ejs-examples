define('node_modules/lodash/fp/stubString', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('stubString', require('node_modules/lodash/stubString'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
