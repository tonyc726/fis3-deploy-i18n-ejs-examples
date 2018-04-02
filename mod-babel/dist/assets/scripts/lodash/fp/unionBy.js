define('node_modules/lodash/fp/unionBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('unionBy', require('node_modules/lodash/unionBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
