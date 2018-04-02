define('node_modules/lodash/fp/noop', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('noop', require('node_modules/lodash/noop'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
