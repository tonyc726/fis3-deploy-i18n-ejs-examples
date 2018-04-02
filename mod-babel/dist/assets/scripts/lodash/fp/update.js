define('node_modules/lodash/fp/update', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('update', require('node_modules/lodash/update'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
