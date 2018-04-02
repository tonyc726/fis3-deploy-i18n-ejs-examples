define('node_modules/lodash/fp/isEqual', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isEqual', require('node_modules/lodash/isEqual'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
