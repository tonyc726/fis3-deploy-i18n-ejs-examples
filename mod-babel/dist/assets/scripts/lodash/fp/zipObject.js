define('node_modules/lodash/fp/zipObject', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('zipObject', require('node_modules/lodash/zipObject'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
