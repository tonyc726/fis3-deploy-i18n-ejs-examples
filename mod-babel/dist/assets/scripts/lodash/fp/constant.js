define('node_modules/lodash/fp/constant', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('constant', require('node_modules/lodash/constant'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
