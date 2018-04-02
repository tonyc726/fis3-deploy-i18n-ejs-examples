define('node_modules/lodash/fp/wrapperLodash', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('wrapperLodash', require('node_modules/lodash/wrapperLodash'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
