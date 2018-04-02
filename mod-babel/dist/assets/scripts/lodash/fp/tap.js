define('node_modules/lodash/fp/tap', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('tap', require('node_modules/lodash/tap'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
