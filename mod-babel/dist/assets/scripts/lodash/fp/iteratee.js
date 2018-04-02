define('node_modules/lodash/fp/iteratee', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('iteratee', require('node_modules/lodash/iteratee'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
