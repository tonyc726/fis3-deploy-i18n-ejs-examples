define('node_modules/lodash/fp/spread', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('spread', require('node_modules/lodash/spread'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
