define('node_modules/lodash/fp/add', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('add', require('node_modules/lodash/add'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
