define('node_modules/lodash/fp/trimChars', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('trimChars', require('node_modules/lodash/trim'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
