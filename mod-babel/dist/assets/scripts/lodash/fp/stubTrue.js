define('node_modules/lodash/fp/stubTrue', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('stubTrue', require('node_modules/lodash/stubTrue'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
