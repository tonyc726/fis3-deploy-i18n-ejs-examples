define('node_modules/lodash/fp/fromPairs', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('fromPairs', require('node_modules/lodash/fromPairs'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
