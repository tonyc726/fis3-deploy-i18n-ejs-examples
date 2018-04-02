define('node_modules/lodash/fp/drop', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('drop', require('node_modules/lodash/drop'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
