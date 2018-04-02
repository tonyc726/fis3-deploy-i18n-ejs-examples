define('node_modules/lodash/fp/minBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('minBy', require('node_modules/lodash/minBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
