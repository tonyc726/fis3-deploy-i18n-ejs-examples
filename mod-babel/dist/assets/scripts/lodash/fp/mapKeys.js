define('node_modules/lodash/fp/mapKeys', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('mapKeys', require('node_modules/lodash/mapKeys'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
