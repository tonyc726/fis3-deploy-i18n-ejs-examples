define('node_modules/lodash/fp/camelCase', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('camelCase', require('node_modules/lodash/camelCase'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
