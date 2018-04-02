define('node_modules/lodash/fp/defer', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('defer', require('node_modules/lodash/defer'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
