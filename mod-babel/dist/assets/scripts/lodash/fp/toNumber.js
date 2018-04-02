define('node_modules/lodash/fp/toNumber', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toNumber', require('node_modules/lodash/toNumber'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
