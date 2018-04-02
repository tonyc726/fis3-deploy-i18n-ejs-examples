define('node_modules/lodash/fp/wrap', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('wrap', require('node_modules/lodash/wrap'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
