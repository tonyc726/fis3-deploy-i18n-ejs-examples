define('node_modules/lodash/fp/meanBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('meanBy', require('node_modules/lodash/meanBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
