define('node_modules/lodash/fp/compact', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('compact', require('node_modules/lodash/compact'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
