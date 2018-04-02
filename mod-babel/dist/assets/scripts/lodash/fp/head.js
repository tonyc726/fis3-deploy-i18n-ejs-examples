define('node_modules/lodash/fp/head', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('head', require('node_modules/lodash/head'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
