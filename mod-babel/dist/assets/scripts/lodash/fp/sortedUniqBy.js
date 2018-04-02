define('node_modules/lodash/fp/sortedUniqBy', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('sortedUniqBy', require('node_modules/lodash/sortedUniqBy'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
