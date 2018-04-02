define('node_modules/lodash/fp/conformsTo', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('conformsTo', require('node_modules/lodash/conformsTo'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
