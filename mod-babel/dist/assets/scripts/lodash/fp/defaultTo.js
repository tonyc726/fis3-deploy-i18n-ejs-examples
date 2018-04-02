define('node_modules/lodash/fp/defaultTo', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('defaultTo', require('node_modules/lodash/defaultTo'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
