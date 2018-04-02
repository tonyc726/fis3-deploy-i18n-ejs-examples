define('node_modules/lodash/fp/replace', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('replace', require('node_modules/lodash/replace'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
