define('node_modules/lodash/fp/random', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('random', require('node_modules/lodash/random'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
