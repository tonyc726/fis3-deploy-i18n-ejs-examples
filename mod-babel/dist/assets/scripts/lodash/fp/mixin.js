define('node_modules/lodash/fp/mixin', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('mixin', require('node_modules/lodash/mixin'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
