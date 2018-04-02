define('node_modules/lodash/fp/isError', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isError', require('node_modules/lodash/isError'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
