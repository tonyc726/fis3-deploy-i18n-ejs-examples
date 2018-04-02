define('node_modules/lodash/fp/functions', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('functions', require('node_modules/lodash/functions'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
