define('node_modules/lodash/fp/defaultsDeep', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('defaultsDeep', require('node_modules/lodash/defaultsDeep'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
