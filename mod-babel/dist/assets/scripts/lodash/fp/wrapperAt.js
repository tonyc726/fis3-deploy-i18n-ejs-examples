define('node_modules/lodash/fp/wrapperAt', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('wrapperAt', require('node_modules/lodash/wrapperAt'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
