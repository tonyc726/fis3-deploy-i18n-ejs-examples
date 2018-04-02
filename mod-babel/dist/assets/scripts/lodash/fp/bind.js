define('node_modules/lodash/fp/bind', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('bind', require('node_modules/lodash/bind'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
