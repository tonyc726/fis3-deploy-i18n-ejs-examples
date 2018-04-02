define('node_modules/lodash/fp/forIn', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('forIn', require('node_modules/lodash/forIn'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
