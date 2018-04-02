define('node_modules/lodash/fp/escapeRegExp', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('escapeRegExp', require('node_modules/lodash/escapeRegExp'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
