define('node_modules/lodash/fp/getOr', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('getOr', require('node_modules/lodash/get'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
