define('node_modules/lodash/fp/groupBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('groupBy', require('node_modules/lodash/groupBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
