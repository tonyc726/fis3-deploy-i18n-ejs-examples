define('node_modules/lodash/fp/propertyOf', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('propertyOf', require('node_modules/lodash/get'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
