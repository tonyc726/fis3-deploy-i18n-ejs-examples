define('node_modules/lodash/fp/transform', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('transform', require('node_modules/lodash/transform'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
