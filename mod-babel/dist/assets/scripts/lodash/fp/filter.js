define('node_modules/lodash/fp/filter', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('filter', require('node_modules/lodash/filter'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
