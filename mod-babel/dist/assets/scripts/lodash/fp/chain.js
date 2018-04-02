define('node_modules/lodash/fp/chain', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('chain', require('node_modules/lodash/chain'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
