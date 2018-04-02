define('node_modules/lodash/fp/trim', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('trim', require('node_modules/lodash/trim'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
