define('node_modules/lodash/fp/valuesIn', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('valuesIn', require('node_modules/lodash/valuesIn'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
