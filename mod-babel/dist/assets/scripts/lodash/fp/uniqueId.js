define('node_modules/lodash/fp/uniqueId', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('uniqueId', require('node_modules/lodash/uniqueId'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
