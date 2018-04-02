define('node_modules/lodash/fp/uniqBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('uniqBy', require('node_modules/lodash/uniqBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
