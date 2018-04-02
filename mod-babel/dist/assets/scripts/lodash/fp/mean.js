define('node_modules/lodash/fp/mean', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('mean', require('node_modules/lodash/mean'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
