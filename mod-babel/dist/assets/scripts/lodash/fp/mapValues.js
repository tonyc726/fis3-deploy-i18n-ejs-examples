define('node_modules/lodash/fp/mapValues', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('mapValues', require('node_modules/lodash/mapValues'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
