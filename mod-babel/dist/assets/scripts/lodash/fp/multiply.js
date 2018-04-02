define('node_modules/lodash/fp/multiply', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('multiply', require('node_modules/lodash/multiply'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
