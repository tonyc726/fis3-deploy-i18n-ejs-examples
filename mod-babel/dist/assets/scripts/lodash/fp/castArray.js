define('node_modules/lodash/fp/castArray', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('castArray', require('node_modules/lodash/castArray'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
