define('node_modules/lodash/fp/merge', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('merge', require('node_modules/lodash/merge'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
