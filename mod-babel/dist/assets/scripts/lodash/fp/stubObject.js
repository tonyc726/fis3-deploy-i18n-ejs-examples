define('node_modules/lodash/fp/stubObject', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('stubObject', require('node_modules/lodash/stubObject'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
