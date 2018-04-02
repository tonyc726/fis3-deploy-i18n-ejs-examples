define('node_modules/lodash/fp/invert', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('invert', require('node_modules/lodash/invert'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
