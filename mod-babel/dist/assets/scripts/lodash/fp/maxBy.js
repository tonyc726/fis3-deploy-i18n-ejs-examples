define('node_modules/lodash/fp/maxBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('maxBy', require('node_modules/lodash/maxBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
