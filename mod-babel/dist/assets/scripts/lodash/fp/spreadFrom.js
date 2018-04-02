define('node_modules/lodash/fp/spreadFrom', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('spreadFrom', require('node_modules/lodash/spread'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
