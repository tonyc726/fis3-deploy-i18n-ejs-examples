define('node_modules/lodash/fp/gt', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('gt', require('node_modules/lodash/gt'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
