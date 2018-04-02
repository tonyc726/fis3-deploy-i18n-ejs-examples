define('node_modules/lodash/fp/overArgs', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('overArgs', require('node_modules/lodash/overArgs'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
