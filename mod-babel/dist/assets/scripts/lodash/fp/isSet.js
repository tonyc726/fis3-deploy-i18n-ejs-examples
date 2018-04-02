define('node_modules/lodash/fp/isSet', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isSet', require('node_modules/lodash/isSet'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
