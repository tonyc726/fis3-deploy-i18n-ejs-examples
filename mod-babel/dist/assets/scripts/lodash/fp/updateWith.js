define('node_modules/lodash/fp/updateWith', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('updateWith', require('node_modules/lodash/updateWith'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
