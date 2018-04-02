define('node_modules/lodash/fp/identity', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('identity', require('node_modules/lodash/identity'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
