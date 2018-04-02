define('node_modules/lodash/fp/sum', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sum', require('node_modules/lodash/sum'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
