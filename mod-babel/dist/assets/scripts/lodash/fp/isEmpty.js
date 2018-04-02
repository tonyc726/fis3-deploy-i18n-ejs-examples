define('node_modules/lodash/fp/isEmpty', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isEmpty', require('node_modules/lodash/isEmpty'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
