define('node_modules/lodash/fp/flatten', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('flatten', require('node_modules/lodash/flatten'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
