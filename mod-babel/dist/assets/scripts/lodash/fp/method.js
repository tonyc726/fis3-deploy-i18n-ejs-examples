define('node_modules/lodash/fp/method', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('method', require('node_modules/lodash/method'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
