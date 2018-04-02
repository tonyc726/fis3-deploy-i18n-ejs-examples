define('node_modules/lodash/fp/isFinite', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isFinite', require('node_modules/lodash/isFinite'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
