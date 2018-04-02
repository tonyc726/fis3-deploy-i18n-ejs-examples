define('node_modules/lodash/fp/thru', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('thru', require('node_modules/lodash/thru'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
