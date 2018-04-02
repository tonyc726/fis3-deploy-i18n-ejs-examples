define('node_modules/lodash/fp/flatMap', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('flatMap', require('node_modules/lodash/flatMap'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
