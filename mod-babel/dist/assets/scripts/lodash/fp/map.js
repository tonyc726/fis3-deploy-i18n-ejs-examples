define('node_modules/lodash/fp/map', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('map', require('node_modules/lodash/map'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
