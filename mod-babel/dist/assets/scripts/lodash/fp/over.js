define('node_modules/lodash/fp/over', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('over', require('node_modules/lodash/over'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
