define('node_modules/lodash/fp/truncate', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('truncate', require('node_modules/lodash/truncate'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
