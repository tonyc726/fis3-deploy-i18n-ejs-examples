define('node_modules/lodash/fp/take', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('take', require('node_modules/lodash/take'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
