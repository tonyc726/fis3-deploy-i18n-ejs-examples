define('node_modules/lodash/fp/isInteger', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isInteger', require('node_modules/lodash/isInteger'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
