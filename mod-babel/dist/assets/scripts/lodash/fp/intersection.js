define('node_modules/lodash/fp/intersection', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('intersection', require('node_modules/lodash/intersection'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
