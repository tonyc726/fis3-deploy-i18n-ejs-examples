define('node_modules/lodash/fp/find', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('find', require('node_modules/lodash/find'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
