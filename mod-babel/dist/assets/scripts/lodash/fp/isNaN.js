define('node_modules/lodash/fp/isNaN', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isNaN', require('node_modules/lodash/isNaN'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
