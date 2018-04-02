define('node_modules/lodash/fp/isObjectLike', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isObjectLike', require('node_modules/lodash/isObjectLike'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
