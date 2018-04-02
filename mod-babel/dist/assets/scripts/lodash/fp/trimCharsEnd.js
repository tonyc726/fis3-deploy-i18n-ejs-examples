define('node_modules/lodash/fp/trimCharsEnd', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('trimCharsEnd', require('node_modules/lodash/trimEnd'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
