define('node_modules/lodash/fp/max', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('max', require('node_modules/lodash/max'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
