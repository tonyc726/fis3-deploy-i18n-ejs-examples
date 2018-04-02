define('node_modules/lodash/fp/round', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('round', require('node_modules/lodash/round'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
