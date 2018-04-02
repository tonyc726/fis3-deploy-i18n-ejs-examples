define('node_modules/lodash/fp/stubArray', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('stubArray', require('node_modules/lodash/stubArray'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
