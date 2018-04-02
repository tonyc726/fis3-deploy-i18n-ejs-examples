define('node_modules/lodash/fp/padStart', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('padStart', require('node_modules/lodash/padStart'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
