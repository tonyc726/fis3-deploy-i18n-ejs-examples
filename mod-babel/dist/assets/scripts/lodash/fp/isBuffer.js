define('node_modules/lodash/fp/isBuffer', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isBuffer', require('node_modules/lodash/isBuffer'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
