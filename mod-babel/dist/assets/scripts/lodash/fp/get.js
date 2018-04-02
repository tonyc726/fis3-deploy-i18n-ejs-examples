define('node_modules/lodash/fp/get', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('get', require('node_modules/lodash/get'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
