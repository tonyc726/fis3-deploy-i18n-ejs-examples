define('node_modules/lodash/fp/intersectionBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('intersectionBy', require('node_modules/lodash/intersectionBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
