define('node_modules/lodash/fp/result', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('result', require('node_modules/lodash/result'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
