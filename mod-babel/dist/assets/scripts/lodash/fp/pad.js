define('node_modules/lodash/fp/pad', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('pad', require('node_modules/lodash/pad'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
