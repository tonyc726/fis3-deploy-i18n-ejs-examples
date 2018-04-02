define('node_modules/lodash/fp/isNull', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isNull', require('node_modules/lodash/isNull'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
