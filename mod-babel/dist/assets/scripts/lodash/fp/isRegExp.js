define('node_modules/lodash/fp/isRegExp', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isRegExp', require('node_modules/lodash/isRegExp'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
