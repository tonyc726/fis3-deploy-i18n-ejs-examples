define('node_modules/lodash/fp/values', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('values', require('node_modules/lodash/values'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
