define('node_modules/lodash/fp/isArray', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isArray', require('node_modules/lodash/isArray'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
