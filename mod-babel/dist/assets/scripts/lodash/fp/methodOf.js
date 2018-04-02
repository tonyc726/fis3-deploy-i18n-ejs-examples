define('node_modules/lodash/fp/methodOf', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('methodOf', require('node_modules/lodash/methodOf'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
