define('node_modules/lodash/fp/isNumber', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isNumber', require('node_modules/lodash/isNumber'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
