define('node_modules/lodash/fp/bindKey', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('bindKey', require('node_modules/lodash/bindKey'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
