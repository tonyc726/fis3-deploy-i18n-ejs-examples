define('node_modules/lodash/fp/startsWith', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('startsWith', require('node_modules/lodash/startsWith'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
