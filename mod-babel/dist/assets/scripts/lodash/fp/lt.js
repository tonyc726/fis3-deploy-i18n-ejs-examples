define('node_modules/lodash/fp/lt', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('lt', require('node_modules/lodash/lt'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
