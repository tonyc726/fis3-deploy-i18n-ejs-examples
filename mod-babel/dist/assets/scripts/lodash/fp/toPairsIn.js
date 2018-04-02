define('node_modules/lodash/fp/toPairsIn', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toPairsIn', require('node_modules/lodash/toPairsIn'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
