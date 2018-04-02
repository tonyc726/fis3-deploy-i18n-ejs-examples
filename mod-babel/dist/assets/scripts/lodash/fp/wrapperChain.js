define('node_modules/lodash/fp/wrapperChain', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('wrapperChain', require('node_modules/lodash/wrapperChain'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
