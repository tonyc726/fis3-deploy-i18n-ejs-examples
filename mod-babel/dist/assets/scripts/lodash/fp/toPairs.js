define('node_modules/lodash/fp/toPairs', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toPairs', require('node_modules/lodash/toPairs'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
