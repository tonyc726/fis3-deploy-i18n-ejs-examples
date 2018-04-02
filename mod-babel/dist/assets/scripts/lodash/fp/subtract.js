define('node_modules/lodash/fp/subtract', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('subtract', require('node_modules/lodash/subtract'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
