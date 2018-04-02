define('node_modules/lodash/fp/remove', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('remove', require('node_modules/lodash/remove'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
