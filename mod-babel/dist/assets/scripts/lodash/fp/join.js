define('node_modules/lodash/fp/join', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('join', require('node_modules/lodash/join'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
