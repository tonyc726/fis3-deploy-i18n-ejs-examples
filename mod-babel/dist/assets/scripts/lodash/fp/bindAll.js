define('node_modules/lodash/fp/bindAll', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('bindAll', require('node_modules/lodash/bindAll'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
