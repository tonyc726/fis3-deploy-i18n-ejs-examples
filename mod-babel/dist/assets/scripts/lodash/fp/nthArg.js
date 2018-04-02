define('node_modules/lodash/fp/nthArg', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('nthArg', require('node_modules/lodash/nthArg'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
