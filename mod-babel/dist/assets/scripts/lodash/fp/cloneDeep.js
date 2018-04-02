define('node_modules/lodash/fp/cloneDeep', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('cloneDeep', require('node_modules/lodash/cloneDeep'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
