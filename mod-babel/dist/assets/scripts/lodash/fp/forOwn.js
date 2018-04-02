define('node_modules/lodash/fp/forOwn', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('forOwn', require('node_modules/lodash/forOwn'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
