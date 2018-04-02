define('node_modules/lodash/fp/cloneWith', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('cloneWith', require('node_modules/lodash/cloneWith'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
