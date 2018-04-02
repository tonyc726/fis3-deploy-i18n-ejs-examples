define('node_modules/lodash/fp/delay', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('delay', require('node_modules/lodash/delay'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
