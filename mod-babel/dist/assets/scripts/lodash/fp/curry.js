define('node_modules/lodash/fp/curry', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('curry', require('node_modules/lodash/curry'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
