define('node_modules/lodash/fp/includes', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('includes', require('node_modules/lodash/includes'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
