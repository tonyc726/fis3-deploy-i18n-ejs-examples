define('node_modules/lodash/fp/isUndefined', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isUndefined', require('node_modules/lodash/isUndefined'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
