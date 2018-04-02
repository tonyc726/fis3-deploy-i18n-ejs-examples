define('node_modules/lodash/fp/words', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('words', require('node_modules/lodash/words'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
