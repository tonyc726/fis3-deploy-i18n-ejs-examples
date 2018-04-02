define('node_modules/lodash/fp/escape', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('escape', require('node_modules/lodash/escape'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
