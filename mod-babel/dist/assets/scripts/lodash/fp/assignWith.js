define('node_modules/lodash/fp/assignWith', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('assignWith', require('node_modules/lodash/assignWith'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
