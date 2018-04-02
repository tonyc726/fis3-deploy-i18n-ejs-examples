define('node_modules/lodash/fp/sample', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sample', require('node_modules/lodash/sample'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
