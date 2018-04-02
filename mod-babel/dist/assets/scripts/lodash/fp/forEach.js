define('node_modules/lodash/fp/forEach', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('forEach', require('node_modules/lodash/forEach'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
