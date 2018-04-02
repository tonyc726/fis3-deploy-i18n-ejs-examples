define('node_modules/lodash/fp/inRange', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('inRange', require('node_modules/lodash/inRange'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
