define('node_modules/lodash/fp/wrapperValue', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('wrapperValue', require('node_modules/lodash/wrapperValue'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
