define('node_modules/lodash/fp/omit', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('omit', require('node_modules/lodash/omit'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
