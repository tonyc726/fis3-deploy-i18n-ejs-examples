define('node_modules/lodash/fp/create', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('create', require('node_modules/lodash/create'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
