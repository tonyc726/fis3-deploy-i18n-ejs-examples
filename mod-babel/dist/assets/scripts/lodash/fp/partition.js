define('node_modules/lodash/fp/partition', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('partition', require('node_modules/lodash/partition'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
