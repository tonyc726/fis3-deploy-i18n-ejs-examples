define('node_modules/lodash/fp/wrapperReverse', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('wrapperReverse', require('node_modules/lodash/wrapperReverse'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
