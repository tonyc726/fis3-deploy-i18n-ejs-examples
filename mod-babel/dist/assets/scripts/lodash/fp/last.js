define('node_modules/lodash/fp/last', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('last', require('node_modules/lodash/last'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
