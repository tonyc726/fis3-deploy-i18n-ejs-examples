define('node_modules/lodash/fp/assignInWith', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('assignInWith', require('node_modules/lodash/assignInWith'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
