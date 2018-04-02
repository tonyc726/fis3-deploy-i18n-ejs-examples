define('node_modules/lodash/fp/times', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('times', require('node_modules/lodash/times'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
