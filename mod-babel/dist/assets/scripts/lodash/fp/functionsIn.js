define('node_modules/lodash/fp/functionsIn', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('functionsIn', require('node_modules/lodash/functionsIn'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
