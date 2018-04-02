define('node_modules/lodash/fp/matchesProperty', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('matchesProperty', require('node_modules/lodash/matchesProperty'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
