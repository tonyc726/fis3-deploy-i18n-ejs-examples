define('node_modules/lodash/fp/reduce', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('reduce', require('node_modules/lodash/reduce'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
