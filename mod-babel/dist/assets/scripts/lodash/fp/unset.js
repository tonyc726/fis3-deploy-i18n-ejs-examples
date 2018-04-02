define('node_modules/lodash/fp/unset', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('unset', require('node_modules/lodash/unset'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
