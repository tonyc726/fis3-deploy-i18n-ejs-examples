define('node_modules/lodash/fp/findFrom', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('findFrom', require('node_modules/lodash/find'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
