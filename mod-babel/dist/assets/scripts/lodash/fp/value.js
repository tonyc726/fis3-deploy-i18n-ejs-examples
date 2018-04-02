define('node_modules/lodash/fp/value', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('value', require('node_modules/lodash/value'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
