define('node_modules/lodash/fp/stubFalse', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('stubFalse', require('node_modules/lodash/stubFalse'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
