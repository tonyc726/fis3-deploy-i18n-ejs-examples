define('node_modules/lodash/fp/gte', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('gte', require('node_modules/lodash/gte'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
