define('node_modules/lodash/fp/plant', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('plant', require('node_modules/lodash/plant'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
