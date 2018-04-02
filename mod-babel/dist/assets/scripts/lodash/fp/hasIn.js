define('node_modules/lodash/fp/hasIn', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('hasIn', require('node_modules/lodash/hasIn'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
