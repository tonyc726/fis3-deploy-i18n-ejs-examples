define('node_modules/lodash/fp/ceil', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('ceil', require('node_modules/lodash/ceil'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
