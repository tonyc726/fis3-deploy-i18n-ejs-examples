define('node_modules/lodash/fp/isMap', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isMap', require('node_modules/lodash/isMap'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
