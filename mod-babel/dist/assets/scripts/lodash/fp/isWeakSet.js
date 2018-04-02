define('node_modules/lodash/fp/isWeakSet', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isWeakSet', require('node_modules/lodash/isWeakSet'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
