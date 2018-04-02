define('node_modules/lodash/fp/zip', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('zip', require('node_modules/lodash/zip'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
