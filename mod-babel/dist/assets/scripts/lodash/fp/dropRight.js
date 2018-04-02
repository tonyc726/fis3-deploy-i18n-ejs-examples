define('node_modules/lodash/fp/dropRight', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('dropRight', require('node_modules/lodash/dropRight'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
