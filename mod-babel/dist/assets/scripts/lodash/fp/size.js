define('node_modules/lodash/fp/size', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('size', require('node_modules/lodash/size'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
