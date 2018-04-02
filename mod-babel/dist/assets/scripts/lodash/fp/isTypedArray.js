define('node_modules/lodash/fp/isTypedArray', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isTypedArray', require('node_modules/lodash/isTypedArray'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
