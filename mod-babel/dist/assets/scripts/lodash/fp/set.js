define('node_modules/lodash/fp/set', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('set', require('node_modules/lodash/set'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
