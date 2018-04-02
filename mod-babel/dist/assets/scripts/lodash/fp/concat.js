define('node_modules/lodash/fp/concat', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('concat', require('node_modules/lodash/concat'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
