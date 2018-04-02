define('node_modules/lodash/fp/shuffle', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('shuffle', require('node_modules/lodash/shuffle'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
