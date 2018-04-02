define('node_modules/lodash/fp/takeRight', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('takeRight', require('node_modules/lodash/takeRight'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
