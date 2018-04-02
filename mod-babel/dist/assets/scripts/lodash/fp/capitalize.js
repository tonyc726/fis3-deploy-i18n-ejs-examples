define('node_modules/lodash/fp/capitalize', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('capitalize', require('node_modules/lodash/capitalize'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
