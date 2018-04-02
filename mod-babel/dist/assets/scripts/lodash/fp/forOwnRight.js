define('node_modules/lodash/fp/forOwnRight', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('forOwnRight', require('node_modules/lodash/forOwnRight'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
