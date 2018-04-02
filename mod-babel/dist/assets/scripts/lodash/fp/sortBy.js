define('node_modules/lodash/fp/sortBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sortBy', require('node_modules/lodash/sortBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
