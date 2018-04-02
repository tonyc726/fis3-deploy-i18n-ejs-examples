define('node_modules/lodash/fp/findLast', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('findLast', require('node_modules/lodash/findLast'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
