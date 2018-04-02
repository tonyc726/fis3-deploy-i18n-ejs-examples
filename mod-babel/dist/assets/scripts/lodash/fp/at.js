define('node_modules/lodash/fp/at', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('at', require('node_modules/lodash/at'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
