define('node_modules/lodash/fp/findLastFrom', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('findLastFrom', require('node_modules/lodash/findLast'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
