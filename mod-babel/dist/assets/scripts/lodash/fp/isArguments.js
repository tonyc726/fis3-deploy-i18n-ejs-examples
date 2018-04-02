define('node_modules/lodash/fp/isArguments', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isArguments', require('node_modules/lodash/isArguments'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
