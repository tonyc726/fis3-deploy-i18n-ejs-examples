define('node_modules/lodash/fp/pull', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('pull', require('node_modules/lodash/pull'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
