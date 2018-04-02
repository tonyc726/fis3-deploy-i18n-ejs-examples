define('node_modules/lodash/fp/split', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('split', require('node_modules/lodash/split'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
