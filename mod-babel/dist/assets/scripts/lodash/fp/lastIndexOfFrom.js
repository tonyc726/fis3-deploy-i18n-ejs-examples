define('node_modules/lodash/fp/lastIndexOfFrom', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('lastIndexOfFrom', require('node_modules/lodash/lastIndexOf'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
