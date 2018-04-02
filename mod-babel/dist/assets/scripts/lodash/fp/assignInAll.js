define('node_modules/lodash/fp/assignInAll', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('assignInAll', require('node_modules/lodash/assignIn'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
