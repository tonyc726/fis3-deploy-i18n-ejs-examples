define('node_modules/lodash/_stringSize', function(require, exports, module) {

  var asciiSize = require('node_modules/lodash/_asciiSize'),
      hasUnicode = require('node_modules/lodash/_hasUnicode'),
      unicodeSize = require('node_modules/lodash/_unicodeSize');
  
  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }
  
  module.exports = stringSize;
  

});
