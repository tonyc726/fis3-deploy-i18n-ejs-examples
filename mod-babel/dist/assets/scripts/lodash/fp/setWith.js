define('node_modules/lodash/fp/setWith', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('setWith', require('node_modules/lodash/setWith'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
