define('node_modules/lodash/fp/isDate', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isDate', require('node_modules/lodash/isDate'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
