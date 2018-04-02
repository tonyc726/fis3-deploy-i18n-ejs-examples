define('node_modules/lodash/fp/toLower', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('toLower', require('node_modules/lodash/toLower'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
