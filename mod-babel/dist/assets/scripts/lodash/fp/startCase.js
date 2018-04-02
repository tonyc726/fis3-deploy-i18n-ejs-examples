define('node_modules/lodash/fp/startCase', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('startCase', require('node_modules/lodash/startCase'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
