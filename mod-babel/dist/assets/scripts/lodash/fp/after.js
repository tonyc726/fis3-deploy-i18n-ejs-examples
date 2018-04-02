define('node_modules/lodash/fp/after', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('after', require('node_modules/lodash/after'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
