define('node_modules/lodash/fp/pullAt', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('pullAt', require('node_modules/lodash/pullAt'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
