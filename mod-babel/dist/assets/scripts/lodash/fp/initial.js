define('node_modules/lodash/fp/initial', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('initial', require('node_modules/lodash/initial'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
