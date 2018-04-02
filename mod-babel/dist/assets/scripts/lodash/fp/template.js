define('node_modules/lodash/fp/template', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('template', require('node_modules/lodash/template'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
