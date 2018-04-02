define('node_modules/lodash/fp/sampleSize', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sampleSize', require('node_modules/lodash/sampleSize'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
