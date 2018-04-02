define('node_modules/lodash/fp/findIndex', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('findIndex', require('node_modules/lodash/findIndex'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
