define('node_modules/lodash/fp/upperFirst', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('upperFirst', require('node_modules/lodash/upperFirst'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
