define('node_modules/lodash/fp/toFinite', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toFinite', require('node_modules/lodash/toFinite'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
