define('node_modules/lodash/fp/sumBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sumBy', require('node_modules/lodash/sumBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
