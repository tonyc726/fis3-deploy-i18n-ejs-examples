define('node_modules/lodash/fp/overSome', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('overSome', require('node_modules/lodash/overSome'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
