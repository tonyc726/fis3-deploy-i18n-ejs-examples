define('node_modules/lodash/fp/keyBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('keyBy', require('node_modules/lodash/keyBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
