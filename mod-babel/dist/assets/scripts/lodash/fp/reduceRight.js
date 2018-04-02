define('node_modules/lodash/fp/reduceRight', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('reduceRight', require('node_modules/lodash/reduceRight'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
