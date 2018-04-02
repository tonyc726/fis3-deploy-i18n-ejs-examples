define('node_modules/lodash/fp/before', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('before', require('node_modules/lodash/before'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
