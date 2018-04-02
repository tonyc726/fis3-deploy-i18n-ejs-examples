define('node_modules/lodash/fp/lastIndexOf', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('lastIndexOf', require('node_modules/lodash/lastIndexOf'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
