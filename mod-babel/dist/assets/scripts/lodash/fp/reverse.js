define('node_modules/lodash/fp/reverse', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('reverse', require('node_modules/lodash/reverse'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
