define('node_modules/lodash/fp/findKey', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('findKey', require('node_modules/lodash/findKey'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
