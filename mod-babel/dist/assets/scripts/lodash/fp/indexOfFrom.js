define('node_modules/lodash/fp/indexOfFrom', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('indexOfFrom', require('node_modules/lodash/indexOf'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
