define('node_modules/lodash/fp/clone', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('clone', require('node_modules/lodash/clone'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
