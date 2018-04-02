define('node_modules/lodash/fp/pickBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('pickBy', require('node_modules/lodash/pickBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
